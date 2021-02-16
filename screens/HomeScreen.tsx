// import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import axios from 'axios';
import {Col, Row, Grid} from "react-native-easy-grid";
import Carousel from 'react-native-snap-carousel';
import {Image, StyleSheet, View, SafeAreaView, ImageBackground, Dimensions, ScrollView} from 'react-native';
import {Container, Content, List, ListItem, Text, Left, Body, Right, Thumbnail, Button} from 'native-base';
import {Rating, AirbnbRating} from 'react-native-ratings';
import getStyleSheet from '../styles/HomeStyles';
import {useEffect, useState} from "react";

const hotelImage = ["https://cookieandkate.com/images/2018/09/crispy-fried-egg-recipe.jpg"];
const pageWidth = Dimensions.get("window").width;

const styles = getStyleSheet();

const HomeScreen = (props) => {

    const [activeIndex, setActiveIndex] = useState([]);
    const [carouselItems, setCarouselItems] = useState([]);

    const getSlides = async () => {
        const {
            data: {result},
        } = await axios.get("http://54.180.155.194:8000/eggmorning/main/slide");
        setCarouselItems(result);
    };

    useEffect(() => {
        getSlides()
    }, []);


    const ratingCompleted = (rating) => {
        console.log("Rating is: " + rating)
    };

    const _renderItem = ({index, item}) => {
        return (
            <View
                key={index}
                style={{
                    borderRadius: 15,
                    height: 520,
                    padding: 5,
                    marginLeft: 0,
                    marginRight: 0,
                }}>
                <ImageBackground source={{uri: item.image}} style={styles.ImgBg}>
                    <View style={styles.textContainer}>
                        <Grid>
                            <Row>
                                <Text style={styles.bigText}>
                                    {item.title}
                                </Text>
                            </Row>
                        </Grid>
                        <Grid style={{position: "relative", paddingTop: 20}}>
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
                                   style={{width: 96, height: 50}}>
                            </Image>
                        </Button>

                    </View>
                </ImageBackground>
            </View>
        );
    };

    // @ts-ignore
    return (
        <Container>
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    <Grid>
                        <Row style={styles.titleLine1}></Row>
                        <Row style={{height: 36, marginLeft: 30, marginBottom: 25}}>
                            <Text style={styles.textTitle}>News</Text>
                        </Row>
                        <Row>
                            <View style={styles.scrollContainer}>
                                <Carousel
                                    layout={"default"}
                                    loop={false}
                                    autoplay={true}
                                    data={carouselItems}
                                    sliderWidth={pageWidth}
                                    itemWidth={pageWidth - 70}
                                    slideStyle={{flex: 1}}
                                    renderItem={_renderItem}
                                    onSnapToItem={index => setActiveIndex(index)}
                                    activeSlideAlignment={'start'}/>
                            </View>
                        </Row>
                    </Grid>
                    <Grid style={{marginBottom: 25, marginTop: 25}}>
                        <Row style={styles.titleLine2}></Row>
                        <Row style={{height: 36, marginLeft: 30, marginBottom: 25}}>
                            <Text style={styles.textTitle}>Top5</Text>
                        </Row>
                        <Row style={{height: 36, marginLeft: 30, marginBottom: 25}}>
                            <Text>test</Text>
                            <Content style={{height: 36, paddingLeft: 15, paddingRight: 15}}>
                                <Text>test</Text>
                                <List>
                                    <ListItem thumbnail>
                                        <Text style={styles.red}>1</Text>
                                        <Left>
                                            <Thumbnail square large source={{uri: hotelImage[0]}}
                                                       style={styles.topThumb}/>
                                        </Left>
                                        <Body>
                                            <Text>Hotel Name is Number 7</Text>
                                            <Text note>This hotel is good</Text>
                                            <View style={styles.ratingView}>
                                                <View style={{flex: 0.5}}>
                                                    <Rating
                                                        onFinishRating={ratingCompleted}
                                                        imageSize={20}
                                                        ratingBackgroundColor={"#FFCE70"}
                                                        fractions={1}
                                                        startingValue={5}
                                                    />
                                                </View>
                                                <View style={{flex: 0.5}}>
                                                    <Text style={styles.ratingText}>4.8</Text>
                                                </View>
                                            </View>
                                        </Body>
                                    </ListItem>
                                    <ListItem thumbnail>
                                        <Text style={styles.yellow}>2</Text>
                                        <Left>
                                            <Thumbnail square large source={{uri: hotelImage[0]}}
                                                       style={styles.topThumb}/>
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
                                            <Thumbnail square large source={{uri: hotelImage[0]}}
                                                       style={styles.topThumb}/>
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
                                            <Thumbnail square large source={{uri: hotelImage[0]}}
                                                       style={styles.topThumb}/>
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
                                            <Thumbnail square large source={{uri: hotelImage[0]}}
                                                       style={styles.topThumb}/>
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
};

export default HomeScreen;