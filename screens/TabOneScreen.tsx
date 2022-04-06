import React from "react";
import { View, Text,TextInput, StyleSheet, TouchableOpacity} from "react-native";
import * as yup from 'yup';
import Registrationform from "../components/Login/Registrationform";
import ViewWithLoading from "../components/ViewWithLoading";

export default function TabOneScreen() {
  
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