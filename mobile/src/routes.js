import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; //navigator

import Login from './screens/login';
import Register from './screens/register';
import Alunos from './screens/home';
import Create from './screens/studentsCreate';
import Detail from './screens/studentsDetail';
import Alter from './screens/studentsAlter';

import Payments from './screens/payments';


const Stack = createStackNavigator();//navigator stack - pilha de navegação

function Routes() {
    {/* troque headerMode="none" se vc n quiser o headerbar no seu app, para testar as funcionalidades deixe screen  */}
    return (
        <Stack.Navigator headerMode="none" initialRouteName='Login'>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Alunos} />
          <Stack.Screen name="Create" component={Create} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Alter" component={Alter} />
          
          
          <Stack.Screen name="Payments" component={Payments} />
        
        </Stack.Navigator>
    );
  }

export default Routes;