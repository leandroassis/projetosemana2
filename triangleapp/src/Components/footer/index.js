import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

export default function Body() {
    return(
        <View style={styles.container}>
            <Image source={require('./home.png')} style={{width:35,height:35, marginLeft:0}}/>
            <Image source={require('./lupa.png')} style={{width:35,height:35, marginLeft:70}}/>
            <Image source={require('./sino.png')} style={{width:35,height:35, marginLeft:70}}/>
            <Image source={require('./mensagem.png')} style={{width:35,height:35,marginLeft:70}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
    },
});
