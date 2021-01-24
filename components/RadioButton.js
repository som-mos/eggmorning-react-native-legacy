import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {useRecoilState, atom} from 'recoil';
import {genderState} from '../screens/SignUpScreen'

export default function RadioButton({gender}) {
	const [genderValue, setGenderValue] = useRecoilState(genderState);
	return (
			<View>
				{gender.map(res => {
					return (
						<View key={res.key} style={styles.radiocontainer}>
							<Text style={styles.radioText}>{res.text}</Text>
							<TouchableOpacity
								style={styles.radioCircle}
								onPress={() => {
									setGenderValue(res.key);
								}}>
                                  {genderValue === res.key && <View style={styles.selectedRb} />}
							</TouchableOpacity>
						</View>
					);
				})}
                {/* <Text> Selected: {this.state.value} </Text> */}
			</View>
	);
}

const styles = StyleSheet.create({
	radiocontainer: {
        marginBottom: 5,
        marginTop:15,
        alignItems: 'center',
        flexDirection: 'row',
		justifyContent: 'space-between',
	},
    radioText: {
        marginLeft: 35,
        fontSize: 14,
        color: '#bebbbf',
        fontWeight: '400'
    },
	radioCircle: {
		height: 16,
		width: 16,
		borderRadius: 100,
		borderWidth: 1,
		borderColor: '#FFCE70',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: 10,
		height: 10,
		borderRadius: 50,
		backgroundColor: '#FFCE70',
    },
    selectedText: {
        color:'#FFCE70',
        fontWeight: '600'
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
});