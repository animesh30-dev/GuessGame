import { Text,StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Instruction({ children, style }) {
  return <Text style={[styles.instruction, style]}>{children}</Text>;
}
export default Instruction;

const styles=StyleSheet.create({
    instruction: {
        color: Colors.primary_800,
        fontSize: 24,
        fontWeight: "800",
        // fontFamily:'open-sans',
      },
});