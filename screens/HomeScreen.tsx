// import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import axios from 'axios';
import { Col, Row, Grid } from "react-native-easy-grid";
import Carousel from 'react-native-snap-carousel';
import { Image, StyleSheet, View, SafeAreaView, ImageBackground, Dimensions, ScrollView} from 'react-native';
import { Container, Content, List, ListItem, Text, Left, Body, Right, Thumbnail, Button } from 'native-base';
import { Rating, AirbnbRating } from 'react-native-ratings';
import getStyleSheet from '../styles/HomeStyles';

const hotelImage: Array<String> = ["https://cookieandkate.com/images/2018/09/crispy-fried-egg-recipe.jpg"];
const pageWidth = Dimensions.get("window").width;
// const hotellist: Array<any> = [
//   {
//     name: 'hotel name 01',
//     des: '주변의 관광 명소로는 용연 계곡과 용의 머리를 닮은 용두암이 차로 15분 거리에 있으며 제주도 원주민의 발상지인 삼성혈이 차로 5분 거리에 자리해 있습니다.',
//     thumbnail: 'https://media.datahc.com/HI384591626.jpg',
//     location: '제주도 제주시 중앙로 304',
//   },
//   {
//     name: 'hotel name 02',
//     des: '호텔 난타 - <4성급> - 2017년 3월 오픈한 호텔 난타는 제주국제공항에서 차로 약 30분 거리에 있습니다.',
//     thumbnail: 'https://media.datahc.com/HI367874535.jpg',
//     location: '제주도 제주시 선돌목동길 56-26',
//   },
//   {
//     name: 'hotel name 03',
//     des: '휘슬락 호텔에서 차로 15분이면 제주국제공항까지 가실 수 있습니다. 차로 약 10분 거리에 제주의 역사를 한눈에 볼 수 있는 제주 삼성혈과 민속 자연사 박물관이 있습니다',
//     thumbnail: 'https://media.datahc.com/HI368453846.jpg',
//     location: '제주도 제주시 중앙로 304',
//   },
//   {
//     name: 'hotel name 04',
//     des: '호텔 리젠트 마린 더 블루에서 차로 15분이면 제주국제공항까지 가실 수 있습니다. 차로 약 10분 거리에 제주의 역사를 한눈에 볼 수 있는 제주 삼성혈과 민속 자연사 박물관이 있습니다.',
//     thumbnail: 'https://media.datahc.com/HI557269113.jpg',
//     location: '제주도 제주시 중앙로 304',
//   },
//   {
//     name: 'hotel name 05',
//     des: '그라벨 호텔 - <4성급> - 이호테우 해변에서 차로 7분 거리에 있는 그라벨 호텔에서 제주국제공항까지는 차로 약 15분가량 소요됩니다.',
//     thumbnail: 'https://media.datahc.com/HI567291397.jpg',
//     location: '제주도 제주시 중앙로 304',
//   },

// ];
const styles = getStyleSheet();

