import React, { Component } from 'react';
import { View, Text } from 'react-native';

const Home = (props) => {

  const lastInfo = (props.lastInfo||{}).payload

  return (
    <View style={styles.homeStyle}>
      <Text style={styles.homeTextStyle}>
        {
          lastInfo ?
            `Temperatura: ${lastInfo.temperatura}ºC\n\nUmidade: ${lastInfo.umidade}%`:
            'Carregando'
        }
      </Text>
    </View>
  )
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

export default Home;
