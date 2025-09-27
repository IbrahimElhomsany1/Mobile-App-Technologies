 
import React from 'react'
import {KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform,
    StyleSheet, Text, View, TextInput
} from 'react-native';

const ClassWork = () => {
return (
<View style={styles.container}>
<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
<KeyboardAvoidingView
behavior={Platform.OS === "ios" ? "padding" : "height"}
style={styles.inner} >
<Text style={styles.header}>Header</Text>
<TextInput placeholder="Username" style={styles.textInput} />
</KeyboardAvoidingView>
</TouchableWithoutFeedback>
</View>

  )
}

export default ClassWork

const styles = StyleSheet.create({
    container:{
        flex:0
    }
})