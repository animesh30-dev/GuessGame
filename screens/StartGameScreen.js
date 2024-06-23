import { useState } from "react";
import { TextInput, View, StyleSheet, Alert,useWindowDimensions,ScrollView, KeyboardAvoidingView,  } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Cards from "../components/ui/Cards";
import Instruction from "../components/ui/Instruction";
import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();
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

  const marginTopDistance = height< 500 ? 30:100
  return (
    <ScrollView style = {styles.screenKeyboard}>
    <KeyboardAvoidingView style = {styles.screenKeyboard} behaviour='position'>
    <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
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
    </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;
//const deviceHeight = Dimensions.get('window').height; 
const styles = StyleSheet.create({
  screenKeyboard:{
    flex:1,
  },
  rootContainer: {
    flex: 1,
    
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
