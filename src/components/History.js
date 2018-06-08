import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import Moment from 'moment';

const History = (props) => {
  return (
    <View style={styles.homeStyle}>
      <FlatList
        data={props.allInfo}
        keyExtractor={item => `${item.payload.estacaoId}_${item.payload.timestamp}`}
        renderItem={({item}) => (
          <View style={styles.itemStyle}>
            <Text>Estacao: {item.payload.estacaoId}</Text>
            <Text>Horario: {Moment(item.payload.timestamp, 'X').format('YYYY/MM/DD HH:mm')}</Text>
            <Text>Temp: {item.payload.temperatura}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = {
  homeStyle: {
    flex : 1,
  },
  itemStyle: {
    padding: 16,
    borderBottomWidth: 1
  }
}

export default History;
