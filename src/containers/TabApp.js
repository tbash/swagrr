import TabApp from '../components/TabApp'
import { selectTab } from '../actions/tabs'
import { connect } from 'react-redux'

const mapStatesToProp = (state) => {
	return {
		selectedTab: state.tabs.selectedTab
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onTabSelect: (t) => {
			dispatch(selectTab(t))
		}
	}
}

const TabAppContainer = connect(
	mapStatesToProp,
	mapDispatchToProps
)(TabApp)

export default TabAppContainer