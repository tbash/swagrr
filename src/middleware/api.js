import { arrayOf, normalize } from 'normalizr';
import { API_ROOT } from '../constants/Config';
import { camelizeKeys } from 'humps';
import 'isomorphic-fetch';

function callApi(endpoint, schema, authenticated, method, configBody) {
  let token = localStorage.getItem('access_token') || null;
  let config = {};

  if(authenticated) {
    if(token) {
      config = {
        method: method,
        headers: { 'Content-Type':'application/json',
                   'Authorization': `Bearer ${token}`
        },
        body: configBody
      };
    } else {
      throw "token n/a";
    }
  }

  return fetch((API_ROOT + endpoint), config)
    .then(response =>
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      const camelizedJson = camelizeKeys(json);

      return normalize(camelizedJson, schema);
    })
}

export const CALL_API = Symbol('Call API');

export default store => next => action => {
  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  let { endpoint } = callAPI;
  const { schema, types, authenticated, configMethod, configBody } = callAPI;

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.');
  }
  if (!schema) {
    throw new Error('Specify one of the exported Schemas.');
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.');
  }
  if (configMethod !== 'POST' || configMethod !== 'PUT') {
    const configMethod = 'GET';
    const configBody = null;
  }

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  }

  const [ requestType, successType, failureType ] = types;
  next(actionWith({ type: requestType }));

  return callApi(endpoint, schema, authenticated, configMethod, configBody).then(
    response => next(actionWith({
      response,
      authenticated,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Something has gone wrong.'
    }))
  );
}
