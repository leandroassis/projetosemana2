import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Body() {
    return(
        <View style={styles.container}>
            <Entypo name="home" size={30} color="black"  style={{width:40,height:40, marginLeft:0, borderRadius:100, backgroundColor:"#a9a9a9", paddingLeft:5, paddingTop:2}}/>
            <AntDesign name="search1" size={30} color="black" style={{width:40,height:40, marginLeft:50, borderRadius:100, backgroundColor:"#a9a9a9", paddingLeft:5, paddingTop:2}}/>
            <Feather name="bell" size={30} color="black"  style={{width:40,height:40, marginLeft:50, borderRadius:100, backgroundColor:"#a9a9a9", paddingLeft:5, paddingTop:2}}/>
            <Feather name="message-circle" size={30} color="black" style={{width:40,height:40,marginLeft:70, borderRadius:100, backgroundColor:"#a9a9a9", paddingLeft:5, paddingTop:2}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        flexDirection: "row",
        width:"100%",
        marginBottom:50,
        height:"1%",
        paddingLeft:40,
        paddingTop:5,
        
        borderTopWidth:1
    },
});
