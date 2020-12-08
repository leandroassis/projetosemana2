import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default function Header() {
    return(
        <View style={styles.container} >
            <Image style={styles.logoTitle} source={require("../Images/logo_triangle-removebg-preview.png")} />
            <Image style={styles.headerTitle} source={require("../Images/fontTriangleFinal-removebg-preview.png")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        top:0,
        height: 50,
        width: "100%",
        flexDirection:"row",
        alignItems: "center",
        justifyContent:"center",
        backgroundColor: "#a9a9a9",
        
    },
    logoTitle:{
        height:80,
        width:40

    },

    headerTitle: {
        height:40,
        width:190,
        justifyContent: "center",
        alignContent:"center"        
    }
});