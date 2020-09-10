import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import {Image, Platform, StyleSheet, Text, View, Form} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { ScrollView } from 'react-native-gesture-handler';
import BottomTabNavigator from '../navigation/BottomTabNavigator';
import { MonoText } from '../components/StyledText';
import { Input, Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default function LoginScreen({navigation}) {
  return (
    <Container>
      <View style={styles.container}> 
        <Header style={{backgroundColor:"transparent"}}>
          <Left>
            <Button transparent
             onPress={() =>
              navigation.navigate('Mypage', { name: 'SomSom' })
            }>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title></Title>
          </Body>
        </Header>


        <View style={styles.logoImgContainer}>
          <Image
            source={require('../img/logo.png')}
            style={styles.logoImage}
          />
          <Text style={styles.logoImageT}>Hello! Egg Morning</Text>
        </View>

        <View style={styles.loginBottomContainer}>

          <View style={[styles.codeHighlightContainer, styles.LoginScreenFilename]}>
            <Text style={styles.loginText}>LogIn</Text>
          </View>
            <Grid style={{ overflow:'hidden', width: '90%', padding: '10%'}}>
              <Row style={styles.loginRows}>
                    <Text style={styles.inputText}>ID</Text>
                    <Input placeholder="User ID" style={styles.inputStyle}></Input>
              </Row>
              <Row style={styles.loginRows}>
                    <Text style={styles.inputText}>PW</Text>
                    <Input placeholder="User PW" style={styles.inputStyle}></Input>
              </Row>
              <Row style={styles.signUpRows}>
                    <Text style={styles.signUp}>아직 계정이 없으신가요?
                    <Text style={styles.signUpBt} onPress={() =>navigation.navigate('SignUp', { name: 'SomSom' })}>회원가입</Text></Text>
              </Row>
              </Grid>
              <Grid>
              <Row>
              <Button primary style={styles.loginBt}  
                >
                <Text style={styles.loginBtTxt}> LogIn </Text>
              </Button>
              </Row>
            </Grid>

        </View>
    </View>
    </Container>
  ); 
}

LoginScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffd5d4',
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
    height:'70%',
    width:'100%',
    margin:0,
    padding:0,
    flex:2,
    backgroundColor:'#fff',
    borderTopLeftRadius:50,
    borderTopRightRadius:50
  },
  LoginScreenFilename: {
    marginVertical: 24,
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
    fontSize: '2em',
    textAlignVertical: 'center',
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
  backButton:{
    position: 'absolute',
    top:0,
    left:0,
    width:70,
    height:15,
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
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
  loginBt:{
    height: 50,
    width: 200,
    backgroundColor:"pink",
    alignSelf:"center",
    borderRadius:8,
  },
  loginBtTxt:{
    color:"#fff", 
    alignSelf:"center", 
    marginHorizontal:"auto",
    marginBottom:5,
    fontSize:20, 
    fontWeight:"400",
  },
  signUp:{
    color:"blue",
    marginHorizontal:"auto"
  },
  signUpBt:{
    color:"blue",
    fontWeight:"600"
  },

});
