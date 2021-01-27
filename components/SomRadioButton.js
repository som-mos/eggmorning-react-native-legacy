import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {useRecoilState} from 'recoil';

const SomRadioButton = (props) =>{
	const { dataList, recoilState } = props;
	const [data, setData] = useRecoilState(recoilState);

	return (
		<View>
			{(dataList||[]).map(res => {
				return (
					<View key={res.key} style={styles.radiocontainer}>
						<Text style={styles.radioText}>{res.text}</Text>
						<TouchableOpacity
							style={styles.radioCircle}
							selected={data}
							onPress={() => {
								setData(res.key)
							}}>
							{data === res.key && <View style={styles.selectedRb} />}
						</TouchableOpacity>
					</View>
				);
			})}
		</View>
	);
};

export default SomRadioButton;

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