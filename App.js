import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import WritingScreen from './screens/WritingScreen';
import ReadingScreen from './screens/ReadingScreen';

export default class App extends React.Component{
    render(){
        return(
            <AppContainer/>
        );
    }
}

const TabNavigator = createBottomTabNavigator({
    WriteStory:{screen:WritingScreen},
    ReadStory:{screen:ReadingScreen},
},
{
    defaultNavigationOptions: ({navigation})=>({
   
        tabBarIcon: ()=>{
          const routeName = navigation.state.routeName;
          console.log(routeName)
          if(routeName === "Read A Story"){
            return(
              <Image
              source={require("./assets/read.png")}
              style={{width:40, height:40}}
            />
            )
            
          }
          else if(routeName === "Write A Story"){
            return(
              <Image
              source={require("./assets/write.png")}
              style={{width:40, height:40}}
              
            />)       
          }
           else if(routeName === "Home"){
            return(
              <Image
              source={require("./assets/home.png")}
              style={{width:50, height:50}}
              
            />)  
                 
          }
          
        }
        
       
      })
      
    }
    
    
    )
    
    const AppContainer = createAppContainer(TabNavigator);
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
      
      },
    })
    
               