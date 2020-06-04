import React, { useEffect, useState } from 'react'
import { View, Image, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import api from '../services/api'

import logoImg from '../../assets/tsubasalogo.png'

function Alunos({ navigation, route }) {
   const coach = route.params.coach

   console.log(coach.nome);
   const [alunos, setAlunos] = useState([])
   const [total, setTotal] = useState(0)
   
   const [page, setPage] = useState(1)
   const [loading, setLoading] = useState(false)

   // const navigation = useNavigation()

   function navigateToDetail(aluno) {
      navigation.navigate('Detail', { aluno,coach })
      
   }

   function confirmPayment(aluno){
      alert("Pagamento confirmado");
      navigation.navigate('Payments', {aluno})
   }

   async function loadAlunos() {
      if (loading) return
      const total = alunos.length;
      console.log(total);

      if (total > 0 && alunos.length === total) return 

      setLoading(true)

      const response = await api.get('profile', {
         headers:{
            Authorization: coach.id,
         }
      })

      setAlunos([...alunos, ...response.data])
   
      setPage(page + 1)
      setLoading(false)
   }

   useEffect(() => {
      loadAlunos()
   }, [alunos.length])

   return (
      <View style={styles.container}>
         <View style ={styles.createAluno}>
         <TouchableOpacity
                     style={styles.paymentsButton}
                     onPress={() => navigation.navigate('Login')}
                  >
                     <Feather name="log-out" size={25} color="#E02041" />
                  </TouchableOpacity>
         <TouchableOpacity style ={styles.createButton} onPress = {() => navigation.navigate('Create', {coach})}>
               <Text style={styles.createButtonText}> Novo aluno </Text> 
          </TouchableOpacity>
         </View>

         
         <View style = {styles.headerText}>
            <Text style={styles.headerText}>
               Total de <Text style={styles.headerTextBold}>{alunos.length} alunos</Text>.
            </Text>
         </View>
         
            
         
          
         <View style={styles.header}>
            <Image source={logoImg} />
            
         </View>

         <Text style={styles.title}>Lista de alunos:</Text>
         <Text style={styles.description}>Clique em mais detalhes para gerenciar o aluno.</Text>

         <FlatList
            data={alunos}
            style={styles.alunoList}
            keyExtractor={aluno => String(aluno.id)}
            showsVerticalScrollIndicator={false}
            onEndReached={loadAlunos}
            onEndReachedThreshold={0.2}
            renderItem={({ item: aluno }) => ( //Apenas dizendo q item = aluno para não confundir
               <View style={styles.aluno}>
                  <Text style={styles.alunoProperty}>NOME:</Text>
                  <Text style={styles.alunoValue}>{aluno.nome}</Text>
                  <TouchableOpacity
                     style={styles.paymentsButton}
                     onPress={() => confirmPayment(aluno)}
                  >
                     <Feather name="check-circle" size={25} color="#E02041" />
                  </TouchableOpacity>
               
                  <Text style={styles.alunoProperty}>IDADE:</Text>
                  <Text style={styles.alunoValue}>{aluno.idade}</Text>

                  <Text style={styles.alunoProperty}>MENSALIDADE:</Text>
                  <Text style={styles.alunoValue}>{
                      
                      Intl.NumberFormat('pt-BR', {
                          style: 'currency', currency: 'BRL'
                      }).format(aluno.mensalidade)
                  }
                  </Text>
                  

                  <TouchableOpacity
                     style={styles.detailsButton}
                     onPress={() => navigateToDetail(aluno)}
                  >
                     <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                     <Feather name="arrow-right" size={16} color="#E02041" />
                  </TouchableOpacity>

               </View>
            )}
         />

      </View >
   )
};

const styles = StyleSheet.create({
    container: {
       flex: 1,
       paddingHorizontal: 24,
       paddingTop: Constants.statusBarHeight + 20
    },
 
    header: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center'
    },

    createAluno: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop:1,
      
      
    },

    createButton:{
      flex: 0.4,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
      backgroundColor: '#70BD85',
      
    },
 
    headerText: {
       fontSize: 15,
       color: '#737380',
       flexDirection: 'row',
       justifyContent: 'flex-end',
       alignItems: 'center',
       marginTop:1,
    },

    createButtonText: {
      fontWeight:'bold',
      color: '#FFF',
      fontSize: 18,
    },
 
    headerTextBold: {
       fontWeight: 'bold'
    },
 
    title: {
       fontSize: 30,
       marginBottom: 16,
       marginTop: 48,
       color: '#13131a',
       fontWeight: 'bold'
    },
 
    description: {
       fontSize: 16,
       lineHeight: 24,
       color: '#737380'
    },
 
    alunoList: {
       marginTop: 32
    },
 
    aluno: {
       padding: 24,
       borderRadius: 8,
       backgroundColor: '#FFF',
       marginBottom: 16
    },
 
    alunoProperty: {
       fontSize: 14,
       color: '#41414d',
       fontWeight: 'bold'
    },
 
    alunoValue: {
       marginTop: 2,
       fontSize: 15,
       marginBottom: 10,
       color: '#737380'
    },
 
    detailsButton: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center'
    },
 
    detailsButtonText: {
       color: '#e02041',
       fontSize: 15,
       fontWeight: 'bold'
    },

    paymentsButton: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center'
   },

   paymentsButtonText: {
      color: '#e02041',
      fontSize: 15,
      fontWeight: 'bold'
   },
 
 
 });

 export default Alunos;

