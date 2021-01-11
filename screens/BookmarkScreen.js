// import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import axios from 'axios';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Image, StyleSheet, View, SafeAreaView, ImageBackground, Dimensions, ScrollView} from 'react-native';
import { Container, Content, List, ListItem, Text, Left, Body, Right, Thumbnail, Button } from 'native-base';
import { Rating, AirbnbRating } from 'react-native-ratings';


const hotelImeage = ["https://cookieandkate.com/images/2018/09/crispy-fried-egg-recipe.jpg"];
const pageWidth = Dimensions.get("window").width;
// ListItem 부분 map 또는 컴포넌트로 리팩토링 진행해야함!

export default class BookmarkScreen extends React.Component{
  // constructor(props) {
  //     super(props);

  //      this.state = {
  //       item: [],
  //       };
  // }
     
    // getThumbnails = async () => {
    //   const {
    //     data: { result },
    //   } = await axios.get("http://54.180.155.194:8000/eggmorning/main/slide");
    //   this.setState({ item: result });
    // };
    
    // componentWillMount() {
    //   axios.get("http://54.180.155.194:8000/eggmorning/main/slide").then(res => {
    //     this.setState({item: res.data });
    //   })
    // } 

ratingCompleted(rating) {
  console.log("Rating is: " + rating)
}


