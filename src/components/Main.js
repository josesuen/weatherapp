import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NavBar from './NavBar';
import Amplify, { API } from 'aws-amplify';

class Main extends Component {
  state = {
    selectedTab: 0
  }

  handleTab(tab) {
      this.setState({selectedTab: tab})
  }

  renderTabs() {
    switch (this.state.selectedTab) {
      case 0:
        return (
          <View style={styles.homeStyle}>
            <Text style={styles.homeTextStyle}>
              Home
            </Text>
          </View>
        );
        break;
      case 1:
        return (
          <View style={styles.homeStyle}>
            <Text style={styles.homeTextStyle}>
              Historico
            </Text>
          </View>
        );
        break;
      default:
        return (
          <View style={styles.homeStyle}>
            <Text style={styles.homeTextStyle}>
              {`Feito por:\nJosé Suen\nThomas Herbst`}
            </Text>
          </View>
        );
    }
  }

  render(){
    const navItems = ['home', 'history', 'about']
    return (
      <View style={{ flex: 1 }}>
        <NavBar items={navItems} selectedTab={this.state.selectedTab} onSelectTab={this.handleTab.bind(this)} />
        {this.renderTabs()}
      </View>
    );
  }
}

const styles = {
  homeStyle: {
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  homeTextStyle : {
    textAlign: 'center',
    fontSize : 20
  }
}

export default Main;
