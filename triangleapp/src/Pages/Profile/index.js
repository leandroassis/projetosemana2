import React from 'react';
import { StyleSheet, StatusBar, Text, View, FlatList } from 'react-native';

import Footer from "../../Components/footer"
import HeaderProfile from "../../Components/HeaderProfile"
import Item from "../../Components/Item/index"

export default function Profile() {
    const profilePost = [
      {
       id:1,
       userPhoto: require("../../Components/Images/usuario7.png"),
       nickname: "Júlia",
       username: "@julia_chagas",
       message: "Amando fazer o projeto da Fluxo!",
       photoMessage: require("../../Components/Images/orangeHeart.jpg"),
       likesCount: 8,
       nickComent:"Giovanni: ",
       coment:" Irado! Boa Sorte no projeto!! "
      }
       ]

    return (
        <View style={styles.container}>
        
          <HeaderProfile />
          
          
          <FlatList 
          data={profilePost} 
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
          
          
          <Footer/>
          
        
        </View>
      );}

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          height: "100%",
        }
      });
      


















