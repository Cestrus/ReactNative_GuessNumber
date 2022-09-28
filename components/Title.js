import { Text, StyleSheet } from 'react-native';

import { Colors } from '../utils/constans';

const Title = ({ children, fontSize, border, style }) => {
	return (
		<Text
			style={
				border
					? [styles.title, styles.border, style, { fontSize }]
					: [styles.title, style, { fontSize }]
			}
		>
			{children}
		</Text>
	);
};

export default Title;

const styles = StyleSheet.create({
	title: {
		marginTop: 24,
		fontFamily: 'open-sans-bold',
		color: Colors.secondary500,
		textAlign: 'center',
		padding: 12,
	},
	border: {
		borderWidth: 2,
		borderColor: Colors.secondary500,
	},
});
