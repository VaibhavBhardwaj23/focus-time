import {React,useState} from "react";
import {View,Text,StyleSheet} from "react-native"
import {TextInput} from "react-native-paper"
import {RoundedButton} from "../components/RoundedButton"
import {colors} from "../utils/colors"
import {spacing} from "../utils/sizing"
export const Focus=({addSubject}) =>
{
  const [subject,setSubject]= useState(null)
return(
  <View style={styles.focusContainer}>
<View style={styles.inputContainer}>
<TextInput style={styles.text} onChangeText={setSubject} value={subject} label="What would like to focus on...?"/>
<View style={styles.button}>
<RoundedButton title="+" size={50} onPress={() => addSubject(subject)} /></View>
</View>
</View>
)
}

const styles= StyleSheet.create(
  {

    inputContainer:
    {
      padding:spacing.lg,
      justifyContent:'top',
      flexDirection:"row"

    },
    text:{
      flex:1,
      marginRight:spacing.sm
    },
    button:
    {
      justifyContent:'center',
    }
  }
)