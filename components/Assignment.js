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
} from "react-native";
import React from "react";
import { useState } from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const myFontSize = windowWidth * 0.04;

const Assignment = () => {
  const [selectedDay, setSelectedDay] = useState();
  const [inputText, setInputText] = useState("");

  const dayColors = {
    Mon: "green",
    Tue: "red",
    Wed: "blue",
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/udst.png")} style={styles.img} />
      <View style={styles.btnRow}>
        {["Mon", "Tue", "Wed"].map((day) => (
          <TouchableOpacity
            key={day}
            style={styles.btn}
            onPress={() => {
              setSelectedDay(day);
              setInputText("");
            }}
          >
            <Text style={styles.txt}>{day}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput
        style={[styles.input, { backgroundColor: dayColors[selectedDay] }]}
        placeholder="Note..."
        placeholderTextColor="white"
        value={inputText}
        onChangeText={(text) => setInputText(text)}
      />

      <Text style={styles.charCount}>Number of chars: {inputText.length}</Text>
    </View>
  );
};

export default Assignment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 60,
  },

  img: {
    width: 400,
    height: 150,
    marginBottom: 200,
    resizeMode: "contain",
  },

  btnRow: {
    flexDirection: "row",
    marginBottom: 150,
  },
  txt: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
  },

  btn: {
    paddindVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "gray",
    justifyContent: "center",
    marginHorizontal: 8,
    width: 80,
    height: 50,
  },

  input: {
    width: 250,
    height: 150,
    fontSize: 16,
    color: "white",
    marginBottom: 50,
  },
});
