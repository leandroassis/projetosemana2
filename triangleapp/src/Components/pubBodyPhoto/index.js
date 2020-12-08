import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';


export default function PubPhoto({name,user,msg, photoScr, photoPub}) {
    return(
        <View style={styles.publicationLayout}>
           <Image source={photoScr} style={{width:55,height:55, borderRadius:100, marginVertical:25, left:15, bottom:39}}/>
           <View>
    <Text style={{top:80, left:20, fontWeight:"bold", fontSize:16}}>{name} - {user}</Text>
            <Text style={{left:30,top:86, fontSize:15}}>{msg}</Text>
            <Image source={photoPub} style={{width:170, height:200, alignItems:"center", justifyContent:"center", left:80, top: 100}}/>
            <View style={{flexDirection:"row", marginVertical: 20, borderBottomColor:"black", top:90}}>
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
        flexDirection:"row",
        height: 270,
        alignItems:"center",
        marginTop:50,
        bottom:90
    },
});