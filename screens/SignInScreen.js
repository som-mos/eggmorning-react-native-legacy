import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Image, View, TouchableOpacity} from 'react-native';
import { Input, Container, Header, Left, Body, Right, Text, Button, Icon, Form, Item, Label} from 'native-base';
import getCommonStyle from '../styles/CommonStyles';
import getStyleSheet from '../styles/SignStyles';

const screenType = 'signin';
const commonstyle = getCommonStyle();
const styles = getStyleSheet(screenType);


export default function SignInScreen({navigation}) {
  const [SignIn, setSignIn] = useState (
    { id: '', password: ''}
  );

  const handleChange = (event) => {
    setSignIn({...SignIn, [event.target.name]: event.target.value})
  }

  const handleSubmit = (e) => {

    e.preventDefault();
    axios.post('http://54.180.155.194:8000/eggmorning/session', SignIn)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log(SignIn);
  }
 
  return (
    <Container>
      <View style={commonstyle.backgroundColorContainer}> 
        <Header transparent>
          <Left>
          <Button transparent
             onPress={() =>
              navigation.goBack()
            }>
              <Icon type="Feather" name="arrow-left" style={{color:"#ffffff"}}/>
            </Button>
          </Left>
          <Body />
          <Right />
        </Header>
        <View style={styles.logoImgContainer}>
          <Image
            source={require('../img/logo.png')}
            style={styles.logoImage}
          />
          <Text style={styles.logoImageT}>Hello, Egg Morning!</Text>
        </View>

        <View style={styles.SignInBottomContainer}>
        <View style={[styles.codeHighlightContainer, styles.SignInScreenFilename]}>
            <Text style={styles.SignInText}>SignIn</Text>
          </View>
            <Form>
                <Item floatingLabel>
                  <Label style={styles.labelSt}>Username</Label>
                  <Input type="text" name="id" value={SignIn.id} onChange={handleChange} required />
                </Item>
                <Item floatingLabel>
                  <Label style={styles.labelSt}>Password</Label>
                  <Input type="password" name="password" value={SignIn.password} onChange={handleChange} required/>
                </Item>
                  <View>
                    <View>
                        <Text style={styles.warningText}>아이디 또는 비밀번호가 일치하지 않습니다.</Text>
                    </View>
                    <View style={{marginTop:'20%'}}> 
                    <Right>
                        <Text style={styles.signUp}>아직 계정이 없으신가요?
                        <Text style={styles.signUpBt} onPress={() =>navigation.navigate('SignUp', { name: 'SignUp' })}> 회원가입</Text></Text>
                      </Right>
                        <TouchableOpacity 
                        onPress={handleSubmit} 
                        style={styles.SignInBt} >
                          <Text style={styles.SignInBtTxt}>SignIn</Text>
                        </TouchableOpacity>
                    </View>
                  </View>
            </Form>
        </View>
    </View>
    </Container>
  ); 
}

SignInScreen.navigationOptions = {
  header: null,
};