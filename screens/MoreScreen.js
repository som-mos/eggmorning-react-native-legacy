import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { Container, Header, Left, Right, Text, Content, List, ListItem} from 'native-base';
import getCommonStyle from '../styles/CommonStyles';
import getStyleSheet from '../styles/MoreStyles';

const commonstyle = getCommonStyle();
const styles = getStyleSheet();

export default function MoreScreen({navigation}) {
  return (
  <Container>
    <SafeAreaView style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.moreTitle}>More</Text>
        </View>
        <View style={styles.moreBottomContainer}>
              <List>
                <ListItem noBorder={true}>
                  <Left />
                    <Text style={commonstyle.listText} onPress={() =>navigation.navigate('SignIn', { name: 'SignIn' })}>
                      공지사항
                    </Text>
                </ListItem>
                <ListItem noBorder={true}>
                  <Left />
                    <Text style={commonstyle.listText} onPress={() =>navigation.navigate('SignIn', { name: 'SignIn' })}>
                      고객문의
                    </Text>
                </ListItem>
                <ListItem noBorder={true}>
                  <Left />
                    <Text style={commonstyle.listText} onPress={() =>navigation.navigate('SignIn', { name: 'SignIn' })}>
                      알림설정
                    </Text>
                </ListItem>
                <ListItem noBorder={true}>
                  <Left />
                    <Text style={commonstyle.listText} onPress={() =>navigation.navigate('SignIn', { name: 'SignIn' })}>
                      앱정보
                    </Text>
                </ListItem>
                <ListItem noBorder={true}>
                  <Left />
                    <Text style={commonstyle.listText} onPress={() =>navigation.navigate('SignIn', { name: 'SignIn' })}>
                      개인정보 보호정책
                    </Text>
                </ListItem>
                <ListItem noBorder={true}>
                  <Left />
                    <Text style={commonstyle.listText} onPress={() =>navigation.navigate('SignIn', { name: 'SignIn' })}>
                      이용약관
                    </Text>
                </ListItem>
                <ListItem noBorder={true}>
                  <Left />
                    <Text style={commonstyle.listText} onPress={() =>navigation.navigate('SignIn', { name: 'SignIn' })}>
                      회원정보 변경
                    </Text>
                </ListItem>
              </List>
      </View>
    </SafeAreaView>
  </Container>
  );
}

MoreScreen.navigationOptions = {
  header: null,
};