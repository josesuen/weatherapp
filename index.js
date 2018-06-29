import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Main from './src/components/Main';
import Amplify from 'aws-amplify';
import aws_exports from './src/aws-exports.js';

Amplify.configure(aws_exports);

const App = () => {
  return <Main />;
}

AppRegistry.registerComponent('weatherApp', () => App);
