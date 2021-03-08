// import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import {Dimensions,  SafeAreaView, ScrollView} from 'react-native';
import {Container, Header, Content, Text} from 'native-base';
import getCommonStyle from '../../styles/CommonStyles';
import getStyleSheet from '../../styles/HomeStyles';
import HomeMainSlide from "./HomeMainSlide";
import HomeTop5Part from "./HomeTop5Part";

const hotelImage = ["https://cookieandkate.com/images/2018/09/crispy-fried-egg-recipe.jpg"];
const pageWidth = Dimensions.get("window").width;

const commonStyle = getCommonStyle();
const styles = getStyleSheet();



const HomeScreen = (props) => {
    const ratingCompleted = (rating) => {
        console.log("Rating is: " + rating)
    };


    // @ts-ignore
    return (
        <Container>
            <ScrollView>
                <SafeAreaView style={commonStyle.container}>
                    <HomeMainSlide/>
                    <HomeTop5Part/>
                </SafeAreaView>
            </ScrollView>
        </Container>
    );
};

export default HomeScreen;