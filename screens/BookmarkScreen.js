import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import axios from 'axios';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Image, StyleSheet, View, SafeAreaView, ImageBackground, ScrollView} from 'react-native';
import { Container, Content, List, ListItem, Text, Left, Body, Right, Thumbnail, Button } from 'native-base';
import { Rating, AirbnbRating } from 'react-native-ratings';
import getCommonStyle from '../styles/CommonStyles';
import getStyleSheet from '../styles/BookMarkStyles';

const commonstyle = getCommonStyle();
const styles = getStyleSheet();

const hotelImeage = ["https://cookieandkate.com/images/2018/09/crispy-fried-egg-recipe.jpg"];
// ListItem 부분 map 또는 컴포넌트로 리팩토링 진행해야함!

export default class BookmarkScreen extends React.Component{
ratingCompleted(rating) {
  console.log("Rating is: " + rating)
}


    render() {
        return (
          <Container>
            <ScrollView>
              <SafeAreaView style={commonstyle.container}>
              <Grid>
                  <Row style={commonstyle.titleLine1}></Row>
                  <Row style={{ height: 36, marginLeft: 30, marginBottom: 25}}>
                    <Text style={commonstyle.textTitle}>Bookmark</Text>
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