import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BookList from './src/views/Library/BookList'
import BookDetail from './src/views/Library/BookDetail'


//creo mi pila de navegación
const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='BookList' component={BookList} options={{title: 'Inicio'}} />
      <Stack.Screen name='BookDetail' component={BookDetail} />
    </Stack.Navigator>  
  </NavigationContainer>
  
)

export default App;

