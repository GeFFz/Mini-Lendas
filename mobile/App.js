import 'react-native-gesture-handler'; //import necessário para o navigator (navegação entre paginas)
import * as React from 'react'; // react
import { NavigationContainer } from '@react-navigation/native'; // navigator, repsonsavel pela navegação entre telas

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer> 
      <Routes />
    </NavigationContainer>
  );
};