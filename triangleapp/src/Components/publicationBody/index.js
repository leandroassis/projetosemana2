import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';


export default function Pub({name,user,msg, photoScr, photoPub}) {
    return(
        <View style={styles.publicationLayout}>
           <Image source={photoScr} style={{width:55,height:55, borderRadius:100, marginVertical:25, left:14, bottom:13,}}/>
           <View>
                <Text style={{top:8, left:20, fontWeight:"bold", fontSize:16}}>{name} - {user}</Text>
                <Text style={{left:30,top:12, fontSize:15}}>{msg}</Text>
            <View style={{flexDirection:"row", marginVertical: 20, borderBottomColor:"black"}}>
                <Image source={require('../Images/coment-icon.png')} style={{width:25,height:25, borderRadius:100, marginLeft:20}}/>
                <Image source={require('../Images/rt-icon.png')} style={{width:25,height:25, borderRadius:100, marginLeft:95}}/>
                <Image source={require('../Images/like-icon.jpg')} style={{width:22,height:22, borderRadius:1, marginLeft:105}}/>
            </View>
           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    publicationLayout:{
        marginBottom:20,
        flexDirection:"row",
        height:70,
        width:"100%"
    },
});