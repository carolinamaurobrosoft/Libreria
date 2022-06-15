import React from "react";
import { Text, View, TouchableHighlight, FlatList} from "react-native"
import BookListItem from "../components/Books/BookListItem";

const BOOK_LIST = [
  {
    id:1, 
    title: 'Hacia Rutas salvajes', 
    cover: 'https://picsum.photos/200'
  },
  {
    id:2, 
    title: 'El nombre del viento',
    cover: 'https://picsum.photos/200'
  },
  {
    id:3, 
    title: 'Cazadores de sombras',
    cover: 'https://picsum.photos/200'
  }
]

export default function Home({navigation}){
  function handleOnPress(){
    navigation.navigate('Library')
  }
  return(
    <View>
      <FlatList
        data={BOOK_LIST}
        renderItem={({item}) => <BookListItem book={item} onPress={handleOnPress}/>}
        keyExtractor={item => item.id}
        ListHeaderComponent={<View><Text> Mi lista de libros</Text></View>}
        />
    </View>
  )
}

{/* <Text> Hola soy la Home!</Text>
      <TouchableHighlight onPress={() => navigation.navigate('Library')}>
        <Text> Ir a la libreria </Text>
      </TouchableHighlight> */}