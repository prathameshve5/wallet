
import React, { Component } from 'react';
import { StyleSheet, Text, View ,Dimensions, NativeModules} from 'react-native';

import TotalBalance from './Components/TotalBalance'
var width = Dimensions.get('window').width;
class App extends Component {
  render(){
    return (
  
       
     <TotalBalance />
   
     
    );
  }
  
}

module.exports = App

