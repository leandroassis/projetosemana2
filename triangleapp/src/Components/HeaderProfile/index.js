import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';

export default function HeaderProfile() {
    return(
        <View style={styles.container} >
            <View style={styles.userPhotoContainer}>
                <Image style={styles.userPhoto} source={require("../Images/usuario7.png")} />
            
           
                <Text style={{fontSize:20, fontWeight:"bold", marginLeft:10}}>Júlia - @julia_chagas</Text>
            </View>
            <View style={styles.userStatsContainer}>
                <View style={styles.userStatsIcons}>
                    <View style={{marginRight:20, marginBottom:30}}>
                        <Image style={{height:40,width:40}} source={require("../Images/204040-200.png")}/>
                        <Text>Posts: 1</Text>
                    </View>
                    <View style={{marginRight:20, marginBottom:30}}>
                        <Image style={{height:40,width:40, paddingLeft:78}} source={require("../Images/followers.png")}/>
                        <Text>Followers: 42</Text>
                    </View>
                    <View style={{ marginBottom:30}} >
                    <Image style={{height:40,width:40, paddingLeft:50}} source={require("../Images/following.png")}/>
                        <Text>Following: 35</Text>
                    </View>
                </View>
            </View>
            
        </View>

            
       
    );
}

const styles = StyleSheet.create({
    container:{
        top:0,
        height: 250,
        width: "100%",
        flexDirection:"column",
        alignItems: "center",
        justifyContent:"center",
        backgroundColor: "#a9a9a9",
        
    },
    userPhotoContainer:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:30,
        paddingBottom:50
    },
    userPhoto:{
        height:100,
        width:100,
        borderRadius:100,
        borderWidth:1,
        borderColor:'black'
    },
    userStatsContainer:{
        flexDirection:"row",
        height:50,
        
    },
    userStatsIcons:{
        flexDirection:'row',
        marginBottom:30
    },
    icon:{
        height:40,
        width:40,
        
        
    },
    userStatsNumbers:{
        flexDirection:"row",
       

    }
});