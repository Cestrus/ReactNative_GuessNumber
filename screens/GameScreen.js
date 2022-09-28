import { View, StyleSheet, Alert, FlatList } from 'react-native';
import { useEffect, useState } from 'react';

import Title from '../components/Title';
import NumberContainer from '../components/NumberContainer';

import { getRandomBetween } from '../utils/functions';
import PrimaryButton from '../components/PrimaryButton';
import Log from '../components/Log';

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({
	userNumber,
	onGameOver,
	roundNumber,
	onChangeRoundNumber,
}) => {
	let initNumber;
	const [currGuessNumber, setCurrGuessNumber] = useState(null);
	const [logRounds, setLogRouns] = useState([]);

	useEffect(() => {
		initNumber = getRandomBetween(minBoundary, maxBoundary, userNumber);
		setCurrGuessNumber(initNumber);
	}, []);

	useEffect(() => {
		if (currGuessNumber === userNumber) {
			onGameOver();
		}
	}, [currGuessNumber]);

	useEffect(() => {
		if (roundNumber === 0) {
			minBoundary = 1;
			maxBoundary = 100;
		}
	}, [roundNumber]);

	const nextGuessHandler = (direction) => {
		if (
			(currGuessNumber > userNumber && direction === 'higher') ||
			(currGuessNumber < userNumber && direction === 'lower')
		) {
			Alert.alert('You - ASS!', 'Don`t lie me! You know that`s wrong!', [
				{ text: 'Sorry', style: 'cancel' },
			]);
			return;
		}
		if (direction === 'higher') {
			minBoundary = currGuessNumber + 1;
		}
		if (direction === 'lower') {
			maxBoundary = currGuessNumber;
		}
		const newGuess = getRandomBetween(
			minBoundary,
			maxBoundary,
			currGuessNumber
		);
		onChangeRoundNumber((prevNumber) => {
			return ++prevNumber;
		});
		setLogRouns((prevLogs) => [
			...prevLogs,
			{ round: ++roundNumber, number: currGuessNumber },
		]);
		setCurrGuessNumber(newGuess);
	};

	return (
		<View style={styles.container}>
			<Title fontSize={24} border>
				Opponent`s Guess!
			</Title>
			<NumberContainer fontSize={36}>{currGuessNumber}</NumberContainer>
			<View>
				<Title fontSize={20}>Higher or lower?</Title>
				<View style={styles.btnsContainer}>
					<View style={styles.btnContainer}>
						<PrimaryButton
							onPress={() => nextGuessHandler('lower')}
						>
							Lower
						</PrimaryButton>
					</View>
					<View style={styles.btnContainer}>
						<PrimaryButton
							onPress={() => nextGuessHandler('higher')}
						>
							Higher
						</PrimaryButton>
					</View>
				</View>
			</View>
			<View style={styles.logContainer}>
				<Title fontSize={20}>History guesses</Title>
				<FlatList
					data={logRounds}
					renderItem={({ item }) => (
						<Log
							roundNumber={item.round}
							guessNumber={item.number}
						/>
					)}
					keyExtractor={(item) => item.number}
				/>
			</View>
		</View>
	);
};

export default GameScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
	},
	btnsContainer: {
		flexDirection: 'row',
	},
	btnContainer: {
		flex: 1,
	},
	logContainer: {
		height: 400,
		overflow: 'hidden',
	},
});
