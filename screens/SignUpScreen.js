import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Image, Platform, StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import { Input, Container, Header, Left, Body, Right, Button, Icon, Form, Label, Item} from 'native-base';
import RadioButton from '../components/RadioButton';


const gender = [
    {
      key: 'Male',
      text: 'Male',
      name: 'male',
    },
    {
      key: 'Female',
      text: 'Female',
      name: 'female',
    },
    {
      key: 'None',
      text: 'None',
      name: 'none',
    },
  ];

export default function signUpScreen({navigation}) {
  
  const [userSignUp, setUserSignUp] = useState (
    { id: '', nickname: '', password:'', passwordchk:'', phone: '', gender:'' }
  );  
  
    // const genderValue = (x) => {
    //     return {gender: x}
    // }

  // const genderValue = () => {
  //   useEffect((value) => {
  //       const userSignUpAll = Object.assign(userSignUp, value);
  //         console.log(userSignUp);
  //       })
  // }
  
  // console.log(value);

  const handleChange = (event) => {
    setUserSignUp({...userSignUp, [event.target.name]: event.target.value})
  }

  const handleSubmit = (e) => {

    e.preventDefault()
    axios.post('http://54.180.155.194:8000/eggmorning/user', userSignUp)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log({userSignUp});
  }

  return (
    <Container>
      <View style={styles.container}> 
        <Header transparent>
          <Left>
            <Button transparent
             onPress={() =>
              navigation.goBack()
            }>
              <Icon type="Feather" name="arrow-left-circle" style={{color:"#ffffff"}}/>
            </Button>
          </Left>
          <Body>
          </Body>
          <Right />
        </Header>
            <View style={styles.loginBottomContainer}>
              <View style={[styles.codeHighlightContainer, styles.signUpScreenFilename]}>
                <Text style={styles.loginText}>Sign Up</Text>
              </View>
              <Form onSubmit={handleSubmit}>
                <Item floatingLabel>
                    <Label htmlFor="id" style={styles.labelSt}>E-mail (ID)</Label>
                    <Input type="text" name="id" value={userSignUp.id} onChange={handleChange} required />
                    {/* <Icon name='close-circle' /> */}
                </Item>
                <Item floatingLabel>
                    <Label htmlFor="nickname" style={styles.labelSt}>Nickname</Label>
                    <Input type="text" name="nickname" value={userSignUp.name} onChange={handleChange} required/>
                    {/* <Icon name='close-circle' /> */}
                  </Item>
                  <Item floatingLabel>
                    <Label htmlFor="password" style={styles.labelSt}>Password</Label>
                    <Input type="password" name="password" value={userSignUp.password} onChange={handleChange} required/>
                    {/* <Icon name='close-circle' /> */}
                </Item>
                <Item floatingLabel>
                    <Label htmlFor="passwordchk" style={styles.labelSt}>Check Password</Label>
                    <Input type="password" name="passwordchk" value={userSignUp.passwordchk} onChange={handleChange} required/>
                </Item>
                <Item floatingLabel>
                    <Label htmlFor="phone" style={styles.labelSt}>Phone</Label>
                    <Input type="text" name="phone" value={userSignUp.phone} onChange={handleChange} required/>
                    {/* <Icon name='close-circle' /> */}
                </Item>
                    {/* <Icon name='close-circle' /> */}
                    <View style={styles.radioBt}>
                      <Text style={styles.titleSt}>Gender</Text>
                      <RadioButton 
                        gender={ gender }
                      />
                    </View>
                
                
                  <View style={{flex:1}}>
                      <TouchableOpacity 
                      onPress={handleSubmit} 
                      style={styles.signupBt} >
                        <Text style={styles.signupBtTxt}>Sign Up</Text>
                      </TouchableOpacity>
                  </View>
                     
                </Form>
            </View>
    </View>
    </Container>
  ); 
}

signUpScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFCE70',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  logoImgContainer: {
    position:'relative',
    alignItems: 'center',
    marginTop: 50,
    height: '30%',
    maxHeight:180,
    flex:2,
  }, 
  logoImage: {
    width:200,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  logoImageT:{
    marginLeft: -10,
  },
   loginBottomContainer: {
    alignItems: 'center',
    bottom:0,
    height:'85%',
    width:'100%',
    margin:0,
    padding:0,
    flex:2,
    backgroundColor:'#fff',
    borderTopLeftRadius:50,
    borderTopRightRadius:50
  },
  signUpScreenFilename: {
    paddingVertical: 14,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    paddingHorizontal: 10,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  loginText:{
    fontSize: 20,
    color:"#7a7a7a",
    fontWeight:'600',
    marginTop:30
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  inputText: {
    width:30,
    lineHeight:30,
    height:30,
    textAlignVertical: 'center',
    textAlign: 'right',
  },
  inputStyle: {
    height:30,
    width:120,
    marginLeft: 15,
    borderBottomColor: 'gray',
    borderBottomWidth: 200,
    borderBottomWidth: 1,
  },
  loginRows: {
    maxHeight: 60,
    width: '100%',
  },
  signUpRows:{
    maxHeight: 60,
    width: '100%',
  },
  signupBt:{
    height: 50,
    width: 250,
    backgroundColor:"#FFCE70",
    borderRadius:8,
    marginTop:35,
    // marginBottom:25,
    alignItems: "center",
    padding: 10,
  },
  signupBtTxt:{
    color:"#fff",
    fontSize:20, 
    fontWeight:"400",
  },
  labelSt:{
    color:"#bebbbf"
  },
  titleSt:{
    color:"#bebbbf",
    fontSize:16,
  },
  radioBt: {
    // flex: 1,
    marginLeft:15,
    marginRight: 15,
    marginTop:25,
    marginBottom:0,
  }
});