export default class HomeScreen extends React.Component{
      state = {
        // slides: [],
        activeIndex:0,
        carouselItems: [],
    }

getSlides = async () => {
const {
    data: { result },
} = await axios.get("http://54.180.155.194:8000/eggmorning/main/slide");
this.setState({ carouselItems: result });
};

componentDidMount() {
this.getSlides();
}  

ratingCompleted(rating) {
  console.log("Rating is: " + rating)
}

_renderItem({ index, item }){
    return(
        <View
        key={index}
        style={{
        borderRadius: 15,
        height: 520,
        padding:5,
        marginLeft:0,
        marginRight:0, }}> 
    <ImageBackground source={{ uri: item.image }} style={styles.ImgBg}>
    <View style={styles.textContainer}>
                <Grid>
                <Row>
                    <Text style={styles.bigText}>
                    {item.title}
                    </Text>
                </Row>
                </Grid>
                <Grid style={{position:"relative", paddingTop:20}}>
                    <Col style={styles.userInfo1}>
                    <Image
                        source={require('../img/face.jpg')}
                        style={styles.imageuser}
                        />
                    </Col>
                    <Col style={styles.userInfo2}>
                    <Row style={styles.userRows}>
                        <Text style={styles.smallText}>
                        WRITER
                        </Text>
                    </Row>
                    <Row style={styles.userRows}>
                        <Text style={styles.nomalText}>
                        {item.username}
                        </Text>
                    </Row>
                    </Col>
                </Grid>
                    <Button style={styles.slideBt}>
                    <Image source={require('../img/moreBT.png')}
                    style={{ width:96, height:50}}>
                    </Image>
                    </Button>
                
            </View>
    </ImageBackground>
    </View>
    )
}
    render() {
        // @ts-ignore
        return (
          <Container>
            <ScrollView>
              <SafeAreaView style={styles.container}>
                  <Grid>
                      <Row style={styles.titleLine1}></Row>
                      <Row style={{ height: 36, marginLeft: 30, marginBottom: 25}}>
                        <Text style={styles.textTitle}>News</Text>
                      </Row>
                      <Row>
                        <View style={styles.scrollContainer}>
                          <Carousel
                              layout={"default"}
                              loop={false}
                              autoplay={true}
                              ref={ref => this.carousel = ref}
                              data={this.state.carouselItems}
                              sliderWidth={pageWidth}
                              itemWidth={pageWidth - 70}
                              slideStyle={{flex:1}}
                              renderItem={this._renderItem}
                              onSnapToItem = { index => this.setState({activeIndex:index}) }
                              activeSlideAlignment = {'start'}
                              />
                        </View>
                    </Row>
                    </Grid>
                  <Grid style={{ marginBottom:25, marginTop:25}}>
                  <Row style={styles.titleLine2}></Row>
                  <Row style={{ height: 36, marginLeft: 30, marginBottom: 25}}> 
                    <Text style={styles.textTitle}>Top5</Text>
                  </Row>
                  <Row>
                  <Content style={{paddingLeft:15, paddingRight:15 }}>
                    <List>
                      <ListItem thumbnail>
                          <Text style={styles.red}>1</Text>
                          <Left>
                            <Thumbnail square large source={{uri: hotelImage[0]}} style={styles.topThumb}/>
                          </Left>
                          <Body>
                            <Text>Hotel Name is Number 7</Text>
                            <Text note>This hotel is good</Text>
                            <View style={styles.ratingView}>
                              <View style={{ flex:0.5 }}>
                                <Rating
                                    onFinishRating={this.ratingCompleted}
                                    imageSize={20}
                                    ratingBackgroundColor={"#FFCE70"}
                                    fractions={1} 
                                    startingValue={5}
                                  /> 
                              </View>
                              <View style={{ flex:0.5 }}>
                                <Text style={styles.ratingText}>4.8</Text>
                              </View>
                            </View>
                          </Body>
                      </ListItem>
                      <ListItem thumbnail>
                        <Text style={styles.yellow}>2</Text>
                          <Left>
                            <Thumbnail square large source={{uri: hotelImage[0]}} style={styles.topThumb}/>
                          </Left>
                          <Body>
                            <Text>Hotel 2</Text>
                            <Text note>This hotel is good</Text>
                          </Body>  
                          <Text note>9.8/10</Text>
                      </ListItem>
                      <ListItem thumbnail>
                        <Text style={styles.green}>3</Text>
                          <Left>
                            <Thumbnail square large source={{uri: hotelImage[0]}} style={styles.topThumb}/>
                          </Left>
                          <Body>
                            <Text>Hotel 3</Text>
                            <Text note>This hotel is good</Text>
                          </Body>  
                          <Text note>9.7/10</Text>
                      </ListItem>
                      <ListItem thumbnail>
                        <Text style={styles.blue}>4</Text>
                          <Left>
                            <Thumbnail square large source={{uri: hotelImage[0]}} style={styles.topThumb}/>
                          </Left>
                          <Body>
                            <Text>Hotel 4</Text>
                            <Text note>This hotel is good</Text>
                          </Body>  
                          <Text note>9.6/10</Text>
                      </ListItem>
                      <ListItem thumbnail>
                        <Text style={styles.purple}>5</Text>
                          <Left>
                            <Thumbnail square large source={{uri: hotelImage[0]}} style={styles.topThumb}/>
                          </Left>
                          <Body>
                            <Text>Hotel 5</Text>
                            <Text note>This hotel is good</Text>
                          </Body>
                          <Text note>9.5/10</Text>
                      </ListItem>
                    </List>
                  </Content>
                </Row>
              </Grid>
                </SafeAreaView>
            </ScrollView>
          </Container>
        );
    }
}

