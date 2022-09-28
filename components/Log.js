import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../utils/constans';

const Log = ({ roundNumber, guessNumber }) => {
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.text}># {roundNumber}</Text>
			</View>
			<View>
				<Text style={styles.text}>Opponent`s guess: {guessNumber}</Text>
			</View>
		</View>
	);
};

export default Log;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderColor: Colors.primary500,
		backgroundColor: Colors.secondary500,
		paddingVertical: 8,
		paddingHorizontal: 20,
		margin: 5,
		borderRadius: 20,
		borderWidth: 2,
		borderColor: Colors.primary600,
		elevation: 4,
	},
	text: {
		fontFamily: 'open-sans-bold',
		fontSize: 16,
		color: Colors.primary600,
	},
});
