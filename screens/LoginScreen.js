import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import {Image, Platform, StyleSheet, View} from 'react-native';
import { Input, Container, Header, Left, Body, Right, Text, Button, Icon, Content, Form, Item, Label} from 'native-base';

export default function LoginScreen({navigation}) {
  return (
    <Container>
      <View style={styles.container}> 
        <Header transparent>
          <Left>
          <Button transparent
             onPress={() =>
              navigation.navigate('Root', { screen: 'Mypage' })
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
          <Text style={styles.logoImageT}>Hello! Egg Morning</Text>
        </View>

        <View style={styles.loginBottomContainer}>

          <View style={[styles.codeHighlightContainer, styles.LoginScreenFilename]}>
            <Text style={styles.loginText}>LogIn</Text>
          </View>
            <Form>
                <Item floatingLabel>
                  <Label style={{color:"pink"}}>Username</Label>
                  <Input />
                </Item>
                <Item floatingLabel>
                  <Label style={{color:"pink"}}>Password</Label>
                  <Input />
                </Item>
                <View style={{flex:1}}>
                  <View style={{flex:2, flexDirection:"column"}}>
                    <Right>
                    <Text style={styles.signUp}>아직 계정이 없으신가요?
                    <Text style={styles.signUpBt} onPress={() =>navigation.navigate('SignUp', { name: 'SomSom' })}> 회원가입</Text></Text>
                    </Right>
                  </View>
                  <View style={{flex:2, flexDirection:"column"}}>
                    <Button full style={styles.loginBt}>
                    <Text style={styles.loginBtTxt}>LogIn</Text>
                    </Button>
                  </View>
                </View>
            </Form>
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
    marginTop: 40,
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
    color:"#ffffff",
    fontSize:20,
    fontWeight:'600'
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
    marginVertical: 20,
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
    flex:1,
    flexDirection:"row",
    paddingLeft:10,
    paddingRight:10
  },

  loginBt:{
    height: 50,
    width: 250,
    backgroundColor:"pink",
    borderRadius:8,
    marginTop:50,
    marginBottom:25,
  },
  loginBtTxt:{
    color:"#fff",
    fontSize:20, 
    fontWeight:"400"
  },
  signUp:{
    color:"#ff5e92",
    fontSize:12,
    marginTop:15,
  },
  signUpBt:{
    color:"#ff5e92",
    fontSize:14,
    fontWeight:"600",
  },

});
