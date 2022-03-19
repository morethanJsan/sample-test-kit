import * as React from "react";
import {View,Image,StyleSheet, Text} from "react-native";

export default function Header(){
return (
    <View style={{
        flex: 1,
        marginTop: 50,
      }}>
         <Image
      style={{
      height: '90%',
      width: '100%',
      resizeMode: 'center'
      
    }}
    source={{uri:'https://cdn-icons-png.flaticon.com/512/187/187879.png'}}
  />
   <Text style={{
        fontSize: 50,
        fontFamily: 'poppins-bold',
        textAlign: "center", 
        marginBottom: 50,
        color: '#00b4d8'
      }}>Welcome!
      </Text>

      </View>
     
)

}