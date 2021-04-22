import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Text, View, TouchableOpacity, TextInput  } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Label } from 'native-base';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view'
import SomRadioButton from '../components/SomRadioButton';
import {useRecoilState, atom, errorSelector} from 'recoil';
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
const styles = getStyleSheet();

const SignupSchema = Yup.object().shape({
      email: Yup
            .string()
            .email('올바른 이메일 형식이 아닙니다.')
            .required('이메일을 입력해 주세요.'),
    nickname: Yup
            .string()
            .min(2, '닉네임이 너무 짧습니다.')
            .required('닉네임을 입력해 주세요.'),
    password: Yup
            .string()
            .min(6, '비밀번호가 너무 짧습니다.')
            .max(15, '15자 이하로 입력해 주세요.')
            .matches(/[a-zA-Z0-9]/, '영문과 숫자만 입력해 주세요.')
            .required('비밀번호를 입력해 주세요.'),
    passwordchk:Yup.string().when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "비밀번호가 일치하지 않습니다."
        )
      })
            
  });


export default function signUpScreen({navigation}) {

const [userSignUp, setUserSignUp] = React.useState (
    { id: '', nickname: '', password:'', passwordchk:'', phone: '', gender:'' }
);

    const {genderState} = userState;
    const [genderValue, setGenderValue] = useRecoilState(genderState);
    
    useEffect(()=>{
        setUserSignUp({...userSignUp, gender:genderValue})
    }, [genderValue]);
    console.log("userSignUp - ", userSignUp);


    const handleSubmit = async(e) => {
        e.preventDefault();
       await axios.post('http://54.180.155.194:8000/eggmorning/user', userSignUp)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log({userSignUp});
    };

    const onSubmit = () => {
        console.log(userSignUp)
    }


    return (
        <Container>
            <KeyboardAwareScrollView>
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
                    <View style={styles.codeHighlightContainer}>
                        <Text style={styles.signInText}>Sign Up</Text>
                    </View>
                    <Formik 
                        initialValues={{
                            email: '',
                            nickname: '',
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={values => {
                            // same shape as initial values
                            console.log(values);
                        }}
                    >
                    {({ errors, touched, handleChange, handleBlur, handleSubmit, values }) => (
                        <Form>
                        <View style={styles.inputWrapper}>
                            <Label style={styles.labelSt}>Email</Label>
                            <TextInput
                                style={styles.textInputStyle} 
                                onBlur={handleBlur('email')}
                                value={values.email}
                                maxLength={20}
                                onChangeText={handleChange('email')}
                                />
                        </View> 
                        <span style={{color:'#c0524c', fontSize:12, position:'absolute'}}>
                        {/* <span style={styles.errMsg}> */}
                            {errors.email && touched.email ? <div>{errors.email}</div> : null }
                        </span>
                        <View style={styles.inputWrapper}>
                            <Label style={styles.labelSt}>Nickname</Label>
                            <TextInput
                                style={styles.textInputStyle} 
                                onBlur={handleBlur('nickname')}
                                value={values.nickname}
                                maxLength={20}
                                onChangeText={handleChange('nickname')}
                                />
                        </View>
                        <span style={{color:'#c0524c', fontSize:12, position:'absolute'}}>
                            {errors.nickname && touched.nickname ? <div>{errors.nickname}</div> : null }
                       </span> 
                       <View style={styles.inputWrapper}>
                            <Label style={styles.labelSt}>Password</Label>
                            <TextInput
                                style={styles.textInputStyle} 
                                onBlur={handleBlur('password')}
                                value={values.password}
                                maxLength={20}
                                onChangeText={handleChange('password')}
                                />
                        </View>
                        <span style={{color:'#c0524c', fontSize:12, position:'absolute'}}>
                            {errors.password && touched.password ? <div>{errors.password}</div> : null }
                       </span> 
                       <View style={styles.inputWrapper}>
                            <Label style={styles.labelSt}>Check Password</Label>
                            <TextInput
                                style={styles.textInputStyle} 
                                onBlur={handleBlur('passwordchk')}
                                value={values.passwordchk}
                                maxLength={20}
                                onChangeText={handleChange('passwordchk')}
                                />
                        </View>
                        <span style={{color:'#c0524c', fontSize:12, position:'absolute'}}>
                            {errors.passwordchk && touched.passwordchk ? <div>{errors.passwordchk}</div> : null }
                        </span>
                        <View style={styles.inputWrapper}>
                            <Label style={styles.labelSt}>Phone</Label>
                            <TextInput
                                style={styles.textInputStyle} 
                                onBlur={handleBlur('phone')}
                                value={values.phone}
                                maxLength={20}
                                onChangeText={handleChange('phone')}
                                />
                        </View>
                        <span style={{color:'#c0524c', fontSize:12, position:'absolute'}}>
                            {errors.phone && touched.phone ? <div>{errors.phone}</div> : null }
                       </span>
                         {/*<View style={styles.inputWrapper}>
                            <Label style={styles.labelSt}>Password</Label>
                            <TextInput
                                style={styles.textInputStyle} 
                                secureTextEntry={true}
                                textContentType="password"
                                name="password"
                                maxLength={30}
                                onChangeText={(text) => setUserSignUp({...userSignUp, password: text})}
                                />
                        </View>
                        <View style={styles.inputWrapper}>
                            <Label style={styles.labelSt}>Check Password</Label>
                            <TextInput
                                style={styles.textInputStyle}
                                secureTextEntry={true}
                                textContentType="password"
                                name="passwordchk"
                                onChangeText={(text) => setUserSignUp({...userSignUp, passwordchk: text})}
                                />
                        </View>
                        <View style={styles.inputWrapper}>
                            <Label style={styles.labelSt}>Phone</Label>
                            <TextInput
                                style={styles.textInputStyle} 
                                name="phone"
                                keyboardType="numberic"
                                onChangeText={(text) => setUserSignUp({...userSignUp, phone: text})}
                                />
                        </View>*/}
                        <View style={styles.radioBt}>
                            <Text style={styles.labelSt}>Gender</Text>
                            <SomRadioButton dataList={genderList} recoilState={ genderState } name="gender" value={values.gender} />
                        </View>

                        <View style={{flex:1}}>
                            <TouchableOpacity
                                onPress={onSubmit}
                                style={styles.signupBt} >
                                <Text style={styles.signupBtTxt}>Sign Up</Text>
                            </TouchableOpacity>
                        </View> 
                        </Form>
                        )}
                    </Formik>
                </View>
            </View>
            </KeyboardAwareScrollView>
        </Container>
    );
}

signUpScreen.navigationOptions = {
    header: null,
};