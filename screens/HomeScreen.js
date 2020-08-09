import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { useRef } from 'react';
import { Col, Row, Grid } from "react-native-easy-grid";
import Carousel from 'react-native-snap-carousel';
import { Image, Platform, StyleSheet, TouchableOpacity, View, SafeAreaView,
  ImageBackground,
  Animated,
  useWindowDimensions, 
  ImageBackgroundComponent,
  Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Text, Left, Body, Right, Thumbnail, Button, DeckSwiper } from 'native-base';
// import { MonoText } from '../components/StyledText';
// import { SwipeRow } from 'native-base-theme/components';

const hotelImeage = ["https://facebook.github.io/react-native/docs/assets/favicon.png"];
const pageWidth = Dimensions.get("window").width;

export default class HomeScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Item 1",
              username: "username 1",
              image:"https://cookieandkate.com/images/2018/09/crispy-fried-egg-recipe.jpg",
          },
          {
              title:"Item 2",
              username: "username 2",
              image:"https://inspiralized.com/wp-content/uploads/2014/04/IMG_9392-copy2.jpg",
          },
          {
              title:"Item 3",
              username: "username 3",
              image:"https://www.closetcooking.com/wp-content/uploads/2012/12/BaconJamBreakfastSandwichwithFriedEggandAvocado5009978.jpg",
          },
          {
              title:"Item 4",
              username: "username 4",
              image:"https://forktospoon.com/wp-content/uploads/2019/12/Depositphotos_201934504_s-2019-Copy.jpg",
          },
          {
              title:"Item 5",
              username: "username 5",
              image:"https://masonfit.com/wp-content/uploads/2018/12/healthy-southwest-sweet-potato-breakfast-hash.jpg",
          },
          {
            title:"Item 6",
            username: "username 6",
            image:"https://www.spoonforkbacon.com/wordpress/wp-content/uploads/2018/06/Chorizo_breakfast_tacos-800x1066.jpg",
        },
        ]
      }
    }

    // scrollX = useRef(new Animated.Value(0)).current;
    _renderItem({item,index,image,imageIndex}){
        return (
          <View
              key={imageIndex}
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
                        <Grid>
                        <Col>
                        <Image
                            source={require('../img/face.jpg')}
                            style={styles.imageuser}
                          />
                        </Col>
                        <Col>
                        <Row style={{ height: 14, marginTop: 7}}>
                          <Text style={styles.smallText}>
                            WRITER
                          </Text>
                        </Row>
                        <Row style={{ height: 16, width: "150%"}}>
                          <Text style={styles.nomalText}>
                          {item.username}
                          </Text>
                        </Row>
                        </Col>
                        <Col></Col>
                        <Col>
                          <Button style={styles.slideBt}>
                            <Image source={require('../img/moreBT.png')}
                            style={{ width: 96, height: 50 }}>
                            </Image>
                          </Button>
                        </Col>
                      </Grid>
                    </View>
            </ImageBackground>
          </View>
        )
    }

    render() {
        return (
          <Container>
            <ScrollView style={{flex:1}}>
              <SafeAreaView style={styles.container}>
              <Grid>
                  <Row style={styles.titleLine}></Row>
                  <Row style={{ height: 36, paddingLeft: 30}}>
                    <Text style={styles.textTitle}>News</Text>
                  </Row>
                  <Row>
                <View style={styles.scrollContainer}>
                    <Carousel
                      layout={"default"}
                      ref={ref => this.carousel = ref}
                      data={this.state.carouselItems}
                      sliderWidth={pageWidth}
                      itemWidth={300}
                      slideStyle={{flex:1}}
                      renderItem={this._renderItem}
                      onSnapToItem = { index => this.setState({activeIndex:index}) } />
                </View>
                </Row>
                </Grid>
              </SafeAreaView>
              <View style={styles.topListContainer}>
      <Grid>
        <Row style={styles.titleLine}></Row>
        <Row style={{ height: 36, paddingLeft: 30}}> 
          <Text style={styles.textTitle}>Top5</Text>
        </Row>
        <Row>
        <Content style={{paddingLeft:15, paddingRight:15 }}>
          <List>
            <ListItem>
                <Thumbnail square large source={{uri: hotelImeage[0]}} style={{borderRadius: 12}}/>
                <Body>
                  <Text>Hotel 1</Text>
                  <Text note>This hotel is good</Text>
                </Body>  
                <Text note>9.9/10</Text>
            </ListItem>
            <ListItem>
                <Thumbnail square large source={{uri: hotelImeage[0]}} style={{borderRadius: 12}}/>
                <Body>
                  <Text>Hotel 2</Text>
                  <Text note>This hotel is good</Text>
                </Body>  
                <Text note>9.8/10</Text>
            </ListItem>
            <ListItem>
                <Thumbnail square large source={{uri: hotelImeage[0]}} style={{borderRadius: 12}}/>
                <Body>
                  <Text>Hotel 3</Text>
                  <Text note>This hotel is good</Text>
                </Body>  
                <Text note>9.7/10</Text>
            </ListItem>
            <ListItem>
                <Thumbnail square large source={{uri: hotelImeage[0]}} style={{borderRadius: 12}}/>
                <Body>
                  <Text>Hotel 4</Text>
                  <Text note>This hotel is good</Text>
                </Body>  
                <Text note>9.6/10</Text>
            </ListItem>
            <ListItem>
                <Thumbnail square large source={{uri: hotelImeage[0]}} style={{borderRadius: 12}}/>
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
      </View>
            </ScrollView>
          </Container>
        );
    }
}

// HomeScreen.navigationOptions = {
//   header: false,
// };

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  scrollContainer: {
    flex: 1,
    height: 500,
    justifyContent: "center",
  },
  topListContainer: {
    flex: 1,
    marginTop:20,
    height: 650,
  },
  imageView:{
    margin:10 
  },  
  ImgBg: {
    height:460,
    borderRadius:15,
    alignContent:"center",
    overflow: "hidden",
  },
  imageuser:{
    width: 40, 
    height: 40, 
    borderRadius: 50
  },
  textContainer: {
    backgroundColor: "rgba(255,255,255, 0.55)",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 12,
    width:"80%",
    height: 125,
    bottom: 25,
    position: "absolute"
  },
  smallText: {
    color: "#6e7174",
    fontSize: 11,
    lineHeight: 12,
    marginLeft: -10,
  },
  nomalText: {
    color: "#000",
    fontSize: 14,
    lineHeight: 15,
    marginLeft: -10,
  },
  bigText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "silver",
    marginHorizontal: 4
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  textTitle: {
    height: 33,
    fontSize: 28,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#000000"
  },
  titleLine:{
    width: 18,
    height: 1,
    borderBottomWidth:3,
    borderStyle: "solid",
    borderColor: "#f7b500",
    marginLeft: 30,
    marginTop: 30
  },
  slideBt:{
    backgroundColor: "transparent",
    color: "transparent",
    width: 96,
    height: 50,
    position:"absolute",
    bottom:-20,
    right:-40.
  },
});