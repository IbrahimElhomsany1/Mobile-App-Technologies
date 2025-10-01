import { useState } from 'react';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  TouchableOpacity,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const myFontSize = windowWidth * 0.04;

const Practice = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [inputText, setInputText] = useState('');

  const categoryColors = {
    Food: 'blue',
    Grocery: 'green',
    Pharmacy: 'yellow',
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Horse.png')} style={styles.img} />
      <View style={styles.btnRow}>
        {['Food', 'Grocery', 'Pharmacy']}.map((category)) =>(
        <TouchableOpacity
          key={day}
          style={styles.btn}
          onPress={() => {
            setSelectedCategory(category);
            setInputText('');
          }}>
          <Text style={styles.txt}>{category}</Text>
        </TouchableOpacity>
        ))}
      </View>
      <TextInput
        style={[
          styles.input,
          { backgroundColor: categoryColors[selectedCategory] },
        ]}
        placeholder="Note..."
        placeholderTextColor="white"
        value={inputText}
        onChangeText={(text) => setInputText(text)}
      />

      <Text>Number of Chars: {inputText.length}</Text>
    </View>
  );
};

export default Practice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },

  img: {
    width: 400,
    height: 150,
    marginBottom: 200,
    resizeMode: 'contain',
  },

  txt: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },

  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'gray',
    justifyContent: 'center',
    marginHorizontal: 8,
    width: 80,
    height: 50,
  },

  input: {
    width: 250,
    height: 150,
    fontSize: 16,
    color: 'white',
    marginBottom: 50,
  },

  btnRow: {
    flexDirection: 'row',
    marginBottom: 150,
  },
});
