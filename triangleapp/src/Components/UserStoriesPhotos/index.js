import React from "react";
import {View, StyleSheet, Image,Text} from "react-native";


export default function UserStoriesPhotos ({photoSrc, userName}){
    return(
        <View style={styles.container}>
         
                <Image style={styles.image} source={photoSrc}/>
                <Text style={styles.user}>{userName}</Text>
            
        </View>
        );
    }
    
const styles = StyleSheet.create({

    container:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        borderBottomWidth:1,
        borderBottomColor:"#c0c0c0"
    },
        
    image:{
        height:70,
        width:70,        
        marginLeft:15,
        marginTop:3,
        marginRight:15,
        borderRadius:100,
        borderColor: "#C0C0C0",
        borderWidth:1
    },

    user:{
        flexDirection:"row",
        fontSize:10,
        
    }


})