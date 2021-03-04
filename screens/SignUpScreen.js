import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Image, Platform, StyleSheet, Text, View, TouchableOpacity, TextInput  } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Label, Item} from 'native-base';
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

const [userSignUp, setUserSignUp] = React.useState (
    { id: '', nickname: '', password:'', passwordchk:'', phone: '', gender:'' }
);


useEffect(() => {
    setUserSignUp({...userSignUp})
    console.log("userSignUp - ", userSignUp)
}, [])



// const handleEdit = (event) => {
//         setUserSignUp({...userSignUp, [event.target.name]: event.target.value})
//         console.log("userSignUp - ", userSignUp)
//     };
    
    const {genderState} = userState;
    const [genderValue, setGenderValue] = useRecoilState(genderState);
    
    useEffect(()=>{
        setUserSignUp({...userSignUp, gender:genderValue})
    }, [genderValue]);

    console.log("userSignUp - ", userSignUp);

    
    // useEffect((event)=>{
    //     setUserSignUp({...userSignUp, [event['name']]: event['value']})   
    //     console.log("userSignUp - ", userSignUp)
    // }, [userSignUp]);
    


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
            <View style={commonstyle.backgroundColorContainer}>
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
                <View style={styles.signInBottomContainer}>
                    <View style={[styles.codeHighlightContainer, styles.signUpScreenFilename]}>
                        <Text style={styles.signInText}>Sign Up</Text>
                    </View>
                        <View>
                            <Label style={styles.labelSt}>E-mail (ID)</Label>
                            <TextInput
                                style={{width:"100%"}}
                                borderBottomWidth="1px"
                                textContentType="emailAddress"
                                name="id" 
                                onChangeText={(text) => setUserSignUp({...userSignUp, id: text})}
                                // value={userSignUp.id}
                                // onChange={handleChange}
                                />
                        </View>
                        <View>
                            <Label style={styles.labelSt}>Nickname</Label>
                            <TextInput
                                style={{width:"100%"}} 
                                textContentType="nickname"
                                name="nickname"
                                onChangeText={(text) => setUserSignUp({...userSignUp, nickname: text})}
                                // value={userSignUp.nickname}
                                // onChange={handleChange}
                                />
                        </View>
                        <View>
                            <Label style={styles.labelSt}>Password</Label>
                            <TextInput
                                style={{width:"100%"}} 
                                secureTextEntry={true}
                                textContentType="password"
                                name="password"
                                onChangeText={(text) => setUserSignUp({...userSignUp, password: text})}
                                // value={userSignUp.password}
                                // onChange={handleChange}
                                />
                        </View>
                        <View>
                            <Label style={styles.labelSt}>Check Password</Label>
                            <TextInput
                                style={{width:"100%"}}
                                secureTextEntry={true}
                                textContentType="password"
                                name="passwordchk"
                                onChangeText={(text) => setUserSignUp({...userSignUp, passwordchk: text})}
                                // value={userSignUp.passwordchk}
                                // onChange={handleChange}
                                />
                        </View>
                        <View>
                            <Label style={styles.labelSt}>Phone</Label>
                            <TextInput
                                style={{width:"100%"}} 
                                name="phone"
                                onChangeText={(text) => setUserSignUp({...userSignUp, phone: text})}
                                // value={userSignUp.phone}
                                // onChange={handleChange}
                                />
                        </View>
                        <View style={styles.radioBt}>
                            <Text style={styles.titleSt}>Gender</Text>
                            <SomRadioButton dataList={genderList} recoilState={ genderState } name="gender" />
                        </View>


                        <View style={{flex:1}}>
                            <TouchableOpacity
                                onPress={handleSubmit}
                                style={styles.signupBt} >
                                <Text style={styles.signupBtTxt}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </View>
        </Container>
    );
}

signUpScreen.navigationOptions = {
    header: null,
};