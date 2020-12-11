import React, { useState} from 'react';
import { StyleSheet,View, TouchableOpacity, StatusBar, Text, TextInput, KeyboardAvoidingView, Image} from 'react-native';



export default function WritePostSurvey({navigation}) {
  const [counter2,setCounter2] = useState(0);
  function incrementOnType(){
    setCounter2(counter2+1);
  }
  return (
    <KeyboardAvoidingView style={styles.container} behavior={"padding"}>
      <View style={styles.container}>
      <StatusBar backgroundColor={"#778899"}/>
          <View style={styles.header}>
              <TouchableOpacity onPress={()=>navigation.navigate("Feed")} style={styles.headerPost} >
                  <Text style={styles.headerButtom}>Fechar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Feed",{message:"AloAlo"})} style={styles.headerPostRight} >
                  <Text style={styles.headerButtom}>Enviar</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.Text}>
              <Image source={require("../../Components/Images/gaia.jpeg")} style={styles.photo} />
              <View style={{width:330,marginTop:15}}>
                <TextInput placeholder="Faça uma pergunta..." maxLength={200} autoFocus={true} multiline={true} onChangeText={incrementOnType} style={{width:"100%", fontSize:20}} />
                <View style={styles.Survey}>
                    <TextInput placeholder="Opção 1"  maxLength={25} style={styles.surveyStyle} />
                    <TextInput placeholder="Opção 2"  maxLength={25} style={styles.surveyStyle}/>
                </View>
              </View>
          </View>
          <View style={styles.footer}>
              <TouchableOpacity onPress={null} style={styles.addSurvey}>
                  <Text style={styles.headerButtom}>+ Opção</Text>
              </TouchableOpacity>
              <Text style={{paddingLeft:200, color:"white"}}>{counter2}/200</Text>
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

  Text:{
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
    marginTop:"57%",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row"
    
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
    marginTop:25,
  },
  surveyStyle:{
    borderWidth:1,
    borderColor:"#a9a9a9",
    borderRadius: 10,
    width:330,
    height:50,
    marginBottom:10
  }
});
