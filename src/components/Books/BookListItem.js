import React from "react";
import {Image,Text, View, StyleSheet} from 'react-native';
import { TouchableHighlight } from "react-native-gesture-handler";
import  Icon  from 'react-native-vector-icons/dist/Ionicons';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingLeft: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0'
    },
    image: {
        width: 50,
        height:50,
    },
    icon: {
        color: 'black',
        marginLeft: 'auto'
    }
})

export default function BookListItem({book, onPress}){
    return(
        <TouchableHighlight onPress={onPress}>
        <View style={styles.container}>
            <Image source={{uri: book.cover}} style={styles.image} />
            <Text> {book.title} </Text>
            <Icon name="play-sharp" style={styles.icon}/>
        </View>
        </TouchableHighlight>
        
    )
}
