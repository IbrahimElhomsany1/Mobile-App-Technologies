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

const Item = (props) => {
  const [qty, setQty] = useState(0);
  const inc = () => setQty(qty + 1);
  const dec = () => {
    if (qty > 0) setQty(qty - 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text>{props.price} QR</Text>
        <Image source={props.img} style={styles.img} />

        <TouchableOpacity style={styles.btn} onPress={props.dec}>
          <Text style={styles.txt}>-</Text>
        </TouchableOpacity>
        <Text style={styles.txt}>{props.qty}</Text>
        <TouchableOpacity style={styles.btn} onPress={props.inc}>
          <Text style={styles.txt}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 11,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: windowWidth,
    paddingHorizontal: 20,
  },

  img: {
    width: windowWidth * 0.2,
    height: windowHeight * 0.2,
    resizeMode: "contain",
  },
  txt: {
    fontSize: 22,
    color: "black",
    textAlign: "center",
  },

  btn: {
    width: windowWidth * 0.07,
    height: windowHeight * 0.04,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },
});
