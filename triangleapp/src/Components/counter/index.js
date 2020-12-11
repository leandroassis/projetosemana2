import React from 'react';
import {StyleSheet,View,Text} from "react-native";



export default function Counter({postCounter}){
    return(
        <View style={styles.container}>
            <Text style={styles.Text}>{postCounter}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        position:"absolute",
        backgroundColor:"#a9a9a9",
        width:40,
        height:40,
        borderRadius:100,
        marginLeft:350,
        marginTop:640,
        alignItems:"center",
        justifyContent:"center"
    },
    Text:{
        color:"black",
        fontSize:19
    }
})