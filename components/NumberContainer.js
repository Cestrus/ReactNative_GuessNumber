import { View, Text, StyleSheet } from 'react-native';

import { Colors } from '../utils/constans';

const NumberContainer = ({ children, fontSize }) => {
	return (
		<View style={styles.container}>
			<Text style={[styles.text, { fontSize }]}>{children}</Text>
		</View>
	);
};

export default NumberContainer;

const styles = StyleSheet.create({
	container: {
		padding: 12,
		alignItems: 'center',
		borderBottomWidth: 2,
		borderBottomColor: Colors.secondary500,
	},
	text: {
		fontFamily: 'open-sans-bold',
		color: Colors.secondary500,
	},
});
