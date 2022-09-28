import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';

import { isCorrectValue } from '../utils/functions';
import { Colors } from '../utils/constans';

const StartGameScreen = ({ onSetNumber }) => {
	const [enteredValue, setEnteredValue] = useState('');

	const inputValueHandler = (text) => {
		setEnteredValue(text);
	};

	const resetValueHandler = () => {
		setEnteredValue('');
	};

	const confirmValueHandler = () => {
		if (!isCorrectValue(enteredValue)) {
			Alert.alert(
				'Incorrect number!',
				'Number has to be number between 1 and 99',
				[
					{
						text: 'Okay',
						style: 'destructive',
						onPress: resetValueHandler,
					},
				]
			);
			return;
		}
		onSetNumber(parseInt(enteredValue));
	};

	return (
		<View style={styles.container}>
			<Title fontSize={32} border>
				Guess My Number
			</Title>
			<View style={styles.wrapper}>
				<Title fontSize={24}>Enter a Number</Title>
				<TextInput
					style={styles.numberInput}
					maxLength={2}
					keyboardType="number-pad"
					autoCapitalize="none"
					autoCorrect={false}
					onChangeText={inputValueHandler}
					value={enteredValue}
				/>
				<View style={styles.btnsContainer}>
					<View style={styles.btnContainer}>
						<PrimaryButton onPress={resetValueHandler}>
							Reset
						</PrimaryButton>
					</View>
					<View style={styles.btnContainer}>
						<PrimaryButton onPress={confirmValueHandler}>
							Confirm
						</PrimaryButton>
					</View>
				</View>
			</View>
		</View>
	);
};

export default StartGameScreen;

const styles = StyleSheet.create({
	container: {
		marginTop: 70,
		marginHorizontal: 24,
	},
	wrapper: {
		alignItems: 'center',
		marginTop: 50,
		padding: 16,
		backgroundColor: Colors.primary600,
		borderRadius: 8,
		elevation: 4,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.25,
	},
	numberInput: {
		height: 50,
		width: 50,
		fontSize: 35,
		borderBottomColor: Colors.secondary500,
		borderBottomWidth: 2,
		color: Colors.secondary500,
		marginVertical: 16,
		fontFamily: 'open-sans-bold',
		textAlign: 'center',
	},
	btnsContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	btnContainer: {
		flex: 1,
	},
});
