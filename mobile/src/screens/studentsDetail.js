import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Image, Text, TouchableOpacity, Linking, StyleSheet} from 'react-native'
import Constants from 'expo-constants'
import api from '../services/api';


import logoImg from '../../assets/tsubasalogo.png'

function Detail() {
   const navigation = useNavigation()
   const route = useRoute()

   const aluno = route.params.aluno
   const coach = route.params.coach
   
   const message = `Senhor(a) responsável por ${aluno.nome}, a escolinha Mini Lendas gostaria de informar que sua mensalidade no valor de ${aluno.mensalidade} está atrasada.`

   function navigateBack() {
      navigation.goBack()
   }

   function sendWhatsapp() {
      Linking.openURL(`whatsapp://send?phone=${aluno.whatsapp}&text=${message}`)
   }

   async function deleteAluno(id){
      try{
         
         await api.delete(`alunos/${id}`, {
            headers: {
               Authorization: coach.id,
            }
         });
         alert(`${aluno.nome} Deletado com Sucesso`)

         navigateBack();
      } catch(err){
         alert('Erro ao deletar'); 
      }
   }

   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <Image source={logoImg} />

            <TouchableOpacity onPress={navigateBack}>
               <Feather name="arrow-left" size={28} color="#E82041" />
            </TouchableOpacity>
         </View>

         <View style={styles.aluno}>
            <View style={styles.dados}>
               <Text style={[styles.alunoProperty, { marginTop: 0 }]}>Aluno:</Text>
               <Text style={styles.alunoValue}>{aluno.nome} </Text>

               
            </View><View style={styles.dados}>
               

               <Text style={styles.alunoProperty}>Rg:</Text>
               <Text style={styles.alunoValue}>{aluno.rg}</Text>
            </View>
            <View style={styles.dados2}>
               <Text style={[styles.alunoProperty, { marginTop: 0 }]}>Idade:</Text>
               <Text style={styles.alunoValue2}>{aluno.idade}</Text>

               <Text style={styles.alunoProperty}>WhatsApp:</Text>
               <Text style={styles.alunoValue2}>{aluno.whatsapp}</Text>
            </View>
               <Text style={[styles.alunoProperty, { marginTop: 0 }]}>Endereço:</Text>
               <Text style={styles.alunoValue}>{aluno.endereco}</Text>           
            
            <View style={styles.dados}>
               <Text style={styles.alunoProperty}>Cidade:</Text>
               <Text style={styles.alunoValue}>{aluno.cidade}/{aluno.uf}</Text>

                  
            </View>
            <View style={styles.dados}>
               

                  <Text style={styles.alunoProperty}>Mensalidade:</Text>
               <Text style={styles.alunoValue}>{
                  Intl.NumberFormat('pt-BR', {
                     style: 'currency', currency: 'BRL'
                  }).format(aluno.mensalidade)
               }
               </Text>
            </View>
            
         </View>

         <View style={styles.contactBox}>
            <Text style={styles.heroTitle}>Corpo da mensagem: </Text>
            <Text style={styles.alunoValue}>{message}</Text>

            <Text style={styles.heroDescription}>Entre em contato: </Text>

            <View style={styles.actions}>
               <TouchableOpacity style={styles.action} onPress={() => sendWhatsapp()}>
                  <Text style={styles.actionText}>WhatsApp</Text>
               </TouchableOpacity>


               <TouchableOpacity style={styles.action} onPress={() => navigation.navigate('Alter', {aluno})}>
                  <Text style={styles.actionText}>Alterar Aluno</Text>
               </TouchableOpacity>
            </View>

            <View style={styles.actions}>
               <TouchableOpacity style={styles.action} onPress={() => navigation.navigate('Payments', {aluno})}>
                  <Text style={styles.actionText}>Pagamentos</Text>
               </TouchableOpacity>

               

               <TouchableOpacity style={styles.action} onPress={() => deleteAluno(aluno.id)}>
                  <Text style={styles.actionText}>Deletar Aluno</Text>
               </TouchableOpacity>
            </View>
         </View>

      </View>


   )
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       paddingHorizontal: 24,
       paddingTop: Constants.statusBarHeight + 20
    },
 
    header: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       marginBottom: 16
    },
 
    aluno: {
       padding: 24,
       borderRadius: 8,
       backgroundColor: '#FFF',
       marginBottom: 16,
       marginTop: 30
    },

    dados: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    dados2: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
 
    alunoProperty: {
       fontSize: 14,
       color: '#41414d',
       fontWeight: 'bold',
       marginTop: 24
    },
 
    alunoValue: {
       marginTop: 8,
       fontSize: 15,
       color: '#737380',
       marginLeft: 10,
    },
    alunoValue2: {
      marginTop: 8,
      fontSize: 15,
      color: '#737380',
      
   },
 
    contactBox: {
       padding: 24,
       borderRadius: 8,
       backgroundColor: '#FFF',
       marginBottom: 16,
    },
 
    heroTitle: {
       fontWeight: "bold",
       fontSize: 20,
       color: '#13131a',
       lineHeight: 30
    },
 
    heroDescription: {
       fontSize: 15,
       color: '#737380',
       marginTop: 16,
    },
 
    actions: {
       marginTop: 16,
       flexDirection: 'row',
       justifyContent: 'space-between'
    },
 
    action: {
       backgroundColor: '#e02041',
       borderRadius: 8,
       height: 50,
       width: '48%',
       justifyContent: 'center',
       alignItems: 'center'
    },
 
    actionText: {
       color: '#FFF',
       fontSize: 15,
       fontWeight: 'bold'
    }
 
 })

export default Detail;