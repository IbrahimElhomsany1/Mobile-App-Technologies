import { StyleSheet, Text,Image, View, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const myFontSize = windowWidth*0.04
const Item = (props) => {
    
    
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text>{props.price} QR</Text>
        <Image source={props.img} 
        style={styles.img}
        />
        <TouchableOpacity style={styles.btn}
        onPress={props.dec}>
            <Text style={styles.txt}>-</Text>
        </TouchableOpacity>

        <Text style={styles.txt}>{props.qty}</Text>
         <TouchableOpacity style={styles.btn}
         onPress={props.inc}>
            <Text style={styles.txt}>+</Text>
        </TouchableOpacity>
        </View>  
    </View>
  )
}

export default Item

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',

    },
    img:{
        width:windowWidth*0.2,
        height:windowWidth*0.2,
        resizeMode:'contain'
    },
    btn:{
        width:windowWidth*0.07,
        height:windowWidth*0.07,
        backgroundColor:'lightblue',
        justifyContent:'center',
        alignItems:'center'
    },
    txt:{
        fontSize:myFontSize
    },
    item:{
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'orange',
        alignItems:'center'
    }


})