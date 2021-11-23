import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import api from './services/api';

export default function App() {

  const [infoCep, setInfoCep] = useState({});
  const [searcCep, setSearcCep] = useState('');

  const getCep = async () => {
    if(searcCep == "" || searcCep <= 7){
      Alert.alert("Cep Invalido!")
      Keyboard.dismiss();
    } else{
      const { data } = await api.get(`${searcCep}/json/`);
      setInfoCep(data);
      Keyboard.dismiss();
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require("./SRC/mapa.png")} style={styles.logo} />

      <View style={styles.imputContainer}>
        <TextInput
          placeholder="Exe: 49680000"
          placeholderTextColor="#fff"
          style={styles.input}
          keyboardType="number-pad"
          value={searcCep}
          onChangeText={(text) => setSearcCep(text)}
        />
        <TouchableOpacity
          style={styles.btn_buscar}
          activeOpacity={0.7}
          onPress={getCep}
        >
          <AntDesign name="search1" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.resultadoCard}>
        <Text style={styles.resultadoText}>Cidade: {infoCep.localidade} </Text>
        <Text style={styles.resultadoText}>Bairro: {infoCep.bairro} </Text>
        <Text style={styles.resultadoText}>Endereço: {infoCep.logradouro}</Text>
        <Text style={styles.resultadoText}>Estado: {infoCep.uf}</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  logo: {
    marginTop: "20%",
    height: 150,
    width: 150,
  },

  imputContainer: {
    marginTop: 50,

    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  input: {
    width: 250,
    height: 35,
    backgroundColor: "#535356",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    paddingStart: 5,
    color: '#fff'
  },

  btn_buscar: {
    backgroundColor: "#44BD32",
    height: 35,
    width: 50,
    borderBottomRightRadius: 5,
    borderTopEndRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  resultadoCard: {
    backgroundColor: "#ffff",
    height: 200,
    width: 300,
    marginTop: 30,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: "center",
  },
  resultadoText: {
    fontSize: 18,
    height: 40,
    marginStart: 10,
  },
});
