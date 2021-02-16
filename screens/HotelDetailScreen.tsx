import * as React from 'react';
import axios from 'axios';
import {Col, Row, Grid} from "react-native-easy-grid";
import Carousel from 'react-native-snap-carousel';
import {Image, StyleSheet, View, SafeAreaView, ImageBackground, Dimensions, ScrollView} from 'react-native';
import {Container, Content, List, ListItem, Text, Left, Body, Right, Thumbnail, Button} from 'native-base';
import {Rating, AirbnbRating} from 'react-native-ratings';
import getStyleSheet from '../styles/HomeStyles';
import {useEffect, useState} from "react";
const styles = getStyleSheet();

const HotelDetailScreen = (props:any) => {

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

                        </Row>
                    </Grid>

                </SafeAreaView>
            </ScrollView>
        </Container>
    );
};

export default HomeScreen;