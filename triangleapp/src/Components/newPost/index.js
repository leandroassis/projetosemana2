import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

export default function Post() {
    return(
        <View style={styles.container}>
            <Image source={require("../Images/204040-200.png")} style={{width:55,height:55}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        bottom:105,
        left:160,
        backgroundColor:"#a9a9a9",
        borderRadius:100,
        height:60,
        width:60,
        alignItems:"center",
        justifyContent:"center",
        margin:0
    },
});
