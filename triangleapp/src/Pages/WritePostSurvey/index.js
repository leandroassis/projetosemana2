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
            <TextInput placeholder="Faça uma pergunta..." maxLength={200} multiline={true} onChangeText={null} style={{width:"90%", borderWidth:1, borderColor:"#a9a9a9"}} />
            <View style={styles.Survey}>
                <TextInput placeholder="Opção 1" maxLength={25} style={styles.surveyStyle} />
                <TextInput placeholder="Opção 2" maxLength={25} style={styles.surveyStyle}/>
            </View>
        </View>
        <View style={styles.footer}>
            <TouchableOpacity onPress={null} style={styles.addSurvey}>
                <Text style={styles.headerButtom}>AddOpção</Text>
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
    fontSize:18,
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
  addSurvey:{
    backgroundColor:"#a9a9a9",
    borderRadius:40,
    height:35,
    width:90,
    alignItems:"center",
    justifyContent:"center",
  },
  Survey:{
    borderWidth:2,
    borderColor:"#a9a9a9",
    height:120,
    width:400,
  },
  surveyStyle:{
    borderWidth:2,
    borderColor:"#a9a9a9",
     width:300,
     height:100
  }
});
