import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Image, Platform, StyleSheet, View, TouchableOpacity} from 'react-native';
import { Input, Container, Header, Left, Body, Right, Text, Button, Icon, Content, Form, Item, Label} from 'native-base';

export default function LoginScreen({navigation}) {

  const [login, setLogin] = useState (
    { id: '', password: ''}
  );

  const handleChange = (event) => {
    setLogin({...login, [event.target.name]: event.target.value})
  }

  const handleSubmit = (e) => {

    e.preventDefault()
    axios.post('http://54.180.155.194:8000/eggmorning/session', login)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log(login);
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
            {/* <Title>로그인</Title> */}
          </Body>
          <Right />
        </Header>
        <View style={styles.logoImgContainer}>
          <Image
            source={require('../img/logo.png')}
            style={styles.logoImage}
          />
          <Text style={styles.logoImageT}>Hello, Egg Morning!</Text>
        </View>

        <View style={styles.loginBottomContainer}>

        <View style={[styles.codeHighlightContainer, styles.LoginScreenFilename]}>
            <Text style={styles.loginText}>LogIn</Text>
          </View>
            <Form>
                <Item floatingLabel>
                  <Label style={styles.labelSt}>Username</Label>
                  <Input type="text" name="id" value={login.id} onChange={handleChange} required />
                </Item>
                <Item floatingLabel>
                  <Label style={styles.labelSt}>Password</Label>
                  <Input type="password" name="password" value={login.password} onChange={handleChange} required/>
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
                        style={styles.loginBt} >
                          <Text style={styles.loginBtTxt}>Login</Text>
                        </TouchableOpacity>
                    </View>
                  </View>
                  {/* <View style={{flex:2, flexDirection:"column"}}>
                    <Button full style={styles.loginBt}>
                      <Text style={styles.loginBtTxt}>Login</Text>
                    </Button>
                  </View> */}
                
            </Form>
        </View>
    </View>
    </Container>
  ); 
}

LoginScreen.navigationOptions = {
  header: null,
};

// function DevelopmentModeNotice() {
//   if (__DEV__) {
//     const learnMoreButton = (
//       <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
//         Learn more
//       </Text>
//     );

//     return (
//       <Text style={styles.developmentModeText}>
//         Development mode is enabled: your app will be slower but you can use useful development
//         tools. {learnMoreButton}
//       </Text>
//     );
//   } else {
//     return (
//       <Text style={styles.developmentModeText}>
//         You are not in development mode: your app will run at full speed.
//       </Text>
//     );
//   }
// }

// function handleLearnMorePress() {
//   WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
// }

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
    // marginTop: 40,
    height: '25%',
    maxHeight:160,
    flex:1,
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
    color:"#ffffff",
    fontSize:20,
    fontWeight:'600'
  },
   loginBottomContainer: {
    alignItems: 'center',
    height:'75%',
    width:'100%',
    margin:0,
    padding:0,
    flex:2,
    backgroundColor:'#fff',
    borderTopLeftRadius:50,
    borderTopRightRadius:50
  },
  loginText:{
    fontSize: 20,
    color:"#7a7a7a",
    fontWeight:'600',
    marginTop:"100%"
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
    flex:1,
    flexDirection:"row",
    paddingLeft:10,
    paddingRight:10
  },
  warningText:{
    color:"#ff5e92",
    fontSize:12,
    marginTop:15,
    alignSelf:"center",
    display:'none'
  },
  signUp:{
    color:"#7a7a7a",
    fontSize:12,
    marginBottom:"10%",
  },
  signUpBt:{
    color:"#7a7a7a",
    fontSize:14,
    fontWeight:"600",
  },
  loginBt:{
    height: 50,
    width: 250,
    backgroundColor:"#FFCE70",
    borderRadius:8,
    // marginTop:35,
    alignItems: "center",
    padding: 10,
  },
  loginBtTxt:{
    color:"#fff",
    fontSize:20, 
    fontWeight:"400",
    textAlignVertical:"center",
    paddingTop: 3,
  },
  labelSt:{
    color:"#bebbbf"
  },
});
