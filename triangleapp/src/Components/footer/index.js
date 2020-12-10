import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

export default function Body() {
    return(
        <View style={styles.container}>
            <Image source={require('../Images/home.png')} style={{width:35,height:35, marginLeft:0}}/>
            <Image source={require('../Images/lupa.png')} style={{width:35,height:35, marginLeft:70}}/>
            <Image source={require('../Images/sino.png')} style={{width:35,height:35, marginLeft:70}}/>
            <Image source={require('../Images/mensagem.png')} style={{width:35,height:35,marginLeft:70}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        width:"100%",
        marginBottom:50,
        height:10,
        paddingLeft:40,
        paddingTop:20,
        
        borderTopWidth:1
    },
});
