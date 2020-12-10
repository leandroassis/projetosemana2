import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default function Post() {
    return(
        <View style={styles.container}>
            <Image source={require("../Images/lamp.png")} style={{width:20,height:20, borderRadius:10}} backgroundColor={"#a9a9a9"}/>
            <Text style={styles.letra}> 10 Novas Postagens!!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height:35,
        borderBottomColor:"black",
        width:'100%',
        backgroundColor: "#a9a9a9",
        borderRadius:2,
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row"
    },

    letra:{
        fontSize:15,
        fontWeight: "bold",
    },
});
