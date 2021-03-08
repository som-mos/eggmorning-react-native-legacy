// import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import {Grid, Row} from "react-native-easy-grid";
import {Dimensions, View} from 'react-native';
import {Body, Content, Left, List, ListItem, Text, Thumbnail} from 'native-base';
import {Rating} from 'react-native-ratings';
import getCommonStyle from '../../styles/CommonStyles';
import getStyleSheet from '../../styles/HomeStyles';

const hotelImage = ["https://cookieandkate.com/images/2018/09/crispy-fried-egg-recipe.jpg"];

const commonStyle = getCommonStyle();
const styles = getStyleSheet();



const HomeTop5Part = (props) => {
    const ratingCompleted = (rating) => {
        console.log("Rating is: " + rating)
    };

    return (
            <Grid style={{marginBottom: 25, marginTop: 25}}>
                <Row style={commonStyle.titleLine2}></Row>
                <Row style={{height: 36, marginLeft: 30, marginBottom: 25}}>
                    <Text style={commonStyle.textTitle}>Top5</Text>
                </Row>
                <Row style={{marginLeft: 30, marginBottom: 25}}>
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
    );
};

export default HomeTop5Part;