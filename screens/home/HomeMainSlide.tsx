// import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {Col, Grid, Row} from "react-native-easy-grid";
import Carousel from 'react-native-snap-carousel';
import {Dimensions, Image, ImageBackground, View} from 'react-native';
import {Button, Text} from 'native-base';
import getCommonStyle from '../../styles/CommonStyles';
import getStyleSheet from '../../styles/HomeStyles';

const hotelImage = ["https://cookieandkate.com/images/2018/09/crispy-fried-egg-recipe.jpg"];
const pageWidth = Dimensions.get("window").width;

const commonstyle = getCommonStyle();
const styles = getStyleSheet();



const HomeMainSlide = (props) => {
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
                    flex:1
                }}>
                <ImageBackground source={{uri: item.image}} style={styles.ImgBg}>
                    <View style={styles.textContainer}>
                        <Grid>
                            <Row>
                                <Text style={commonstyle.bigText}>
                                    {item.title}
                                </Text>
                            </Row>
                        </Grid>
                        <Grid style={{position: "relative", paddingTop: 20}}>
                            <Col style={styles.userInfo1}>
                                <Image
                                    source={require('../../img/face.jpg')}
                                    style={styles.imageuser}
                                />
                            </Col>
                            <Col style={styles.userInfo2}>
                                <Row style={styles.userRows}>
                                    <Text style={commonstyle.smallText}>
                                        WRITER
                                    </Text>
                                </Row>
                                <Row style={styles.userRows}>
                                    <Text style={commonstyle.nomalText}>
                                        {item.username}
                                    </Text>
                                </Row>
                            </Col>
                        </Grid>
                        <Button style={styles.slideBt}>
                            <Image source={require('../../img/moreBT.png')}
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
            <Grid>
                <Row style={commonstyle.titleLine1}></Row>
                <Row style={{height: 36, marginLeft: 30, marginBottom: 25}}>
                    <Text style={commonstyle.textTitle}>News</Text>
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
    );
};

export default HomeMainSlide;