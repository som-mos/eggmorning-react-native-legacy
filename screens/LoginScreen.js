import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import {Button, Image, Platform, StyleSheet, Text, View, Form} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { ScrollView } from 'react-native-gesture-handler';
import BottomTabNavigator from '../navigation/BottomTabNavigator';
import { MonoText } from '../components/StyledText';
import { Input } from 'native-base';

export default function LoginScreen({navigation}) {
  return (
    <View style={styles.container}> 
        <View style={styles.backButton}>
           <Button
                    title="< Back"
                    onPress={() =>
                        navigation.navigate('Mypage', { name: 'SomSom' })
                    }
                    color="transparent"
                />
        </View>  
        <View style={styles.logoImgContainer}>
         
          <Image
            source={
                require('../img/logo.png')
            }
            style={styles.logoImage}
          />
          <Image
            source={
                require('../img/logo-text.png')
            }
            style={styles.logoImageT}
          />
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
              </Grid>
              <Grid>
              <Row style={{width: 200, height: 50}}>
                <Button title="LogIn" 
                        onPress={() =>
                        navigation.navigate('SignUp', { name: 'SomSom' })} 
                        color="pink"
                        />
              </Row>
            </Grid>

        </View>
    </View>
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
    width:160,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  logoImageT:{
    width:160,
    height: 40,
    resizeMode: 'contain',
    marginLeft: -10,
  },
   loginBottomContainer: {
    alignItems: 'center',
    // marginHorizontal: 50,
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

});
