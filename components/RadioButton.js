import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class RadioButton extends Component {
	state = {
		value: null,
	};

	render() {  
		const gender = [
      {
        key: 'Male',
        text: 'Male',
        name: 'male',
        value: 'male',
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
		// const { gender } = this.props;
		const { value } = this.state;

		return (
			<View>
				{gender.map(res => {
					return (
						<View key={res.key} style={styles.radiocontainer}>
                            <Text style={styles.radioText}>{res.text}</Text>
							<TouchableOpacity
								style={styles.radioCircle}
								onPress={() => {
									this.setState({
										value: res.key,
									});
								}}
								value={ value }>
                                  {value === res.key && <View style={styles.selectedRb} />}
                                  
							</TouchableOpacity>
						</View>
					);
				})}
			</View>
		);
	}
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
		borderColor: 'pink',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: 10,
		height: 10,
		borderRadius: 50,
		backgroundColor: 'pink',
    },
    selectedText: {
        color:'pink',
        fontWeight: '600'
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
});