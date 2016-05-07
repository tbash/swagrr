import MainApp from '../components/MainApp'
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

const MainAppContainer = connect(
	mapStatesToProp,
	mapDispatchToProps
)(MainApp)

export default MainAppContainer