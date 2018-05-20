import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { API } from 'aws-amplify';
import NavBar from './NavBar';
import Home from './Home';
import History from './History';

class Main extends Component {
  state = {
    selectedTab: 0,
    apiResponse : {}
  }

  async componentDidMount() {
    const path = "/estacoes/1";
    try {
      const apiResponse = await API.get("estacoesCRUD", path);
      this.setState({apiResponse});
    } catch (e) {
      this.setState({ 'error' : e });
    }
  }

  handleTab(tab) {
    this.setState({selectedTab: tab})
  }

  renderTabs() {
    switch (this.state.selectedTab) {
      case 0:
        return <Home lastInfo={this.state.apiResponse[this.state.apiResponse.length-1]}/>;
        break;
      case 1:
          return <History allInfo={this.state.apiResponse}/>;
        break;
      default:
        return (
          <View style={styles.homeStyle}>
            <Text style={styles.homeTextStyle}>
              {`Criado por:\nJosé Suen\nThomas Herbst`}
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
