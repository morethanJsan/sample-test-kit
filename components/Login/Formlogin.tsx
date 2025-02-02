import * as React from "react";
import { View, Text, StyleSheet, Alert, TextInput} from "react-native";
import {Button} from "react-native-elements";

export default function Formlogin(){
  const [usernameText, setusernameText] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleLogin = () => {
    const USERNAME = "Admin";
    const PASSWORD = "Admin";

    if (usernameText === USERNAME && password === PASSWORD)
      {Alert.alert("Login", "Successfully Login");
      }else
    {Alert.alert("Error", "Invalid Credentials");
  }

  }
return (

<View style={{
        flex: 1,
      }}>
        <View style={{
          flex: 0,
          marginTop: 100,
        }}>
          <Text style={styles.textStyle
          }>Username
          </Text>
          <TextInput
          style={styles.input}
          onChangeText={setusernameText}
          value={usernameText}
          keyboardType={"email-address"}
          placeholder={"  Your email address"}
          autoCapitalize={"none"}
          />
        </View>
        <View style={{
          flex: 0,
          marginBottom: 20
        }}>
          <Text style={styles.textStyle
          }>Password
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          keyboardType={"visible-password"}
          placeholder={"  Your password"}
          secureTextEntry={true}
          />
        </View>
        <View style={{
          flex: 0,
        }}>

          <View style={{
            flex: 0
          }}>
            <Button
            title={"Login"}
            titleStyle={{
              fontFamily: 'poppins-bold',
              fontSize:14,
              color: '#ffecd1',
              marginVertical: 1,
              
            }}
            buttonStyle={{
              backgroundColor: '#fb6f92',
              borderRadius: 20,
              marginTop: -10,
             
            }}
            type={"solid"}
            onPress={handleLogin}
            />
            <View style={{
            }}>
            </View>
          </View>
        </View>

      </View>
     
      
)
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
        marginBottom: 10,
        borderWidth: 2,
        borderRadius: 20,
        justifyContent: "center",
        borderColor:'#00b4d8',
        
        
      },
    });
    