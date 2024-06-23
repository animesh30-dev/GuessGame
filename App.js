import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setgameIsOver] = useState(true);
  const [guessRound, setguessRound] = useState(0);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setgameIsOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setgameIsOver(true);
    setguessRound(numberOfRounds);
  }

  function startNewGame() {
    setUserNumber(null);
    setguessRound(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundNumber={guessRound}
        onStart={startNewGame}
      />
    );
  }

  return (
    <>
    <StatusBar style = "light"/>
    <LinearGradient
      colors={[Colors.primary_600, Colors.primary_800]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/dice_real.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backGroundImageStyle}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backGroundImageStyle: {
    opacity: 0.15,
  },
});
