import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Alert,
  Text,
  FlatList,
  ScrollView,
  useWindowDimensions
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Instruction from "../components/ui/Instruction";
import Cards from "../components/ui/Cards";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setguessRounds] = useState([initialGuess]);

  const {height,width} = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    // direction => 'lower', 'greater'
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setguessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  }
  const guessRoundsListLength = guessRounds.length;
  const marginTD = height<500 ? 10 : 100;
  
  let content = (
    <>
    <NumberContainer>{currentGuess}</NumberContainer> 
    <Cards>
     
        <Instruction style={styles.instruction}>Higher or lower?</Instruction>
              
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons
                name="remove-circle-outline"
                size={22}
                color="#EAEFD6"
              />
            </PrimaryButton>
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="add-circle-outline" size={22} color="#EAEFD6" />
            </PrimaryButton>
          </View>
        </View>
      </Cards>
    </>
  );

  if(height<500){
    content = (
      <>
        
         
          <View style = {styles.buttonContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons
                name="remove-circle-outline"
                size={22}
                color="#EAEFD6"
              />
            </PrimaryButton>
          </View>
        <NumberContainer>{currentGuess}</NumberContainer>

          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="add-circle-outline" size={22} color="#EAEFD6" />
            </PrimaryButton>
          </View>
          </View>
    
      </>
    )
  }
  return (
  <View style={[styles.screen,{marginTop:marginTD}]}>
      <Title> Opponent's Guess </Title>
     
      {content}

      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              OPguess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding:24,
   
    alignItems:'center',
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
    padding: 10,
  },
  instruction: {
    marginBottom: 12,
  },
  listContainer: {
    flex: 1,
    
  },
  buttonContainerWide:{
    flexDirection:'row',
    alignItems:'center',
  }
});
