import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = props=> {
  return (
    <View style={{backgroundColor:'lightblue'}}>
      <Text style={{fontsize:20}}>Profile{props.name}</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})