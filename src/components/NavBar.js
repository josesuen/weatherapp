import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';

class NavBar extends Component {
  selectTab(tab){
    console.log('a')
     this.props.onSelectTab(tab)
  }

  render() {
    const props = this.props

    return (
      <View style={styles.navStyle}>
        {props.items.map((item, i) => (
          <TouchableNativeFeedback
            key={item}
            onPress={() => this.selectTab(i)}
          >
            <View
            style={i==props.selectedTab?{...styles.tabStyle,...styles.selectedTabStyle}:styles.tabStyle}>
              <Text style={styles.tabTextStyle}>{item}</Text>
            </View>
          </TouchableNativeFeedback>
        ))}
      </View>
    );
  }
}

const styles = {
  navStyle: {
    flexDirection: 'row'
  },
  tabStyle: {
    alignItems: 'center',
    padding: 15,
    flexBasis: 0,
    flexGrow: 1,
    backgroundColor: '#17B'
  },
  selectedTabStyle: {
    borderBottomWidth: 5
  },
  tabTextStyle: {
    fontSize: 20
  }
}

export default NavBar;
