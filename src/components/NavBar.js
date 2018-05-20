import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback, Image } from 'react-native';

const logos = {
  home: require(`../img/home.png`),
  history: require(`../img/clock.png`),
  about: require(`../img/help.png`)
}

class NavBar extends Component {
  selectTab(tab){
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
                <Image
                  style={styles.navIconStyle}
                  source={logos[item]}
                />
              </View>
            </TouchableNativeFeedback>
          )
        )}
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
    paddingTop: 20,
    flexBasis: 0,
    flexGrow: 1,
    backgroundColor: '#17B'
  },
  selectedTabStyle: {
    borderBottomWidth: 5
  },
  navIconStyle: {
    height: 24
  }
}

export default NavBar;
