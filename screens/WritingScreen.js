import React from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity, ToastAndroid, KeyboardAvoidingView} from 'react-native'
import {TextInput} from 'react-native-gesture-handler'
import {Header} from 'react-native elements'
import * as Permissions from 'expo-permissions'
import {BarCodeScanner} from 'expo-barcode-scanner'
import db from '../config'

export default class WritingScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            author:'',
            storyText:'',
            title:''
        };
    }
    submitStory=()=>{
        db.collection('stories').add({
            author:this.state.author,
            storyText:this.state.storyText,
            title:this.state.title
        });
        this.setState({
            author:'',
            storyText:'',
            title:'',
        });
        ToastAndroid.show('Your Story Has Been Submitted!', ToastAndroid.SHORT)
    };

render(){
    return(
        <KeyBoardAvoidingView style={styles.container} behavior="padding" enabled>
           <Header 
           backgroundColor={'red'}
           centerComponent={{
               text:'The Bedtime Story Place',
               style:{color:'white', fontSize:20}
           }}
           />
           <TextInput
           placeholder="Author Of The Story"
           onChangeText={(text)=>{
               this.setState({
                   author:text
               })
           }}
           value={this.state.author}
           style={styles.author}/>
           <TextInput
           placeholder="Title Of The Story"
           onChangeText={(text)=>{
               this.setState({
                   title:text
               })
           }}
           value={this.state.title}
           style={styles.title}/>
           <TextInput
           placeholder="What Happens In The Story?"
           onChangeText={(text)=>{
               this.setState({
                   storyText:text
               })
           }}
           value={this.state.storyText}
           style={styles.storyText}
           multiline={true}/>
           <TouchableOpacity
           style={styles.submitButton}
           onPress={this.submitStory}
           >
              <Text style={styles.buttonText}>Submit</Text>
           </TouchableOpacity>
        </KeyBoardAvoidingView>
    )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black'
    },
    displayText:{
        fontSize:15,
        textDecorationLine:'underline'
    },
    scanButton:{
        backgroundColor:'#28290890',
        padding:10,
        margin:10
    },
    buttonText:{
      fontSize:15,
      textAlign:'center',
      marginTop:10
    },
    inputView:{
        flexDirection:'row',
        margin:20,
    },
    inputBox:{
        width:200,
        height:40,
        borderWidth:1.5,
        borderRightWidth:1.5,
        fontSize:20,
        backgroundColor:'white'
    },
    scanButton:{
        backgroundColor:'#tyuwo929',
        width:50, 
        borderWidth:1.5,
        borderLeftWidth:0
    }
})
