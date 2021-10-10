import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./SRC/mapa.png")} style={styles.logo} />

      <View style={styles.imputContainer}>
        <TextInput
          placeholder="Exe: 49680000"
          style={styles.input}
          keyboardType="number-pad"
        />
        <TouchableOpacity style={styles.btn_buscar} activeOpacity={0.7}>
          <AntDesign name="search1" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.resultadoCard}></View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: '#535356',
    alignItems: 'center',
    
  },
  logo:{
    marginTop: '20%',
    height: 150,
    width: 150,
  },

  imputContainer:{
    marginTop: 50, 
       
    justifyContent:'center',
    alignItems:'center',
    flexDirection: "row" 
    
  },  

  input:{    
    width: 250,
    height: 35,    
    backgroundColor: '#fff',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    paddingStart: 5 
  },

  btn_buscar:{
    backgroundColor:'#44BD32',
    height: 35,
    width: 50,    
    borderBottomRightRadius: 5,
    borderTopEndRadius: 5, 
    justifyContent: 'center',
    alignItems: 'center'  
  },

  resultadoCard:{
    backgroundColor:"#ffff",
    height: 200,
    width: 300,
    marginTop: 30,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5    
  }
 

});
