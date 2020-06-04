//import liraries
import React, { Component, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Button, StyleSheet, Alert } from 'react-native';
import api from '../services/api';

// create a component
function Alter({ navigation, route }) {
  const coach = route.params.coach
  const aluno = route.params.aluno

  const [nome, SetNome] = useState(aluno.nome);
  const [rg, SetRg] = useState(aluno.rg);
  const [idade, SetIdade] = useState(aluno.idade);
  const [whatsapp, SetWhatsapp] = useState(aluno.whatsapp);
  const [endereco, SetEndereco] = useState(aluno.endereco);
  const [cidade, SetCidade] = useState(aluno.cidade);
  const [uf, SetUf] = useState(aluno.uf);
  const [mensalidade, SetMensalidade] = useState('60'); //erro de variavel, espera numero inteiro

  
  async function alterStudent(e){
    
    const data = {
      nome,
      rg,
      idade,
      whatsapp,
      endereco,
      cidade,
      uf,
      mensalidade,
    };
    
    try{

      await api.post('/alunos', data, {
        headers:{
          Authorization: coach.id
        }
      });
      alert('um novo aluno foi adicionado');
      navigation.goBack();

    } catch(err){
      alert('Erro ao cadastrar');
      navigation.goBack();
    }
    
  }


  return (
    <View style={styles.modalContainer}>
      <ScrollView contentContainerStyle={styles.boxContainer}>
        <Text style={styles.textoInput}>Nome:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Nome completo do aluno"
          value={nome}
          onChangeText={e => SetNome(e)}
        />
        <Text style={styles.textoInput}>RG:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder=""
          value={rg}
          onChangeText={e => SetRg(e)}
        
        />
        <Text style={styles.textoInput}>Idade:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder=""
          value={idade}
          onChangeText={e => SetIdade(e)}
        />
        <Text style={styles.textoInput}>Whatsapp:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="telefone do responsável"
          value={whatsapp}
          onChangeText={e => SetWhatsapp(e)}
        />
        <Text style={styles.textoInput}>Endereço:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Ex: Rua Rodrigo de Freita n° 1229"
          value={endereco}
          onChangeText={e => SetEndereco(e)}
        />
        <Text style={styles.textoInput}>Cidade:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder=""
          value={cidade}
          onChangeText={e => SetCidade(e)}
        />
        <Text style={styles.textoInput}>UF:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder=""
          value={uf}
          onChangeText={e => SetUf(e)}
        />
        <Text style={styles.textoInput}>Mensalidade:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Varia de acordo com a idade"
          value={mensalidade}
          onChangeText={e => SetMensalidade(e)}
        />
        <View style={styles.criar}>
          <TouchableOpacity style={styles.criarButton}
            onPress={() => alterStudent() }>
            <Text style={styles.criarText}>Salvar dados</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelarButton}
            onPress={() => navigation.goBack()}>
            <Text style={styles.criarText}>Voltar</Text>
          </TouchableOpacity>
        </View>
        <Text>   </Text>
        <View>
          <Text>  </Text>
        </View>
      </ScrollView>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  boxContainer: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    width: 380,
  },

  input: {
    alignSelf: 'stretch',
    marginTop: 10,
    paddingVertical: 0,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#DDD',
    height: 40,
    borderRadius: 3,
    alignItems: 'center',
  },

  criar: {
    marginTop: 15,
    height: 40,
    flexDirection: 'row',
  },
  criarButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    backgroundColor: '#70BD85',
    marginLeft: 5,
    marginRight: 5,
  },
  cancelarButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    backgroundColor: '#E25F5F',
    marginRight: 5,

  },
  criarText: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 14,
  },
  textoInput: {
    marginTop: 15,
    fontSize: 12,
  }


});

//make this component available to the app
export default Alter;