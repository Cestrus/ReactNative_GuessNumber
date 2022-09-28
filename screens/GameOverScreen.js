import { Image, View, StyleSheet, Text } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import { Colors } from '../utils/constans';

const GameOverScreen = ({ userNumber, roundNumber, onStartNewGame }) => {
	return (
		<View style={styles.container}>
			<Title fontSize={32} border>
				Game Over!
			</Title>
			<View style={styles.imgContainer}>
				<Image
					source={require('../assets/images/success.png')}
					style={styles.image}
				/>
			</View>
			<Text style={styles.text}>
				Your phone needed
				<Text style={styles.highlight}> {roundNumber}</Text> rounds to
				guess the number{' '}
				<Text style={styles.highlight}>{userNumber}</Text>
			</Text>
			<PrimaryButton onPress={onStartNewGame}>
				Start New Game
			</PrimaryButton>
		</View>
	);
};

export default GameOverScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	imgContainer: {
		width: 300,
		height: 300,
		marginTop: 36,
		borderRadius: 150,
		borderWidth: 3,
		borderColor: Colors.primary600,
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		height: '100%',
	},
	text: {
		padding: 16,
		fontFamily: 'open-sans',
		fontSize: 20,
		textAlign: 'center',
		color: Colors.primary600,
	},
	highlight: {
		fontSize: 26,
		fontFamily: 'open-sans-bold',
		color: Colors.primary500,
	},
});
