import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import Pub from "../publicationBody"

export default function Body() {
    return(
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Pub name="Júlia" user="@Julia" msg="Amando fazer o projeto da Fluxo!!" photoScr={require("../Images/usuario.png")}/>
                <Pub name="Bruno" user="@Bruno" msg="Ajudei uma rapaziada no Git." photoScr={require("../Images/usuario1.png")}/>
                <Pub name="Ruth" user="@ruth_" msg="Olá, povo do Triangle!!" photoScr={require("../Images/usuario2.png")}/>
                <Pub name="Giovanni" user="@giovanni" msg="Hj tem aula de react dnv 💻" photoScr={require("../Images/usuario3.png")}/>
                <Pub name="Isabela" user="@isa_bela" msg="01001111 01101100 01100001" photoScr={require("../Images/usuario6.png")}/>
                <Pub name="Fluxo" user="@fluxo_ufrj" msg="Semana 2 do PAME!!" photoScr={require("../Images/usuario5.png")}/>
                <Pub name="Guilherme" user="@gui" msg="Bora fazer funcionar esse projeto." photoScr={require("../Images/usuario0.png")}/>
                <Pub name="Roberto" user="@Carletto" msg="Backend" photoScr={require("../Images/usuario4.png")}/>
                <Pub name="Gaia" user="@AuAu" msg="AUAU! 🐕 🐕 🐶" photoScr={require("../Images/gaia.jpeg")}/>
                <Pub name="Leandro" user="@leoandro" msg="😴😴😴😴😴😴😴😴" photoScr={require("../Images/dog2.jpeg")}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height:630,
        width: "100%",
    },
});
