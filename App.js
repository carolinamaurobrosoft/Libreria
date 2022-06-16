import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BookList from './src/views/Library/BookList'
import BookDetail from './src/views/Library/BookDetail'
import AddBook from './src/views/AddBook/AddBook'


const Tab = createBottomTabNavigator()
const LibraryStack = createStackNavigator();

//creo mi pila de navegación
//const Stack = createStackNavigator();

function LibraryStackScreen(){
  return(
    <LibraryStack.Navigator>
      <LibraryStack.Screen name='BookList' component={BookList} options={{title: 'Inicio'}} />
      <LibraryStack.Screen name='BookDetail' component={BookDetail} />
    </LibraryStack.Navigator>
  )
}

const App = () => (
  <NavigationContainer>
    <Tab.Navigator> 
      <Tab.Screen name='LibraryTab' component={LibraryStackScreen} />
      <Tab.Screen name='AddBookTab' component={AddBook} />
    </Tab.Navigator>
  </NavigationContainer>
  
)

export default App;


 {/* <Stack.Navigator>
      <Stack.Screen name='BookList' component={BookList} options={{title: 'Inicio'}} />
      <Stack.Screen name='BookDetail' component={BookDetail} />
    </Stack.Navigator>   */}
