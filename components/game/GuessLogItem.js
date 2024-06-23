import { View , Text,StyleSheet} from "react-native"
import Colors from "../../constants/colors";

function GuessLogItem({roundNumber,OPguess}){
    return <View style={styles.listItems}> 
        <Text style={styles.itemText}>{roundNumber}.)   </Text>
        <Text style={styles.itemText}>Phone's Guess is : {OPguess}</Text>
    </View>
}

export default GuessLogItem;
const styles =StyleSheet.create({
    listItems:{
      borderColor:Colors.primary_600,
      borderWidth:1,
      borderRadius:40,
      padding:12,
      marginVertical:8,
      backgroundColor:Colors.primary_800,
      flexDirection:'row',
      justifyContent:'space-between',
      width:'100%',
      elevation:8,
      justifyContent:'left'
      
    },
    itemText:{
        fontSize:18,
        // marginLeft:8,
        color:Colors.primary_600,
        fontWeight:'500'        
    }
});