import React from 'react';
import { View, Text } from 'react-native';

const NavBar = (props) => {

  return (
    <View style={styles.navStyle}>
      {props.items.map((item, i) => (
        <View key={item} style={{...styles.tabStyle}}>
          <Text style={styles.tabTextStyle}>{item}</Text>
        </View>
      ))}
    </View>
  );
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
