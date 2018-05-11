import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NavBar from './NavBar';

class Main extends Component {
  state = { selectedTab: 0 }

  componentWillMount() {
      this.setState({selectedTab: 1})
  }

  render(){
    const navItems = ['home', 'history']
    return (
      <View>
        <NavBar items={navItems} selectedTab={this.state.selectedTab} />
        <Text>{this.state.selectedTab}</Text>
      </View>
    );
  }
}

export default Main;
