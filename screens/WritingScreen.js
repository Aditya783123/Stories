import React from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity, ToastAndroid, KeyboardAvoidingView} from 'react-native'
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
        ToastAndroid.show('Your Story Has been Submitted!', ToastAndroid.SHORT)
    };

render(){
    return(
        <View style={styles.container}>
            <View>
                <Text style={{textAlign: 'center', fontSize:30, backgroundColor:'black'}}>StoryHub{''}</Text>
            </View>
            <View style={styles.inputView}>
                <KeyboardAvoidingView>
            <TextInput
            style={styles.inputBox}
            placeholder="Story Title"
            />
            </KeyboardAvoidingView>
            </View>
            <View style={styles.inputView}>
            <KeyboardAvoidingView>
            <TextInput
            style={styles.inputBox}
            placeholder="Author Name"
            />
            </KeyboardAvoidingView>
            </View>
            <KeyboardAvoidingView>
            <TextInput 
            style={styles.storyBox}
            placeholder="Write Your Story!"
            />
            </KeyboardAvoidingView>
            <TouchableOpacity
            style={styles.submitButton}
            onPress={this.submitStory}>
              <Text style={styles.submitButtonText}>Submit Your Story!</Text>
            </TouchableOpacity>
            <View style={styles.inputView}>
            
            <TextInput/>
                </View>
        </View>
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
