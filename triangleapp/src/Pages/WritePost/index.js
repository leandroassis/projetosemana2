import React from 'react';
import { StyleSheet,View, TouchableOpacity, Text, TextInput, KeyboardAvoidingView} from 'react-native';


export default function WritePostView() {
 
  return (
    <KeyboardAvoidingView style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={null} style={styles.headerPost} >
                <Text style={styles.headerButtom}>Fechar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={null} style={styles.headerPostRight} >
                <Text style={styles.headerButtom}>Enviar</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.Text}>
            <Image source={"../../src/Images/gaia.jpeg"} style={styles.photo} />
            <TextInput placeholder="Escreva algo legal para postar" maxLength={200} multiline={true} onChangeText={null} style={{width:"90%", borderWidth:1, borderColor:"#778899"}} />
        </View>
        <View style={styles.footer}>
            <TouchableOpacity onPress={null} style={styles.Survey}>
                <Text style={styles.headerButtom}>Enquete</Text>
            </TouchableOpacity> 
        </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center"
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

  photo:{
    height:50,
    width:50,
  },
  footer:{
    backgroundColor:"#778899",
    width:"100%",
    height:70,
    justifyContent:"center",
    alignItems:"center"
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
