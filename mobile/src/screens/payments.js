import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Image, Text, TouchableOpacity, Linking, StyleSheet} from 'react-native'
import Constants from 'expo-constants'



import logoImg from '../../assets/tsubasalogo.png'

function Payments() {
   const navigation = useNavigation()
   const route = useRoute()

   const aluno = route.params.aluno
   
   

   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <Image source={logoImg} />

            
         </View>

         <View style={styles.aluno}>
            <View style={styles.dados}>
               <Text style={[styles.alunoProperty, { marginTop: 0 }]}>Aluno:</Text>
               <Text style={styles.alunoValue}>{aluno.nome} </Text>
            </View>

            <View style={styles.dados}>
               <Text style={styles.alunoProperty}>Rg:</Text>
               <Text style={styles.alunoValue}>{aluno.rg}</Text>
            </View>
            <View style={styles.dados}>
               <Text style={styles.alunoProperty}>WhatsApp:</Text>
               <Text style={styles.alunoValue}>{aluno.whatsapp}</Text>
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
            <Text style={styles.heroTitle}>Histórico de pagamentos: </Text>
            <View>
               <Text style={styles.alunoValue}> Valor: R$ 60,00        Data: 10/05/2020   </Text>
               <Text style={styles.alunoValue}> Valor: R$ 60,00        Data: 10/06/2020   </Text>
               <Text style={styles.alunoValue}> Valor: R$ 60,00        Data: 10/07/2020   </Text>
               <Text style={styles.alunoValue}> Valor: R$ 60,00        Data: 10/08/2020   </Text>
               <Text style={styles.alunoValue}> Valor: R$ 60,00        Data: 09/09/2020   </Text>
               <Text style={styles.alunoValue}> Valor: R$ 60,00        Data: 10/10/2020   </Text>
               <Text style={styles.alunoValue}> Valor: R$ 60,00        Data: 08/112020   </Text>
               

            </View>
               
            <View style={styles.actions}>
               <TouchableOpacity style={styles.action} onPress={() => navigation.goBack()}>
                  <Text style={styles.actionText}>Voltar</Text>
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
       marginTop: 30,
       flexDirection: 'row',
       justifyContent: 'center',
       
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

export default Payments;