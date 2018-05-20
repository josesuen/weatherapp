import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

const History = (props) => {
  return (
    <View style={styles.homeStyle}>
      <FlatList
        data={props.allInfo}
        renderItem={({item}) => (
          <View>
            <Text>Estacao: {JSON.stringify(item.payload.estacaoId)}</Text>
            <Text>Horario: {JSON.stringify(item.payload.timestamp)}</Text>
            <Text>Temp: {JSON.stringify(item.payload.temperatura)}</Text>
          </View>
        )}
      />
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

export default History;
