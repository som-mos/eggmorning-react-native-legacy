import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Image, Platform, StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import { Input, Container, Header, Left, Body, Right, Button, Icon, Form, Label, Item} from 'native-base';
import SomRadioButton from '../components/SomRadioButton';
import {useRecoilState, atom} from 'recoil';
import {userState} from '../recoil-state'
import getCommonStyle from '../styles/CommonStyles';
import getStyleSheet from '../styles/SignStyles';

const genderList = [
    {
        key: 'Male',
        text: 'Male',
        name: 'male',
    },
    {
        key: 'Female',
        text: 'Female',
        name: 'female',
    },
    {
        key: 'None',
        text: 'None',
        name: 'none',
    },
];

const commonstyle = getCommonStyle();
const screenType = 'signup';
const styles = getStyleSheet(screenType);

export default function signUpScreen({navigation}) {

    
    const [userSignUp, setUserSignUp] = useState (
        { id: '', nickname: '', password:'', passwordchk:'', phone: '', gender:'' }
    );
    const {genderState} = userState;
    const [genderValue, setGenderValue] = useRecoilState(genderState);

    useEffect(()=>{
        setUserSignUp({...userSignUp, gender:genderValue})
    }, [genderValue]);

    useEffect(()=>{
        console.log("userSignUp - ", userSignUp)
    }, [userSignUp]);

    const handleChange = (event) => {
        setUserSignUp({...userSignUp, [event.target.name]: event.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://54.180.155.194:8000/eggmorning/user', userSignUp)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log({userSignUp});
    };

    return (
        <Container>
            <View style={styles.container}>
                <Header transparent>
                    <Left>
                        <Button transparent
                                onPress={() =>
                                    navigation.goBack()
                                }>
                            <Icon type="Feather" name="arrow-left" style={{color:"#ffffff"}}/>
                        </Button>
                    </Left>
                    <Body>
                    </Body>
                    <Right />
                </Header>
                <View style={styles.SignInBottomContainer}>
                    <View style={[styles.codeHighlightContainer, styles.signUpScreenFilename]}>
                        <Text style={styles.SignInText}>Sign Up</Text>
                    </View>
                    <Form onSubmit={handleSubmit}>
                        <Item floatingLabel>
                            <Label htmlFor="id" style={styles.labelSt}>E-mail (ID)</Label>
                            <Input type="text" name="id" value={userSignUp.id} onChange={handleChange} required />
                            {/* <Icon name='close-circle' /> */}
                        </Item>
                        <Item floatingLabel>
                            <Label htmlFor="nickname" style={styles.labelSt}>Nickname</Label>
                            <Input type="text" name="nickname" value={userSignUp.name} onChange={handleChange} required/>
                            {/* <Icon name='close-circle' /> */}
                        </Item>
                        <Item floatingLabel>
                            <Label htmlFor="password" style={styles.labelSt}>Password</Label>
                            <Input type="password" name="password" value={userSignUp.password} onChange={handleChange} required/>
                            {/* <Icon name='close-circle' /> */}
                        </Item>
                        <Item floatingLabel>
                            <Label htmlFor="passwordchk" style={styles.labelSt}>Check Password</Label>
                            <Input type="password" name="passwordchk" value={userSignUp.passwordchk} onChange={handleChange} required/>
                        </Item>
                        <Item floatingLabel>
                            <Label htmlFor="phone" style={styles.labelSt}>Phone</Label>
                            <Input type="text" name="phone" value={userSignUp.phone} onChange={handleChange} required/>
                            {/* <Icon name='close-circle' /> */}
                        </Item>
                        {/* <Icon name='close-circle' /> */}
                        <View style={styles.radioBt}>
                            <Text style={styles.titleSt}>Gender</Text>
                            <SomRadioButton dataList={genderList} recoilState={ genderState }/>
                        </View>


                        <View style={{flex:1}}>
                            <TouchableOpacity
                                onPress={handleSubmit}
                                style={styles.signupBt} >
                                <Text style={styles.signupBtTxt}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>

                    </Form>
                </View>
            </View>
        </Container>
    );
}

signUpScreen.navigationOptions = {
    header: null,
};
