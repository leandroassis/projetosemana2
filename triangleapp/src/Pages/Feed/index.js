import React, {useState} from 'react';
import { StyleSheet, StatusBar, Text, View, FlatList, SectionList } from 'react-native';

import Header from "../../Components/Header/index";
import Stories from "../../Components/Stories/index";

import Footer from "../../Components/footer"
import Post from "../../Components/newPost"
import Counter from "../../Components/counter"

import Item from "../../Components/Item/index"


export default function Feed({navigation}) {
 const list = [
   {
    id:1,
    userPhoto: require("../../Components/Images/usuario7.png"),
    nickname: "Júlia",
    username: "@julia_chagas",
    message: "Amando fazer o projeto da Fluxo!",
    photoMessage: require("../../Components/Images/orangeHeart.jpg"),
    likesCount: 8,
    nickComent:"Giovanni: ",
    coment:"Irado!Boa Sorte no projeto!! "
   },
   {
    id:2,
    userPhoto: require("../../Components/Images/usuario4.png"),
    nickname: "Bruno",
    username: "@bruno_aguiar",
    message: "Ajudei a galera no Git!",
    photoMessage:"",
    likesCount:5,
    nickComent:"Isabela: ",
    coment:"Você é fera, Bruno!"
   },
   {
    id:3,
    userPhoto: require("../../Components/Images/usuario5.png"),
    nickname: "Ruth",
    username: "@ruth_menezes",
    message: "A galera do PAME 20.1.2 tá dando a vida!!",
    photoMessage:"",
    likesCount:9,
    nickComent:"Isabella: ",
    coment:"Verdade! Assim que a gente gosta!"
   },
   {
    id:4,
    userPhoto: require("../../Components/Images/gaia.jpeg"),
    nickname: "Gaia",
    username: "@dog_gaia",
    message: "auauau!",
    photoMessage: require("../../Components/Images/fotodog.jpeg"),
    likesCount:600,
    nickComent:"Julia: ",
    coment:"Que fofo!"
    
   },
   {
    id:5,
    userPhoto: require("../../Components/Images/logo_triangle.jpg"),
    nickname: "Triangle",
    username: "@triΔngleApp",
    message: "Bem Vindos ao TriΔngle!",
    photoMessage: require("../../Components/Images/logo_triangle.jpg"),
    likesCount:2,
    nickComent:"Leandro: ",
    coment:"TriΔngle tá On!"
    
   }
 ]

 function AddNewItem(){
    const index = list.length -1
    const lastId = list[index].id 
    const NewItem = {
      id:lastId+1,
      userPhoto: require("../../Components/Images/gaia.jpeg"),
      nickname: "Gaia",
      username: "@dog_gaia",
      message: "",
      photoMessage: "",
      likesCount:44,
      nickComent:"Leandro: ",
      coment:""
   }
    let newList = list
    newList.push(NewItem);
    setList(newList);
    const [postCounter, setCounter] = useState(5)
    setCounter(postCounter+1)
 }


  return (
    <View style={styles.container}>
    
      <Header />
      <Stories  />
      
      <FlatList 
      data={list}
      inverted={true}
      keyExtractor = {(item) =>item.id.toString() }
      renderItem={({item}) => <Item imageUser={item.userPhoto}
                                    nickname={item.nickname} 
                                    username={item.username}
                                    message={item.message} 
                                    imagePost={item.photoMessage}
                                    likesCount={item.likesCount}
                                    nickComent={item.nickComent}
                                    coment={item.coment}/>
       }    />
      
      <Counter postCounter={postCounter}/>
      <Footer/>
      <Post navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: "100%",
  }
});
