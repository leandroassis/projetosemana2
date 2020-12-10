import React from "react";
import {View, StyleSheet, Image,ScrollView} from "react-native";

import UserStoriesPhotos from "../UserStoriesPhotos/index.js"

export default function Stories (){
    return(
    <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <UserStoriesPhotos photoSrc={require("../Images/usuario5.png")}     userName="Isabela"  />
            <UserStoriesPhotos photoSrc={require("../Images/usuario1.png")}     userName="Ruth" />
            <UserStoriesPhotos photoSrc={require("../Images/usuario3.png")}     userName="Bruno" />
            <UserStoriesPhotos photoSrc={require("../Images/usuario4.png")}     userName="Giovanni" />
            <UserStoriesPhotos photoSrc={require("../Images/usuario7.png")}     userName="Julia" />
            <UserStoriesPhotos photoSrc={require("../Images/usuario6.png")}     userName="Isabella" />
            <UserStoriesPhotos photoSrc={require("../Images/inri-cristo.jpg")}  userName="Roberto" />



            
        </ScrollView>

    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height:110,
        width:"100%",
        flexDirection:"row",
     

    }

  
})