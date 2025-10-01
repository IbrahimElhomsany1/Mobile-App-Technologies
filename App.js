import { StatusBar } from "expo-status-bar";
import { Profiler } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Dimensions } from "react-native";
import Profile from "./components/Profile";
import { useState } from "react";
import Lab2 from "./components/Lab2";
import Item from "./components/Item";
import Items from "./components/Items";
import Assignment from "./components/Assignment";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const myFontSize = windowWidth * 0.04;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Assignment />
    </SafeAreaView>
    //<Image source = {{uri:"https://media.istockphoto.com/id/513392620/photo/big-dog.jpg?s=612x612&w=0&k=20&c=YgiuJ9_3LGYwHB40IVMnjwv8p-4RCFLwcD-yJAOYAGE="}}>
    //    style={styles.img}/>

    //   <View style={{flexDirection:'row', backgroundColor:'orange', alignItems:'center'}}>
    //   <TouchableOpacity style={styles.btn} onPress={()=>dec()}>
    //     <Text style={styles.txt}>-</Text>
    //   </TouchableOpacity>
    //     <Text style={styles.txt}>{qty}</Text>
    //   <TouchableOpacity style={styles.btn} onPress={()=>inc()}>
    //     <Text style={styles.txt}>+</Text>
    //   </TouchableOpacity>

    //   </View>

    //     <TextInput
    //     style={styles.in}
    //     placeholder='Type...'
    //     onChangeText={(txt)=>setContent(txt)}
    //     />

    //     <Text style={styles.txt}> You Typed : {content}</Text>
    //
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: "center",
  //   backgroundColor: "#ffffffff",
  //   justifyContent: "space-around",
  // },
  // myFont:{
  //   fontSize: 15,
  //   color: '#0f0e0eff',
  //   textAlign:'center',
  // },
  // txt:{
  //   fontSize: myFontSize,
  // },
  // in:{
  //   width:windowWidth*0.2,
  //   height:windowHeight*0.05,
  //   fontSize:myFontSize,
  //   backgroundColor:'lightblue'
  // },
  // btn:{
  //   width:windowWidth*0.07,
  //   height:windowHeight*0.07,
  //   backgroundColor:'lightblue',
  //   justifyContent:'center',
  //   alignItems:'center',
  //   margin:windowWidth*0.05
  // },
  // img:{
  //   width:windowWidth*0.4,
  //   height:windowHeight*0.4
  // }
});
