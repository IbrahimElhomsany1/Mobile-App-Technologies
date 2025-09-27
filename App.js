import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, SafeAreaView, TextInput, Image, TouchableOpacity } from 'react-native';
import {Dimensions} from 'react-native';
import Profile from './components/Profile';
import ClassWork from './components/ClassWork';
import { useState } from 'react';
import Lab2 from './components/Lab2';
import Item from './components/Item';
import Items from './components/Items';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const myFontSize = windowWidth*0.04
export default function App() {

  return (
     <SafeAreaView style={styles.container}>
    {/* <Lab2/> */}
  <Items/>
    
     
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
   // alignItems:'center',
   //justifyContent:'space-around',
    //padding:'2%', 
    backgroundColor:'gray'
   },

  txt :{
    fontSize: myFontSize,
  //color:'white'  
  },
  img:{
    width:windowWidth*0.4,
    height:windowWidth*0.4
  },
  in:{
width:windowWidth*0.2,
height:windowHeight*0.05,
fontSize:myFontSize,
backgroundColor:'lightblue'
  },
  btn:{
    width:windowWidth*0.07,
    height: windowWidth*0.07,
    backgroundColor:'lightblue',
    justifyContent:'center',
    alignItems:'center',
    margin:windowWidth*0.05
  }
});
