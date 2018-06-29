import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

const Home = (props) => {

  const lastInfo = (props.lastInfo||{}).payload

  return (
    <View style={styles.homeStyle}>
      <Image
        style={styles.mapStyle}
        source={require(`../img/map.png`)}
      />
      <Text style={styles.homeTextStyle}>
        {`Temperatura: ${lastInfo.temperatura}ºC\n\nUmidade: ${lastInfo.umidade}%`}
      </Text>
    </View>
  )
}

const styles = {
  homeStyle: {
    flex : 1,
    alignItems: 'center'
  },
  homeTextStyle : {
    marginTop: 'auto',
    marginBottom: 'auto',
    textAlign: 'center',
    fontSize : 20
  },
  mapStyle : {
    resizeMode: 'cover'
  }
}

export default Home;
