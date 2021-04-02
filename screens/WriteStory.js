import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

import db from '../config'
import firebase from 'firebase'

export default class ReadStory extends React.Component{
  constructor(){
    super()
    this.state={
      title:'',
      author:'',
      story:'',
    }
  }

  submitStory=()=>{
    db.collection('stories').add({
      title:this.state.title,
      author:this.state.author,
      story:this.state.story
    })
  }
    render(){
        return(
            <View style={styles.container}>
                <Header
                  backgroundColor="#5f9ea0"
                  placement="left"
                  centerComponent={{ text: 'Write Story', style: { color: '#fff', marginLeft:110 } }}
                />
                <TextInput style={styles.input1}
                placeholder='Title'
                onChangeText={text=>{this.setState({
                  title:text
                })}}
                />
                <TextInput style={styles.input2}
                placeholder='Author Of The Story'
                onChangeText={text=>{this.setState({
                  author:text
                })}}
                />

                <TextInput style={styles.input3}
                placeholder='Write Story'
                multiline={true}
                onChangeText={text=>{this.setState({
                  story:text
                })}}
                />

                <TouchableOpacity style={styles.button} onPress={this.submitStory}>
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles =  StyleSheet.create({
  container:{
    flex:1
  },
  input1:{
    borderRadius:5,
    borderWidth:2,
    marginTop:'5%',
    height:'5%',
    textAlign:"center",
    fontSize:16,
    width:300,
    fontWeight:"bold",
    alignSelf:"center"
  },
    input2:{
    borderRadius:5,
    borderWidth:2,
    marginTop:'5%',
    height:'5%',
    width:300,
    textAlign:"center",
    alignSelf:"center"
  },
  input3:{
    borderRadius:5,
    borderWidth:2,
    marginTop:'5%',
    height:'50%',
    width:300,
    textAlign:"center",
    alignSelf:"center"
  },
  button:{
    textAlign:"center",
    borderRadius:50,
    marginTop:30,
    width:100,
    height:50,
    backgroundColor:'pink',
    alignSelf:"center",
  },
  buttonText:{
    alignSelf:"center",
    textAlign:"center",
    marginTop:10,
    fontSize:20,
  }
})


