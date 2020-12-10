import React,{useState} from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native';

export default function Item ({nickname, username,message,imageUser,imagePost,likesCount}) {
   
    function renderImage(){
        if(imagePost) {
            return(
                <Image style={styles.photo} source={imagePost}/>
            )
        }
        else {
            return null;
        }


    }

    const[counter,setCounter] = useState (likesCount)
    function increment (){
        setCounter (counter+1);
    }







    return(
        <View style={styles.containerMain}>
                
                <View style={styles.containerImage}>
                    <Image style={styles.userPhoto} source={imageUser}/>
                    <Text style={styles.headPost}>{nickname} - {username}</Text>
                </View>

                
                    <View style={styles.containerText}>
                        
                        <Text style={styles.messagePost}>{message}</Text>
                    </View>
                    
                    {renderImage()}    
                    
                    <View style={styles.containerIcons}>

                    <TouchableOpacity onPress={increment}>
                        <Image style={styles.like} source={require("../Images/like-icon-removebg-preview.png")} />
                    </TouchableOpacity>
                        
                        <Text style={styles.likeCount}>{counter}</Text>
                        <Image style={styles.coment} source={require("../Images/coment-icon-removebg-preview.png")}/>
                        <Image style={styles.rt} source={require("../Images/rt-icon-removebg-preview.png")}/>
                    </View>
                

                

            
        </View>
    )
}
    const styles = StyleSheet.create({
        containerMain: {
          flex: 1,
          flexDirection:"column",
          backgroundColor: '#778899',
          justifyContent:"flex-start",
          alignItems: 'center',
          width: 385,
          
          borderRadius:20,
          margin:20
          

        },
        containerImage:{
            marginTop:10,
            flexDirection:"row",    
            justifyContent:"center",
            alignItems:"center",        
            paddingRight:20,
            paddingLeft:20
        },
        userPhoto:{
            
            height:40,
            width:40,
            borderRadius:100,
            
        },
        containerPost:{
            flexDirection:"column"

        },
        headPost:{
            fontWeight:"bold",
            paddingLeft:10

        },
        containerText:{
            marginBottom:15,        
            marginTop:15
            
        },
        containerPhotoPost:{
            justifyContent:"center",
            alignItems:"center",
            height:230,
            width:230
            
        },
        containerIcons:{
            marginTop:15,
            marginBottom:15,
            flexDirection:"row",
            
            
            
           
            
        },
        photo:{
            justifyContent:"center",
            alignItems:"center",
            height:200,
            width:200
        },

        like:{
            height:35,
            width:35,
            marginLeft:20,
            marginRight:20
        
        },
        rt:{
            height:40,
            width:40,
            marginLeft:20,
            marginRight:20
        },
        coment:{
            height:40,
            width:40,
            marginLeft:20,
            marginRight:20
        },
        likeCount:{
            paddingTop:10
        }

})
      
