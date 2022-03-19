import React from "react";
import { View, Text,TextInput, StyleSheet} from "react-native";
import Header from "../components/Login/Header";
import Formlogin from "../components/Login/Formlogin";

export default function TabOneScreen() {
  
  return (
    <View
    style={styles.container}
    >
    <Header />
    <Formlogin />
      
      
      <View style={{
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingBottom: 10,
        
        
      }}>
        <Text style={{
          fontSize: 14,
          color: '#00b4d8',
          marginTop: 20,

        }}>
          Don't have an account? Sign up!
        </Text>
      </View>
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
  marginBottom: 1,
  borderWidth: 2,
  borderRadius: 20,
  justifyContent: "center",
  borderColor:'#00b4d8',
  
  
},
});