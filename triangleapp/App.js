import React from 'react';
import { StyleSheet, StatusBar, Text, View } from 'react-native';

import Header from "./src/Components/Header/index";
import Stories from "./src/Components/Stories/index";
import Body from "./src/Components/body"
import Footer from "./src/Components/footer"
import Post from "./src/Components/newPost"
import Counter from "./src/Components/counter"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor = {"#a9a9a9"}/>
      <Header />
      <Stories  />
      <Counter/>
      <Body />
      <Footer/>
      <Post/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    height: "100%",
  },
});