    render() {
        return (
          <Container>
            <ScrollView>
              <SafeAreaView style={styles.container}>
              <Grid>
                  <Row style={styles.titleLine1}></Row>
                  <Row style={{ height: 36, marginLeft: 30, marginBottom: 25}}>
                    <Text style={styles.textTitle}>Bookmark</Text>
                  </Row>
                  <Row>
                  <Content style={{paddingLeft:15, paddingRight:15 }}>
                    <List>
                      <ListItem noBorder={true} style={styles.listItem}>
                          <Thumbnail square large source={{uri: hotelImeage[0]}} style={styles.topThumb}/>
                          <Body style={{ paddingLeft:5}}>
                            <Text style={styles.listTitle}>홍대 ART HOTEL</Text>
                            <Text style={styles.listText}>서울특별시 마포구 합정동 2-155</Text>
                            <View style={styles.ratingView}>
                              <View style={{ flex:0.5 }}>
                                <Rating
                                    onFinishRating={this.ratingCompleted}
                                    imageSize={14}
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
                      <ListItem noBorder={true} style={styles.listItem}>
                          <Thumbnail square large source={{uri: hotelImeage[0]}} style={styles.topThumb}/>
                          <Body style={{ paddingLeft:5}}>
                            <Text style={styles.listTitle}>홍대 ART HOTEL</Text>
                            <Text style={styles.listText}>서울특별시 마포구 합정동 2-155</Text>
                            <View style={styles.ratingView}>
                              <View style={{ flex:0.5 }}>
                                <Rating
                                    onFinishRating={this.ratingCompleted}
                                    imageSize={14}
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
                      <ListItem noBorder={true} style={styles.listItem}>
                          <Thumbnail square large source={{uri: hotelImeage[0]}} style={styles.topThumb}/>
                          <Body style={{ paddingLeft:5}}>
                            <Text style={styles.listTitle}>홍대 ART HOTEL</Text>
                            <Text style={styles.listText}>서울특별시 마포구 합정동 2-155</Text>
                            <View style={styles.ratingView}>
                              <View style={{ flex:0.5 }}>
                                <Rating
                                    onFinishRating={this.ratingCompleted}
                                    imageSize={14}
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
                      <ListItem noBorder={true} style={styles.listItem}>
                          <Thumbnail square large source={{uri: hotelImeage[0]}} style={styles.topThumb}/>
                          <Body style={{ paddingLeft:5}}>
                            <Text style={styles.listTitle}>홍대 ART HOTEL</Text>
                            <Text style={styles.listText}>서울특별시 마포구 합정동 2-155</Text>
                            <View style={styles.ratingView}>
                              <View style={{ flex:0.5 }}>
                                <Rating
                                    onFinishRating={this.ratingCompleted}
                                    imageSize={14}
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
                      <ListItem noBorder={true} style={styles.listItem}>
                          <Thumbnail square large source={{uri: hotelImeage[0]}} style={styles.topThumb}/>
                          <Body style={{ paddingLeft:5}}>
                            <Text style={styles.listTitle}>홍대 ART HOTEL</Text>
                            <Text style={styles.listText}>서울특별시 마포구 합정동 2-155</Text>
                            <View style={styles.ratingView}>
                              <View style={{ flex:0.5 }}>
                                <Rating
                                    onFinishRating={this.ratingCompleted}
                                    imageSize={14}
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
                      <ListItem noBorder={true} style={styles.listItem}>
                          <Thumbnail square large source={{uri: hotelImeage[0]}} style={styles.topThumb}/>
                          <Body style={{ paddingLeft:5}}>
                            <Text style={styles.listTitle}>홍대 ART HOTEL</Text>
                            <Text style={styles.listText}>서울특별시 마포구 합정동 2-155</Text>
                            <View style={styles.ratingView}>
                              <View style={{ flex:0.5 }}>
                                <Rating
                                    onFinishRating={this.ratingCompleted}
                                    imageSize={14}
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
                      <ListItem noBorder={true} style={styles.listItem}>
                          <Thumbnail square large source={{uri: hotelImeage[0]}} style={styles.topThumb}/>
                          <Body style={{ paddingLeft:5}}>
                            <Text style={styles.listTitle}>홍대 ART HOTEL</Text>
                            <Text style={styles.listText}>서울특별시 마포구 합정동 2-155</Text>
                            <View style={styles.ratingView}>
                              <View style={{ flex:0.5 }}>
                                <Rating
                                    onFinishRating={this.ratingCompleted}
                                    imageSize={14}
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
                      <ListItem noBorder={true} style={styles.listItem}>
                          <Thumbnail square large source={{uri: hotelImeage[0]}} style={styles.topThumb}/>
                          <Body style={{ paddingLeft:5}}>
                            <Text style={styles.listTitle}>홍대 ART HOTEL</Text>
                            <Text style={styles.listText}>서울특별시 마포구 합정동 2-155</Text>
                            <View style={styles.ratingView}>
                              <View style={{ flex:0.5 }}>
                                <Rating
                                    onFinishRating={this.ratingCompleted}
                                    imageSize={14}
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
                      <ListItem noBorder={true} style={styles.listItem}>
                          <Thumbnail square large source={{uri: hotelImeage[0]}} style={styles.topThumb}/>
                          <Body style={{ paddingLeft:5}}>
                            <Text style={styles.listTitle}>홍대 ART HOTEL</Text>
                            <Text style={styles.listText}>서울특별시 마포구 합정동 2-155</Text>
                            <View style={styles.ratingView}>
                              <View style={{ flex:0.5 }}>
                                <Rating
                                    onFinishRating={this.ratingCompleted}
                                    imageSize={14}
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
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  scrollContainer: {
    flex: 1,
    height: 470,
    justifyContent: "center",
    marginTop:10,
    paddingLeft: 25,
  },
  topListContainer: {
    flex: 1,
    marginTop:20,
  },
  imageView:{
    margin:10 
  },  
  ImgBg: {
    height:440,
    borderRadius:12,
    alignContent:"center",
    overflow: "hidden",
  },
  textContainer: {
    backgroundColor: "rgba(255,255,255, 0.6)",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    width:"82%",
    height: 125,
    bottom: 25,
    position: "absolute",
    alignSelf: "center",
  },
  imageuser:{
    width: 36, 
    height: 36, 
    borderRadius: 50
  },
  userInfo1:{
    flex:1,
    height: 40,
    width:"25%",
    maxWidth: 42,
  },
  userInfo2:{
    height: 36,
    alignSelf: "flex-start",
    flex:1,
    width:"75%",
    overflow:"hidden",
  },
  userRows: {
    width: "70%",
    // paddingVertical: "center",
    height:12,
    flex:1,
    maxWidth:100,
  },
  smallText: {
    color: "#6e7174",
    fontSize: 11,
    lineHeight: 12,
    textAlignVertical: "center"
  },
  nomalText: {
    color: "#000",
    fontSize: 14,
    lineHeight: 15,
    textAlignVertical: "top"
  },
  bigText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    height: 60,
  },
  textTitle: {
    height: 33,
    fontSize: 28,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#000000",
    marginBottom:10,
  },
  listTitle:{
    fontSize: 18,
    fontWeight: 600,
    letterSpacing: 0,
    color: "#000000",
    // marginBottom:10,
  },
  listText:{
    fontSize: 14,
    fontWeight: 400,
    letterSpacing: 0,
    color: "#7A7A7A",
  },
  titleLine1:{
    width: 18,
    height: 1,
    borderBottomWidth:3,
    borderStyle: "solid",
    borderColor: "#FFCE70",
    marginLeft: 30,
    marginTop:50,
  },
  titleLine2:{
    width: 18,
    height: 1,
    borderBottomWidth:3,
    borderStyle: "solid",
    borderColor: "#FFCE70",
    marginLeft: 30,
  },
  topThumb:{
    borderRadius: 12, width:76, height:76
  },
  ratingView:{
    flexDirection: "row",
    height: 12,
    alignSelf:"baseline",
    marginLeft:20,
    marginTop:10
  },
  ratingText:{
    color:"#7a7a7a",
    paddingTop:2,
    fontSize:12,
    // marginLeft:-2.5,
  },
  activeIcon: {
    borderColor: '#F2B04C',
    borderWidth: 0,
    borderTopWidth:3,
  },
  nomalIcon: {
    borderColor: '#F2B04C',
    borderWidth: 0,
  },
  listItem:{
    paddingTop:15,
    paddingBottom:15,
    width:'100%',

  }
});