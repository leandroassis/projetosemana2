import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';


export default function Pub({name,user,msg, photoScr}) {
    return(
        <View style={styles.publicationLayout}>
           <Image source={photoScr} style={{width:55,height:55, borderRadius:100, marginVertical:25, left:15}}/>
           <View>
    <Text style={{top:8, left:20, fontWeight:"bold", fontSize:16}}>{name} - {user}</Text>
            <Text style={{left:30,top:12, fontSize:15}}>{msg}</Text>  
            <View style={{flexDirection:"row", marginVertical: 20, borderBottomColor:"black"}}>
                <Image source={require('./coment-icon.png')} style={{width:25,height:25, borderRadius:100, marginLeft:20}}/>
                <Image source={require('./rt-icon.png')} style={{width:25,height:25, borderRadius:100, marginLeft:95}}/>
                <Image source={require('./like-icon.jpg')} style={{width:22,height:22, borderRadius:1, marginLeft:105, top:0}}/>
            </View>
           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    publicationLayout:{
        marginVertical:5,
        flexDirection:"row",
        height: 90,
        borderBottomColor: "black",
        width:"100%"
    },
});