import React, {useState} from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native"
import { v4  as uuidv4} from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
  form: {
    paddingHorizontal: 16
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
})

export default function AddBook({navigation}){
  const [title,setTitle] = useState('')
  
  //en oto lado deberia de ir!
  // async function buttonPessed(){
  //   const arrayData = []
  //   const data = {
  //     id: 9,
  //     title: title
  //   }
  //   arrayData.push(data)
  //   try{
  //     AsyncStorage.getItem('database_form').then((value) => {
  //       if(value !== null) {
  //         const d = JSON.parse(value)
  //         d.push(data)
  //         AsyncStorage.setItem('database_form',JSON.stringify(d)).then(() => {
  //           navigation.navigate('BookList')
  //         })
  //       }
  //       else{
  //         AsyncStorage.setItem('database_form', JSON.stringify(arrayData)).then(() => {
  //           navigation.navigate('BookList')
  //         })
  //       }
  //     })
  //   } catch(err){
  //     console.log(err)
  //   }
  // }

  return(
    <View style={styles.form}>
      <TextInput style={styles.textInput} onChangeText={text => setTitle(text)} value={title} />
      <Button title='Añadir Libro' />
    </View>
  )
}