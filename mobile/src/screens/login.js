//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, TextInput, Image } from 'react-native';

import api from '../services/api';

//Navigator !
function Login({ navigation }) {

  const [id, setId] = useState('');

  async function authentication(e) {
    try{
      const response = await api.post('login', {id});

      const nome = response.data.nome;
      
      const coach = {
        id,
        nome,        
      }

      navigation.navigate('Home', {coach}); //enviando nome e Id para Home.
    }catch(err){
      alert('Falha no Login');
    }


  }

  return (

    <View style={styles.container}>
      <Text style={styles.titulo}>Mini Lendas</Text>
      <View>
        <Image
          style={styles.logo}
          source={require('../../assets/oliver.png')}></Image>
      </View>
      <Text style={styles.textoInput}>Usuário:</Text>
      <TextInput
        style={styles.input}
        //returnKeyType="Próximo"
        autoCapitalize="none"
        autoCorrect={false}
        underlineColorAndroid="rgba(0,0,0,0)"
        onChangeText={e => setId(e)}
        value={id}


      />
      <Text style={styles.textoInput}>Senha:</Text>
      <TextInput
        secureTextEntry
        //returnKeyType="Entrar"
        style={styles.input}
        autoCapitalize="none"
        underlineColorAndroid="rgba(0,0,0,0)"
      //value={this.state.senha}

      />
      <View style={styles.button}>
        <TouchableOpacity style={styles.loginButton}
          onPress={() => authentication()}>
          <Text style={styles.criarText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cadastrarButton}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.criarText}>CADASTRAR</Text>
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
    marginTop: 15,
    fontSize: 14,
    color: 'white',
  },

  input: {
    alignSelf: 'stretch',
    marginTop: 10,
    paddingVertical: 0,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'white',
    height: 40,
    borderRadius: 3,
    alignItems: 'center',
  },

  loginButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    backgroundColor: 'green',
    marginLeft: 5,
    borderWidth: 0.3,
    borderColor: 'white',

  },
  cadastrarButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    backgroundColor: 'blue',
    marginLeft: 5,
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
    marginTop: 15,
    height: 50,
    flexDirection: 'row',
  },
  logo: {
    height: 200,
    width: 150,
    paddingTop: 10,
  },
  titulo: {
    fontSize: 40,
    color: 'white',
    alignItems: 'center',
    paddingTop: 50,
    fontWeight: 'bold',


  },


});

//make this component available to the app
export default Login;