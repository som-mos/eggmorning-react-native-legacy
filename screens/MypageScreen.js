import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import { Container, Header, Left, Right, Text, Content, List, ListItem} from 'native-base';
import getCommonStyle from '../styles/CommonStyles';
import getStyleSheet from '../styles/MyPageStyles';

const commonstyle = getCommonStyle();
const styles = getStyleSheet();

export default function MypageScreen({navigation}) {
  return (
  <Container>
    <View style={commonstyle.backgroundColorContainer}>
        <Header transparent>
          <Left />
          <Right />
        </Header>
        <View style={styles.topContainer}>
          <Image
            source={require('../img/face.jpg')}
            style={styles.userImage}
          />
          <Text style={styles.userName}>UserName</Text>
        </View>
        <View style={styles.myBottomContainer}>
              <List style={styles.listStyle}>
                <ListItem noBorder={true}>
                  <Left />
                    <Text style={commonstyle.listText} onPress={() =>navigation.navigate('SignIn', { name: 'SignIn' })}>
                      숙소 예약 내역
                    </Text>
                </ListItem>
                <ListItem noBorder={true}>
                  <Left />
                    <Text style={commonstyle.listText} onPress={() =>navigation.navigate('SignIn', { name: 'SignIn' })}>
                      나의 후기
                    </Text>
                </ListItem>
                <ListItem noBorder={true}>
                  <Left />
                    <Text style={commonstyle.listText} onPress={() =>navigation.navigate('SignIn', { name: 'SignIn' })}>
                      나의 쿠폰
                    </Text>
                </ListItem>
                <ListItem noBorder={true}>
                  <Left />
                    <Text style={commonstyle.listText} onPress={() =>navigation.navigate('SignIn', { name: 'SignIn' })}>
                      최근 본 상품
                    </Text>
                </ListItem>
                <ListItem noBorder={true}>
                  <Left />
                    <Text style={commonstyle.listText} onPress={() =>navigation.navigate('SignIn', { name: 'SignIn' })}>
                      기본 정보 수정
                    </Text>
                </ListItem>
              </List>
          <View>
          <View style={{flex:1, flexDirection: 'row'}}>
            <View style={{marginRight:10, marginLeft:10}}>
              <TouchableOpacity
                      style={styles.SignInBt}
                            onPress={() =>
                                navigation.navigate('SignIn', { name: 'SignIn' })}>
                          <Text style={styles.SignInBtTxt}>SignIn</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginRight:10, marginLeft:10}}>
                <TouchableOpacity
                            style={styles.SignInBt}
                                onPress={() =>
                                    navigation.navigate('SignUp', { name: 'SignUp' })}>
                              <Text style={styles.SignInBtTxt}>SignUp</Text>
                </TouchableOpacity>
            </View>
          
           
            </View>
            
          </View>
          </View>
    </View>
  </Container>
  );
}

MypageScreen.navigationOptions = {
  header: null,
};