import { View, Text, Pressable, StyleSheet } from 'react-native';

import { Colors } from '../utils/constans';

const PrimaryButton = ({ onPress, children }) => {
	return (
		<View style={styles.btnOuterContainer}>
			<Pressable
				style={({ pressed }) =>
					pressed
						? [styles.pressed, styles.btnInnerContainer]
						: styles.btnInnerContainer
				}
				onPress={onPress}
				android_ripple={{ color: Colors.secondary500 }}
			>
				<Text style={styles.btnText}>{children}</Text>
			</Pressable>
		</View>
	);
};

export default PrimaryButton;

const styles = StyleSheet.create({
	btnOuterContainer: {
		borderRadius: 28,
		margin: 8,
		overflow: 'hidden',
	},
	btnInnerContainer: {
		backgroundColor: Colors.primary500,
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 2,
	},
	btnText: {
		color: 'white',
		textAlign: 'center',
	},
	pressed: {
		opacity: 0.75, // only for iOS
	},
});
