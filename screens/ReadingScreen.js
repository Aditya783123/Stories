import React from 'react'
import {StyleSheet, Text, View, Header} from 'react-native'

export default class ReadingScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}> <Text style={styles.header}>Read an Incredibly Detailed Story!</Text>
            <Text styles={styles.text}>
                You are reading a story. (What, did you expect more?)
            </Text>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    text:{
        flex:1,
        fontWeight:'bold',
        fontSize:10,
        alignItems:'center',
        justifyContent:'center'
    },
    header:{
        backgroundColor:'coral',
        fontSize:30,
    }
})