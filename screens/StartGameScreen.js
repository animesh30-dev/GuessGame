import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Cards from "../components/ui/Cards";
import Instruction from "../components/ui/Instruction";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function NumberInputHandler(eneteredText) {
    setEnteredNumber(eneteredText);
  }

  function ResetInputHandler() {
    setEnteredNumber("");
  }

  function CheckInputNumber() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // show alert..
      Alert.alert("Invalid Number", " Number has to be between 1 and  99", [
        { text: "Ok", style: "destructive", onPress: ResetInputHandler },
      ]);
      return;
    }

    onPickNumber(chosenNumber);
  }
  return (
    <View style={styles.rootContainer}>
      <Title> Guess My Number </Title>
      <Cards style={styles.c}>
        <Instruction> Enter A Number </Instruction>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={NumberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={ResetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={CheckInputNumber}>Confirm</PrimaryButton>
          </View>
        </View>
      </Cards>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 200,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.primary_500,
    borderBottomWidth: 2,
    color: Colors.primary_800,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  c:{
    marginTop:100,
  }
});
