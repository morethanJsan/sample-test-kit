//import { StyleSheet } from 'react-native';
import React from "react";
import { View, Text,TextInput, StyleSheet} from "react-native";
import Header from "../components/Login/Header";
import Formlogin from "../components/Login/Formlogin";
import Footer from "../components/Login/Footer";
import EditScreenInfo from '../components/EditScreenInfo';
//import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  
  return (
    <View
    style={styles.container}
    >
    <Header />
    <Formlogin />
    <Footer />


   
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
textStyle:{
textAlign: "center",
fontFamily: 'poppins-bold',
fontSize: 20,
color: '#fb6f92',
},
  input:{
  height: 40,
  width: '100%',
  marginBottom: 30,
  borderWidth: 2,
  borderRadius: 20,
  justifyContent: "center",
  borderColor:'#00b4d8', 
  },
});
