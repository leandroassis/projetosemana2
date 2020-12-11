import React from 'react';
import { StyleSheet, StatusBar, Text, View, FlatList } from 'react-native';


//import Header from "./src/Components/Header/index";
//import Stories from "./src/Components/Stories/index";
//import Body from "./src/Components/body"
//import Footer from "./src/Components/footer"
//import Post from "./src/Components/newPost"
//import Counter from "./src/Components/counter"
//import Flatlist from "./src/Components/bodyFlatlist"
//import Item from "./src/Components/Item/index"


import Feed from "./src/Pages/Feed/index"

export default function App() {
 
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor = {"#a9a9a9"}/>
      <Feed/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
