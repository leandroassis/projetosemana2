import React from 'react';
import { StyleSheet, StatusBar, Text, View, FlatList } from 'react-native';

import Header from "../../Components/Header/index";
import Stories from "../../Components/Stories/index";

import Footer from "../../Components/footer"
import Post from "../../Components/newPost"
import PostCounter from "../../Components/PostCounter/index"

import Item from "../../Components/Item/index"


export default function Feed() {
 const list = [
   {
    id:1,
    userPhoto: require("../../Components/Images/usuario7.png"),
    nickname: "Júlia",
    username: "@julia_chagas",
    message: "Amando fazer o projeto da Fluxo!",
    photoMessage: require("../../Components/Images/orangeHeart.jpg")
   },
   {
    id:2,
    userPhoto: require("../../Components/Images/usuario4.png"),
    nickname: "Bruno",
    username: "@bruno_aguiar",
    message: "Ajudei a galera no Git!",
    photoMessage:""
   },
   {
    id:3,
    userPhoto: require("../../Components/Images/usuario5.png"),
    nickname: "Ruth",
    username: "@ruth_menezes",
    message: "A galera do PAME 20.1.2 tá dando a vida!!"
   },
   {
    id:4,
    userPhoto: require("../../Components/Images/gaia.jpeg"),
    nickname: "Gaia",
    username: "@dog_gaia",
    message: "auauau!",
    photoMessage: require("../../Components/Images/fotodog.jpeg")
   },
   {
    id:5,
    userPhoto: require("../../Components/Images/logo_triangle.jpg"),
    nickname: "Triangle",
    username: "@triangleApp",
    message: "Bem Vindos ao Triangle!",
    photoMessage: require("../../Components/Images/logo_triangle.jpg")
   }
 ]





  return (
    <View style={styles.container}>
    
      <Header />
      <Stories  />
      
      <FlatList 
      data={list} 
      keyExtractor = {(item) =>item.id.toString() }
      renderItem={({item}) => <Item imageUser={item.userPhoto} nickname={item.nickname} username={item.username} message={item.message} imagePost={item.photoMessage}/>
       }    />
      
      
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
  }
});
