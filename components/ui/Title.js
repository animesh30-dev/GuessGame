import { Text,StyleSheet } from "react-native";
import Colors from "../../constants/colors";
function Title({children}){
    return <Text style = {styles.Title}> {children} </Text>
}

export default Title;

const styles = StyleSheet.create({
    Title:{
        color: 'white',
        fontSize:24,
        fontWeight:'bold',
        borderWidth:3,
        borderRadius:10,
        borderColor:'white',
        textAlign:'center',
        padding:12,
        // fontFamily:'open-sans-bold',
    }
});