// export const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "flex-start",
//     justifyContent: "flex-start",
//   },
//   scrollContainer: {
//     flex: 1,
//     height: 470,
//     justifyContent: "center",
//     marginTop:10,
//     paddingLeft: 25,
//   },
//   topListContainer: {
//     flex: 1,
//     marginTop:20,
//   },
//   imageView:{
//     margin:10 
//   },  
//   ImgBg: {
//     height:440,
//     borderRadius:12,
//     alignContent:"center",
//     overflow: "hidden",
//   },
//   textContainer: {
//     backgroundColor: "rgba(255,255,255, 0.6)",
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderRadius: 12,
//     width:"82%",
//     height: 125,
//     bottom: 25,
//     position: "absolute",
//     alignSelf: "center",
//   },
//   slideBt:{
//     backgroundColor: "transparent",
//     width: 96,
//     height: 50,
//     position:"absolute",
//     bottom:-15,
//     right:-15
//   },  
//   imageuser:{
//     width: 36, 
//     height: 36, 
//     borderRadius: 50
//   },
//   userInfo1:{
//     flex:1,
//     height: 40,
//     width:"25%",
//     maxWidth: 42,
//   },
//   userInfo2:{
//     height: 36,
//     alignSelf: "flex-start",
//     flex:1,
//     width:"75%",
//     overflow:"hidden",
//   },
//   userRows: {
//     width: "70%",
//     // paddingVertical: "center",
//     height:12,
//     flex:1,
//     maxWidth:100,
//   },
//   smallText: {
//     color: "#6e7174",
//     fontSize: 11,
//     lineHeight: 12,
//     textAlignVertical: "center"
//   },
//   nomalText: {
//     color: "#000",
//     fontSize: 14,
//     lineHeight: 15,
//     textAlignVertical: "top"
//   },
//   bigText: {
//     color: "#000",
//     fontSize: 20,
//     fontWeight: "bold",
//     height: 60,
//   },
//   normalDot: {
//     height: 8,
//     width: 8,
//     borderRadius: 4,
//     backgroundColor: "silver",
//     marginHorizontal: 4
//   },
//   textTitle: {
//     height: 33,
//     fontSize: 28,
//     fontWeight: "bold",
//     fontStyle: "normal",
//     letterSpacing: 0,
//     color: "#000000",
//     marginBottom:10,
//   },
//   titleLine1:{
//     width: 18,
//     height: 1,
//     borderBottomWidth:3,
//     borderStyle: "solid",
//     borderColor: "#FFCE70",
//     marginLeft: 30,
//     marginTop:50,
//   },
//   titleLine2:{
//     width: 18,
//     height: 1,
//     borderBottomWidth:3,
//     borderStyle: "solid",
//     borderColor: "#FFCE70",
//     marginLeft: 30,
//   },
//   topThumb:{
//     borderRadius: 12, width:76, height:76
//   },
//   ratingView:{
//     flexDirection: "row",
//     height: 20,
//     alignItems: "center",
//     marginLeft:10,
//     marginTop:10
//   },
//   ratingText:{
//     color:"#7a7a7a",
//     paddingTop:2
//   },
//   red:{ color:"red",
//   fontSize:18,
//   marginRight:10,
//   fontWeight:"bold",},
//   yellow:{ color:"orange",
//   fontSize:18,
//   marginRight:10,
//   fontWeight:"bold",},
//   green:{ color:"green",
//   fontSize:18,
//   marginRight:10,
//   fontWeight:"bold",},
//   blue:{ color:"blue",
//   fontSize:18,
//   marginRight:10,
//   fontWeight:"bold",},
//   purple:{ color:"purple",
//   fontSize:18,
//   marginRight:10,
//   fontWeight:"bold",},
//   activeIcon: {
//     borderColor: '#F2B04C',
//     borderWidth: 0,
//     borderTopWidth:3,
//   },
//   nomalIcon: {
//     borderColor: '#F2B04C',
//     borderWidth: 0,
//   }
// });