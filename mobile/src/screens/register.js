//import liraries
import React, { Component, useState } from 'react';
import { View, Button, StyleSheet, TextInput, TouchableOpacity, Image, Text } from 'react-native';
import api from '../services/api';



// create a component
function Register({ navigation }) {


  const [nome, SetNome] = useState('');
  const [email, Setemail] = useState('');
  const [whatsapp, SetWhatsapp] = useState('');
  const [cidade, SetCidade] = useState('');
  const [uf, SetUf] = useState('');
  const [senha, SetSenha] = useState('');



  async function createCoach(e) {

    const data = {
      nome,
      email,
      whatsapp,
      cidade,
      uf,
    };

    try{
      const response = await api.post('treinador', data);
      alert(`Id de acesso: ${response.data.id}`);
      navigation.goBack();
    }catch(err){
      alert('Erro de cadastro');
      navigation.goBack();
    }
  }

  

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/Tsubasa_joven_2002.png')}></Image>

      <Text style={styles.textoInput}>Nome:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        underlineColorAndroid="rgba(0,0,0,0)"
        onChangeText={e => SetNome(e)}
        value={nome}
      />
      <Text style={styles.textoInput}>Email:</Text>
      <TextInput
        // secureTextEntry
        style={styles.input}
        autoCapitalize="none"
        underlineColorAndroid="rgba(0,0,0,0)"
        onChangeText={e => Setemail(e)}
        value ={email}
      />

      <Text style={styles.textoInput}>Whatsapp:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        underlineColorAndroid="rgba(0,0,0,0)"
        onChangeText={e => SetWhatsapp(e)}
        value ={whatsapp}
      />

      <Text style={styles.textoInput}>Cidade:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        underlineColorAndroid="rgba(0,0,0,0)"
        onChangeText={e => SetCidade(e)}
        value ={cidade}
      />

      <Text style={styles.textoInput}>UF:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        underlineColorAndroid="rgba(0,0,0,0)"
        onChangeText={e => SetUf(e)}
        value ={uf}
      />

      <Text style={styles.textoInput}>Senha:</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        autoCapitalize="none"
        underlineColorAndroid="rgba(0,0,0,0)"
        onChangeText={e => SetSenha(e)}
        value ={senha}
      />
      
      <View style={styles.button}>
        <TouchableOpacity style={styles.cadastrarButton}
          onPress={() => {createCoach()}}>
          <Text style={styles.criarText}>CADASTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelarButton}
          onPress={() => { navigation.goBack() }}>
          <Text style={styles.criarText}>CANCELAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2e8b57',

  },

  textoInput: {
    marginTop: 25,
    fontSize: 14,
    color: 'white',
  },

  input: {
    alignSelf: 'stretch',
    marginTop: 0,
    paddingVertical: 0,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#DDD',
    height: 40,
    borderRadius: 3,
    alignItems: 'center',
  },

  cadastrarButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    backgroundColor: 'green',
    marginLeft: 5,
    borderWidth: 0.3,
    borderColor: 'white',
    marginRight: 5,
  },
  cancelarButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    backgroundColor: 'red',
    marginRight: 5,
    borderWidth: 0.3,
    borderColor: 'white',
  },
  criarText: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 14,
  },

  button: {
    marginTop: 20,
    height: 50,
    flexDirection: 'row',
  },

  logo: {
    height: 200,
    width: 150,
    paddingTop: 10,
  },

});

//make this component available to the app
export default Register;