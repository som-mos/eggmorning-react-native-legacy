import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { useRef } from 'react';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Image, Platform, StyleSheet, TouchableOpacity, View, SafeAreaView,
  ImageBackground,
  Animated,
  useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Text } from 'native-base';
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

export default function HomeScreen() {
  const scrollX = useRef(new Animated.Value(0)).current;

  const { width: windowWidth } = useWindowDimensions();

  return (
    <Container>
    <SafeAreaView style={styles.container}>
      <Grid>
        <Row style={{ height: 24, paddingLeft: 30 }}>
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
                      <Text style={styles.infoText}>
                        {"Image - " + imageIndex}
                      </Text>
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
    justifyContent: "center"
  },
  scrollContainer: {
    height: 450,
    alignItems: "center",
    justifyContent: "center",
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
  infoText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold"
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
  }
});
