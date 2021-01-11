// import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import axios from 'axios';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Image, StyleSheet, View, SafeAreaView, ImageBackground, Dimensions, ScrollView} from 'react-native';
import { Container, Content, List, ListItem, Text, Left, Body, Right, Thumbnail, Button } from 'native-base';
import { Rating, AirbnbRating } from 'react-native-ratings';

const hotelImeage = ["https://cookieandkate.com/images/2018/09/crispy-fried-egg-recipe.jpg"];
const pageWidth = Dimensions.get("window").width;

export default class BookmarkScreen extends React.Component{
state = {
  items: [],
};

  componentDidMount() {
    this._asyncRequest = loadMyAsyncData().then(
      items => {
        this._asyncRequest = [];
        this.setState({items});
      }
    );
  }


    // axios.get("http://54.180.155.194:8000/eggmorning/main/slide").then(res => {
    //   this.setState({items: res.data});
    // });
  

componentWillUnmount() {
  if (this._asyncRequest) {
    this._asyncRequest.cancel();
  }
}

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
              <ItemList items={this.state.item} />
            </Content>
          </Row>
          </Grid>
        </SafeAreaView>
      </ScrollView>
    </Container>
     
    )
  }
}
function ItemList({ items = [] }) {
        return (
                <List>
                    {items.map(item => 
                          <ListItem
                            noBorder={true}
                            key={item.id}
                            >
                            <Thumbnail square large source={{uri: item.image }} style={styles.topThumb}/>
                            <Body>
                              <Text>Hotel 1</Text>
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
                      )}
                </List>
        );
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
  slideBt:{
    backgroundColor: "transparent",
    width: 96,
    height: 50,
    position:"absolute",
    bottom:-15,
    right:-15
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
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "silver",
    marginHorizontal: 4
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
    height: 20,
    alignItems: "center",
    marginLeft:10,
    marginTop:10
  },
  ratingText:{
    color:"#7a7a7a",
    paddingTop:2
  },
  red:{ color:"red",
  fontSize:18,
  marginRight:10,
  fontWeight:"bold",},
  yellow:{ color:"orange",
  fontSize:18,
  marginRight:10,
  fontWeight:"bold",},
  green:{ color:"green",
  fontSize:18,
  marginRight:10,
  fontWeight:"bold",},
  blue:{ color:"blue",
  fontSize:18,
  marginRight:10,
  fontWeight:"bold",},
  purple:{ color:"purple",
  fontSize:18,
  marginRight:10,
  fontWeight:"bold",},
  activeIcon: {
    borderColor: '#F2B04C',
    borderWidth: 0,
    borderTopWidth:3,
  },
  nomalIcon: {
    borderColor: '#F2B04C',
    borderWidth: 0,
  }
});