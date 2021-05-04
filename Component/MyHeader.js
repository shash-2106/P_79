
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from 'react-native-elements';

export default class MyHeader extends React.Component{
    constructor(props){
        super();
        
    }
    render(){
        return(
            <Header centerComponent={{text:this.props.title, style:{color:"white", fontSize:20, fontWeight:'bold'}}} backgroundColor='#4d0000'/>
        )  
    }

}