import React from "react";
import { View, Text,TextInput, StyleSheet, TouchableOpacity} from "react-native";
//import Header from "../components/Login/Header";
//import Formlogin from "../components/Login/Formlogin";
//import Footer from "../components/Login/Footer";
import Registrationform from "../components/Login/Registrationform";

export default function TabTwoScreen() {
  
  return (
    <View
    style={styles.container}
    >
    <Registrationform />

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffecd1',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});