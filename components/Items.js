import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Item from "./Item";

const Items = () => {
  const [db, setDb] = useState([
    {
      name: "Laptop",
      price: 1000,
      img: require("../assets/laptop.png"),
      qty: 0,
    },
    { name: "Mouse", price: 500, img: require("../assets/Mouse.jpeg"), qty: 0 },
    {
      name: "Keyboard",
      price: 200,
      img: require("../assets/Keyboard.jpeg"),
      qty: 0,
    },
    {
      name: "Screen",
      price: 400,
      img: require("../assets/Screen.jpeg"),
      qty: 0,
    },
  ]);

  const inc = (index) => {
    let temp = [...db];
    temp[index].qty = temp[index].qty + 1;
    setDb([...temp]);
  };

  const dec = (index) => {
    if (db[index].qty == 0) return;
    let temp = [...db];
    temp[index].qty = temp[index].qty - 1;
    setDb([...temp]);
  };

  const findTotal = () => {
    let itemQty = db.find((x, i) => x.name == "Laptop" && x.qty >= 5);
    console.log("itemQty =", itemQty);
    let total = db.reduce((acc, cur) => acc + cur.qty * cur.price, 0);
    let totalQty = db.reduce((acc, cur) => acc + cur.qty, 0);
    let savedAmount = 0;
    if (totalQty >= 10) {
      savedAmount = total * 0.1;
      total = total * 0.9;
    }
    return [total, savedAmount];
  };

  return (
    <View style={styles.container}>
      {db.map((x, i) => (
        <Item
          key={i}
          price={x.price}
          img={x.img}
          qty={x.qty}
          inc={() => inc(i)}
          dec={() => dec(i)}
        />
      ))}

      {findTotal()[1] > 0 ? (
        <Text style={styles.txt}>
          Total = {findTotal()[0]} You saved: {findTotal()[1]}
        </Text>
      ) : (
        <Text style={styles.txt}>Total = {findTotal()[0]}</Text>
      )}
    </View>
  );
};

export default Items;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt: {
    fontSize: 22,
    color: "black",
    textAlign: "center",
  },
});
