import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { Container, Header, Left, Right, Text, Content, List, ListItem} from 'native-base';
import getStyleSheet from '../styles/MoreStyles';

const styles = getStyleSheet();
const pageWidth = Dimensions.get("window").width;
const pageHeight = Dimensions.get("window").height;

export default function MoreScreen({navigation}) {
  return (
  <Container>
    <SafeAreaView style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.moreTitle}>More</Text>
        </View>
        <View style={styles.moreBottomContainer}>
            <Content style={{width:pageWidth, height:pageHeight, padding:'1rem'}}>
              <List>
                <ListItem noBorder={true}>
                  <Left />
                    <Text style={styles.moreList} onPress={() =>navigation.navigate('SignIn', { name: 'SignIn' })}>
                      공지사항
                    </Text>
                </ListItem>
                <ListItem noBorder={true}>
                  <Left />
                    <Text style={styles.moreList} onPress={() =>navigation.navigate('SignIn', { name: 'SignIn' })}>
                      고객문의
                    </Text>
                </ListItem>
                <ListItem noBorder={true}>
                  <Left />
                    <Text style={styles.moreList} onPress={() =>navigation.navigate('SignIn', { name: 'SignIn' })}>
                      알림설정
                    </Text>
                </ListItem>
                <ListItem noBorder={true}>
                  <Left />
                    <Text style={styles.moreList} onPress={() =>navigation.navigate('SignIn', { name: 'SignIn' })}>
                      앱정보
                    </Text>
                </ListItem>
                <ListItem noBorder={true}>
                  <Left />
                    <Text style={styles.moreList} onPress={() =>navigation.navigate('SignIn', { name: 'SignIn' })}>
                      개인정보 보호정책
                    </Text>
                </ListItem>
                <ListItem noBorder={true}>
                  <Left />
                    <Text style={styles.moreList} onPress={() =>navigation.navigate('SignIn', { name: 'SignIn' })}>
                      이용약관
                    </Text>
                </ListItem>
                <ListItem noBorder={true}>
                  <Left />
                    <Text style={styles.moreList} onPress={() =>navigation.navigate('SignIn', { name: 'SignIn' })}>
                      회원정보 변경
                    </Text>
                </ListItem>
              </List>
            </Content>
      </View>
    </SafeAreaView>
  </Container>
  );
}

MoreScreen.navigationOptions = {
  header: null,
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#FFCE70',
//     height: pageHeight,
//   },
//   topContainer: {
//     position:'relative',
//     alignItems: 'center',
//     marginTop: '-4%',
//     height:'5%',
//     maxHeight: pageHeight * 0.15,
//     flex:1,
//   },
//   moreTitle:{
//     padding:'14%',
//     color:"#ffffff",
//     fontSize:24,
//     fontWeight:'bold',
//     alignSelf: 'center'
//   },
//    moreBottomContainer: {
//     alignItems: 'center',
//     // width: pageWidth,
//     margin:0,
//     // padding:'1rem',
//     flex:2,
//     height:'95%',
//     backgroundColor:'#fff',
//     borderTopLeftRadius:50,
//   },
//   moreList:{
//     color:"#B0B0B0",
//     fontWeight:'bold',
//     fontSize: 24,
//     paddingTop:'1rem',
//     paddingBottom:'1rem',
//   }
// });