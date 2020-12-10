import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const PostCounter = () => {
  const [count, setCount] = useState(5);
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
        <Text style={{fontSize:15}}>add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
    
    backgroundColor: "#a9a9a9",
    marginBottom:30,
    paddingTop:15,
    
  },
  button: {
      alignItems:"center",
      paddingLeft:10,
     
    
  },
  countContainer: {
      height:40,
      backgroundColor:"#f3833f",
      justifyContent:"center",
      alignItems:"center",
      marginHorizontal:10
   
  }
});

export default PostCounter;