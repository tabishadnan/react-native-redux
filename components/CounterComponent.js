import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const CounterComponent = () => {

  const counter = useSelector(state => state.CounterReducer.counter);

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>Counter : {counter}</Text>
      <Button title="INCREMENT" onPress={() => dispatch({type:"INCREMENT"})} /> 
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CounterComponent;
