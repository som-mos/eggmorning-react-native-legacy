import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import {Image, Platform, StyleSheet, Text, View } from 'react-native';
import { Input, Container, Header, Left, Body, Right, Button, Icon, Form, Label, Item, Radio, } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default function signUpScreen({navigation, checked}) {
  return (
    <Container>
      <View style={styles.container}> 
        <Header transparent>
          <Left>
            <Button transparent
             onPress={() =>
              navigation.navigate('Login', { name: 'SomSom' })
            }>
              <Icon type="Feather" name="arrow-left-circle" style={{color:"#ffffff"}}/>
            </Button>
          </Left>
          <Body>
            {/* <Title>회원가입</Title> */}
          </Body>
          <Right />
        </Header>
            
            <View style={styles.loginBottomContainer}>
              <View style={[styles.codeHighlightContainer, styles.signUpScreenFilename]}>
                <Text style={styles.loginText}>Sign Up</Text>
              </View>
              <Form>
                <Item floatingLabel last>
                    <Label style={styles.labelSt}>Username</Label>
                    <Input />
                    {/* <Icon name='close-circle' /> */}
                  </Item>
                  <Item floatingLabel last>
                    <Label style={styles.labelSt}>Password</Label>
                    <Input />
                    {/* <Icon name='close-circle' /> */}
                </Item>
                <Item floatingLabel last>
                    <Label style={styles.labelSt}>Check Password</Label>
                    <Input />
                </Item>
                    {/* <Icon name='close-circle' /> */}
                <Grid>
                  <Col style={styles.listStyle} noBorder={true}>
                  <Button bordered
                  style={{borderColor:"pink", width:"90%"}}
                  >
                    <Icon type="FontAwesome5" name="male" style={{color:"pink"}}/>
                    <Text style={{color:"pink", textAlign:"center"}}>Male</Text>
                  </Button>
                  </Col>
                  <Col style={styles.listStyle} noBorder={true}>
                    <Row>
                    <Radio />
                    <Text>FeMale</Text>
                    </Row>
                  </Col>
                </Grid>
                <Item floatingLabel last>
                    <Label style={styles.labelSt}>Phone</Label>
                    <Input />
                    {/* <Icon name='close-circle' /> */}
                </Item>
                <Item floatingLabel last>
                    <Label style={styles.labelSt}>E-mail</Label>
                    <Input />
                    {/* <Icon name='close-circle' /> */}
                </Item>
                      <Button rounded style={styles.signupBt}>
                        <Text style={styles.signupBtTxt}> Sign Up </Text>
                      </Button>
                </Form>
            </View>
    </View>
    </Container>
  ); 
}

signUpScreen.navigationOptions = {
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
    position:"fixed",
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
    marginTop:"2vh",
    fontSize: 32,
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
  signupBt:{
    height: 50,
    width: 200,
    borderColor:"pink",
    alignSelf:"center",
    borderRadius:8,
    backgroundColor:"pink",
    position:"fixed",
    bottom:"5vh",
  },
  signupBtTxt:{
    color:"#fff", 
    alignSelf:"center",
    textAlign:"center",
    marginHorizontal:"auto",
    marginBottom:5,
    fontSize:20, 
  },
  signUp:{
    color:"blue",
    marginHorizontal:"auto"
  },
  signUpBt:{
    color:"blue",
    fontWeight:"600"
  },
  labelSt:{
    color:"pink"
  },
  listStyle:{
    // width: "50%",

  },

});
