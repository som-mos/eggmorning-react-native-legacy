import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import { Container, Header, Left, Right, Text, Content, List, ListItem} from 'native-base';

export default function MypageScreen({navigation}) {
  return (
  <Container>
    <View style={styles.container}>
        <Header transparent>
          <Left>
          {/* <Button transparent
             onPress={() =>
              navigation.goBack()
            }>
              <Icon type="Feather" name="arrow-left-circle" style={{color:"#ffffff"}}/>
            </Button> */}
          </Left>
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
            <Content style={{width:'100%'}}>
              <List style={{height:'100%'}}>
                <ListItem noBorder={true}>
                  <Left />
                    <Text style={styles.myList} onPress={() =>navigation.navigate('Login', { name: 'Login' })}>
                      숙소 예약 내역
                    </Text>
                </ListItem>
                <ListItem noBorder={true}>
                  <Left />
                    <Text style={styles.myList} onPress={() =>navigation.navigate('Login', { name: 'Login' })}>
                      나의 후기
                    </Text>
                </ListItem>
                <ListItem noBorder={true}>
                  <Left />
                    <Text style={styles.myList} onPress={() =>navigation.navigate('Login', { name: 'Login' })}>
                      나의 쿠폰
                    </Text>
                </ListItem>
                <ListItem noBorder={true}>
                  <Left />
                    <Text style={styles.myList} onPress={() =>navigation.navigate('Login', { name: 'Login' })}>
                      최근 본 상품
                    </Text>
                </ListItem>
                <ListItem noBorder={true}>
                  <Left />
                    <Text style={styles.myList} onPress={() =>navigation.navigate('Login', { name: 'Login' })}>
                      기본 정보 수정
                    </Text>
                </ListItem>
              </List>
            </Content>
          <View>

          <View style={{flex:1, flexDirection: 'row'}}>
            <View style={{flex:0.5, padding:5}}>
              <TouchableOpacity
                      style={styles.loginBt}
                            onPress={() =>
                                navigation.navigate('Login', { name: 'Login' })}>
                          <Text style={styles.loginBtTxt}>Login</Text>
                        </TouchableOpacity>
            </View>
            <View style={{flex:0.5, padding:5}}>
                <TouchableOpacity
                            style={styles.loginBt}
                                onPress={() =>
                                    navigation.navigate('SignUp', { name: 'SignUp' })}>
                              <Text style={styles.loginBtTxt}>SignUp</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFCE70',
  },
  contentContainer: {
    paddingTop: 30,
  },
  topContainer: {
    position:'relative',
    alignItems: 'center',
    // marginTop: 40,
    // padding: '2%',
    height: '25%',
    maxHeight:180,
    flex:1,
  }, 
  userImage:{
    marginTop:-10,
    width: 110, 
    height: 110, 
    borderRadius: 50
  },
  userName:{
    // marginLeft: -10,
    color:"#ffffff",
    fontSize:24,
    fontWeight:'bold',
    marginTop:'3.5%',
  },
   myBottomContainer: {
    alignItems: 'center',
    height:'75%',
    width:'100%',
    margin:0,
    paddingTop:10,
    flex:2,
    backgroundColor:'#fff',
    borderTopLeftRadius:50,
  },
  loginBt:{
    height: 40,
    width: 80,
    backgroundColor:"#FFCE70",
    borderRadius:8,
    // marginTop:35,
    alignItems: "center",
    padding: 5,
  },
  loginBtTxt:{
    color:"#fff",
    fontSize:20, 
    fontWeight:"400",
    textAlignVertical:"center",
    paddingTop: 3,
  },
  myList:{
    color:"#B0B0B0",
    fontWeight:'bold',
    fontSize: 18,
    padding:20
  }
});