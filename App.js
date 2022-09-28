import { LinearGradient } from 'expo-linear-gradient';
import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView, View } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

import { Colors } from './utils/constans';

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [appIsReady, setAppIsReady] = useState(false);
	const [userNumber, setUserNumber] = useState(null);
	const [gameIsOver, setGameIsOver] = useState(false);
	const [roundNumber, setRoundNumber] = useState(0);

	useEffect(() => {
		async function prepare() {
			try {
				await Font.loadAsync({
					'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
					'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
				});
			} catch (err) {
				console.log('error => ', err);
			} finally {
				setAppIsReady(true);
			}
		}
		prepare();
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			await SplashScreen.hideAsync();
		}
	}, [appIsReady]);

	if (!appIsReady) {
		return null;
	}

	let screen = <StartGameScreen onSetNumber={setUserNumber} />;

	const gameOverHandler = () => {
		setGameIsOver(true);
	};

	const startNewGameHandler = () => {
		setGameIsOver(false);
		setUserNumber(null);
		setRoundNumber(0);
	};

	if (userNumber) {
		screen = (
			<GameScreen
				userNumber={userNumber}
				onGameOver={gameOverHandler}
				roundNumber={roundNumber}
				onChangeRoundNumber={setRoundNumber}
			/>
		);
	}
	if (gameIsOver && userNumber) {
		screen = (
			<GameOverScreen
				userNumber={userNumber}
				roundNumber={roundNumber}
				onStartNewGame={startNewGameHandler}
			/>
		);
	}

	return (
		<View style={styles.rootScreen} onLayout={onLayoutRootView}>
			<LinearGradient
				colors={[Colors.primary500, Colors.secondary500]}
				style={styles.rootScreen}
			>
				<ImageBackground
					source={require('./assets/images/background.png')}
					resizeMode="cover"
					style={styles.rootScreen}
					imageStyle={styles.backgroundImage}
				>
					<SafeAreaView style={styles.rootScreen}>
						{screen}
					</SafeAreaView>
				</ImageBackground>
			</LinearGradient>
		</View>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
	backgroundImage: {
		opacity: 0.15,
	},
});
