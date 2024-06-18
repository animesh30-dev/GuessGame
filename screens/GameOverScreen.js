import { View, Text, StyleSheet, Image } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

function GameOverScreen({ roundNumber, userNumber, onStart }) {
  return (
    <View style={styles.GameOverScreen}>
      <Title>Game Over</Title>
      <View style={styles.imagecontainer}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/images/gameOver.png")}
        />
      </View>

      <Text style={styles.textHighlight}>
        Your Phone Needed <Text style={styles.special}>{roundNumber}</Text>{" "}
        rounds to guess the number{" "}
       
        <Text style={styles.special}>{userNumber}{" "}</Text>
        <FontAwesome5 name="smile-beam" size={24} color="black" />
      </Text>
      <Text style={styles.comment}>
        That means my code and your phone are both working!
      </Text>
      <View style ={styles.b}></View>
      <PrimaryButton onPress={onStart}>Start Another Game</PrimaryButton>
    </View>
  );
}
export default GameOverScreen;
const styles = StyleSheet.create({
  GameOverScreen: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    marginTop:70
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },

  imagecontainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary_600,
    overflow: "hidden",
    margin: 36,
  },
  textHighlight: {
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "500",
    textAlign: "center",
  },
  special: {
    color: "#97312E",
    // fontStyle:'italic',
    fontWeight: "bold",
  },
  comment: {
    fontSize: 20,
    fontWeight: "300",
    marginTop: 7,
    textAlign: "center",
    marginBottom: 20,
  },
  b:{
    
    marginTop:70,
  }
});
