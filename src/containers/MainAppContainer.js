
import React, { View, Component, PropTypes, Text} from 'react-native'
import MainApp from '../components/MainApp'
import { selectTab } from '../actions/tabs'

export default class MainAppContainer extends Component {
	
	render() {
    	const { dispatch, isAuthenticated, selectedTab } = this.props

	    return (
	      <MainApp
	      	selectedTab={selectedTab}
	      	onSelect={t => {
	      		dispatch(selectTab(t))
	      	}}/>
	    )
	}
}

MainAppContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
}