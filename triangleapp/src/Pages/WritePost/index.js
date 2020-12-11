import React from 'react';
import { StyleSheet,View, TouchableOpacity, Text, TextInput, KeyboardAvoidingView, Image} from 'react-native';


export default function WritePost() {
 
  return (
    <KeyboardAvoidingView style={styles.container} behavior={"padding"}>
      <View style={styles.container}>
          <View style={styles.header}>
              <TouchableOpacity onPress={null} style={styles.headerPost} >
                  <Text style={styles.headerButtom}>Fechar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={null} style={styles.headerPostRight} >
                  <Text style={styles.headerButtom}>Enviar</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.Text}>
              <Image source={require("../../Components/Images/gaia.jpeg")} style={styles.photo}/>
              <View style={{width:330}}>
              <TextInput placeholder="Escreva algo legal para postar" maxLength={200} multiline={true} onChangeText={null} autoFocus={true} style={{width:"100%", margin:20, marginLeft:5}} />
              </View>
          </View>
          <View style={styles.footer}>
              <TouchableOpacity onPress={null} style={styles.Survey}>
                  <Text style={styles.headerButtom}>Enquete</Text>
              </TouchableOpacity> 
              <Text style={{paddingLeft:200}}>{null}/20</Text>
          </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    flexDirection:"row",
    marginTop:30,  
    backgroundColor:"#778899",
    width:"100%",
    height:60,
    flexDirection:"row",
    alignItems:"center"
 
  },
  headerPost:{
    backgroundColor:"#a9a9a9",
    borderRadius:40,
    height:35,
    width:90,
    alignItems:"center",
    justifyContent:"center",
    marginLeft:15,
  },
  headerPostRight:{
    backgroundColor:"#a9a9a9",
    borderRadius:40,
    height:35,
    width:90,
    alignItems:"center",
    justifyContent:"center",
    marginLeft:200,

  },
  headerButtom:{
    color:"white",
    fontSize:16,
  },
  Text:{
    width:"100%",
    height:"160%",
    flexDirection:"row"
  },
  photo:{
    height:50,
    width:50,
    margin:10,
    borderRadius:50
  },
  footer:{
    backgroundColor:"#778899",
    width:"100%",
    height:70,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
  },
  Survey:{
    backgroundColor:"#a9a9a9",
    borderRadius:40,
    height:35,
    width:90,
    alignItems:"center",
    justifyContent:"center",
  },
});
