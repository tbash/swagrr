import React, {
  StyleSheet,
  Component,
  View,
  TabBarIOS,
  Text,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'house',
      notifCount: 0
    };
  }

  _renderContent(color: string, icon: string) {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{icon}</Text>
      </View>
    );
  }

  render() {
    const { dispatch, isAuthenticated } = this.props
    return (
        <TabBarIOS selectedTab={this.state.selectedTab}>
          <TabBarIOS.Item
            title="House"
            icon={require('./homeIcon.png')}
            selected={this.state.selectedTab === 'house'}
            onPress={() => {
              this.setState({
                selectedTab: 'house',
              });
          }}>
          {this._renderContent('#414A8C', '🏚')}
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Mag"
            selected={this.state.selectedTab === 'mag'}
            onPress={() => {
              this.setState({
                selectedTab: 'mag',
              });
          }}>
          {this._renderContent('#414A8C', '🔍')}
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Camera"
            selected={this.state.selectedTab === 'camera'}
            onPress={() => {
              this.setState({
                selectedTab: 'camera',
              });
          }}>
          {this._renderContent('#414A8C', '📷')}
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Inbox Tray"
            selected={this.state.selectedTab === 'inboxTray'}
            onPress={() => {
              this.setState({
                selectedTab: 'inboxTray',
              });
          }}>
          {this._renderContent('#414A8C', '📥')}
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Dog"
            selected={this.state.selectedTab === 'dog'}
            onPress={() => {
              this.setState({
                selectedTab: 'dog',
              });
          }}>
          {this._renderContent('#414A8C', '🐶')}
          </TabBarIOS.Item>
        </TabBarIOS>
    )
  }
}
