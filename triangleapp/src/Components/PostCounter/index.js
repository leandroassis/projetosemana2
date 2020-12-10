import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Counter = () => {
  const [count, setCount] = useState(6);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text>Posts: {count}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={{fontSize:15}}></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: 200,
    height: 50
  },
  button: {
    alignItems: "center",
    backgroundColor: "#fff",
    height:20,
    width:100,
    marginLeft: 130,
  },
  countContainer: {
    alignItems: "center",
    marginLeft: 20,
    width: 80,
    height: 5

  }
});

export default Counter;