import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { useRef } from 'react';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Image, Platform, StyleSheet, TouchableOpacity, View, SafeAreaView,
  ImageBackground,
  Animated,
  useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Text, Left, Body, Right, Thumbnail } from 'native-base';
// import { MonoText } from '../components/StyledText';
// import { SwipeRow } from 'native-base-theme/components';

const images = [
  "https://cookieandkate.com/images/2018/09/crispy-fried-egg-recipe.jpg",
  "https://inspiralized.com/wp-content/uploads/2014/04/IMG_9392-copy2.jpg",
  "https://www.closetcooking.com/wp-content/uploads/2012/12/BaconJamBreakfastSandwichwithFriedEggandAvocado5009978.jpg",
  "https://forktospoon.com/wp-content/uploads/2019/12/Depositphotos_201934504_s-2019-Copy.jpg",
  "https://masonfit.com/wp-content/uploads/2018/12/healthy-southwest-sweet-potato-breakfast-hash.jpg",
  "https://www.spoonforkbacon.com/wordpress/wp-content/uploads/2018/06/Chorizo_breakfast_tacos-800x1066.jpg"
];

const hotelImeage = ["https://facebook.github.io/react-native/docs/assets/favicon.png"];

export default function HomeScreen() {
  const scrollX = useRef(new Animated.Value(0)).current;

  const { width: windowWidth } = useWindowDimensions();

  return (
    <Container>
      <ScrollView>
    <SafeAreaView style={styles.container}>
      <Grid>
        <Row style={{ height: 48, paddingLeft: 30, paddingTop:20 }}>
          <Text style={styles.textTitle}>News</Text>
        </Row>
        <Row>
        <View style={styles.scrollContainer}>
          <ScrollView
            horizontal={true}
            style={styles.scrollViewStyle}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX
                  }
                }
              }
            ])}
            scrollEventThrottle={1}
          >
            {images.map((image, imageIndex) => {
              return (
                <View
                  style={{ width: windowWidth - 20, height: 428, margin: 10 }}
                  key={imageIndex}
                >
                  <ImageBackground source={{ uri: image }} style={styles.card}>
                    <View style={styles.textContainer}>
                      <Grid>
                        <Row>
                          <Text style={styles.bigText}>
                          Title Text
                          </Text>
                        </Row>
                        <Col>
                        <Image
                            source={require('../img/face.jpg')}
                            style={{ width: 40, height: 40 }}
                          />
                        </Col>
                        <Col>
                        <Row>
                          <Text style={styles.smallText}>
                          WRITER
                          </Text>
                        </Row>
                        <Row>
                          <Text style={styles.nomalText}>
                          ASHA LEE
                          </Text>
                        </Row>
                        </Col>
                      </Grid>
                    </View>
                  </ImageBackground>
                </View>
              );
            })}
          </ScrollView>
          <View style={styles.indicatorContainer}>
            {images.map((image, imageIndex) => {
              const width = scrollX.interpolate({
                inputRange: [
                  windowWidth * (imageIndex - 1),
                  windowWidth * imageIndex,
                  windowWidth * (imageIndex + 1)
                ],
                outputRange: [8, 16, 8],
                extrapolate: "clamp"
              });
              return (
                <Animated.View
                  key={imageIndex}
                  style={[styles.normalDot, { width }]}
                />
              );
            })}
          </View>
        </View>
        </Row>
      </Grid>
    </SafeAreaView>
    <View style={styles.topListContainer}>
      <Grid>
        <Row style={{ height: 48, paddingLeft: 30, paddingTop:20 }}> 
          <Text style={styles.textTitle}>Top5</Text>
        </Row>
        <Row>
        <Content style={{paddingLeft:15, paddingRight:15 }}>
          <List>
            <ListItem>
                <Thumbnail square small source={{uri: hotelImeage[0]}}/>
                <Body>
                  <Text>Hotel 1</Text>
                  <Text note>This hotel is good</Text>
                </Body>  
                <Text note>9.9/10</Text>
            </ListItem>
            <ListItem>
                <Thumbnail square small source={{uri: hotelImeage[0]}}/>
                <Body>
                  <Text>Hotel 2</Text>
                  <Text note>This hotel is good</Text>
                </Body>  
                <Text note>9.8/10</Text>
            </ListItem>
            <ListItem>
                <Thumbnail square small source={{uri: hotelImeage[0]}}/>
                <Body>
                  <Text>Hotel 3</Text>
                  <Text note>This hotel is good</Text>
                </Body>  
                <Text note>9.7/10</Text>
            </ListItem>
            <ListItem>
                <Thumbnail square small source={{uri: hotelImeage[0]}}/>
                <Body>
                  <Text>Hotel 4</Text>
                  <Text note>This hotel is good</Text>
                </Body>  
                <Text note>9.6/10</Text>
            </ListItem>
            <ListItem>
                <Thumbnail square small source={{uri: hotelImeage[0]}}/>
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

// HomeScreen.navigationOptions = {
//   header: false,
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    height: 450,
    alignItems: "center",
    justifyContent: "center",
  },
  topListContainer: {
    flex: 1,
    marginTop:50,
    width:"100%",
    height: 400,
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 15,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center"
  },
  textContainer: {
    backgroundColor: "rgba(255,255,255, 0.4)",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 15,
    width:"85%",
    height: 115,
    bottom: 25,
    position: "absolute"
  },
  smallText: {
    color: "#888888",
    fontSize: 14,
  },
  nomalText: {
    color: "#000",
    fontSize: 16,
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
    fontSize: 24,
    fontWeight: "bold"
  },
});
