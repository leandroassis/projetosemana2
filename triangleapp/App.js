import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';

import FeedToWritePost from "./src/Routes/WritePost.routes";
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar backgroundColor = {"#a9a9a9"}/>
        <FeedToWritePost/>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
