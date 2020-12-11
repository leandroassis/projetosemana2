import { NavigationHelpersContext } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Image,TouchableOpacity} from 'react-native';

export default function Post({navigation}) {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> navigation.navigate("Postar")}>
            <Image source={require("../Images/204040-200.png")} style={{width:55,height:55}}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        position:"absolute",
        marginTop:690,
        marginLeft:340,
        marginBottom:100,
        backgroundColor:"#a9a9a9",
        borderRadius:100,
        height:60,
        width:60,
        alignItems:"center",
        justifyContent:"center",
    },
});
