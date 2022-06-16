import React, {useEffect,useState} from "react";
import { Text, View, FlatList} from "react-native"
import BookListItem from "../../components/Books/BookListItem";

export default function BookList({navigation}){
  const [books, setBooks] = useState(null)

  function handleOnPress(){
    navigation.navigate('BookDetail')
  }


  useEffect(function(){
    async function fetchData(){
      const response = await fetch('https://fedeperin-harry-potter-api-en.herokuapp.com/books');
      const json = await response.json();
      setBooks(json)
    }
    fetchData();
    
  },[])


  return(
    <View>
      <FlatList
        data={books}
        renderItem={({item}) => <BookListItem book={item} onPress={handleOnPress}/>}
        keyExtractor={item => item.id}
        ListHeaderComponent={<View><Text> Mi lista de libros</Text></View>}
        />
    </View>
  )
}
