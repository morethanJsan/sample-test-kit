import * as React from "react";
import {View,Image, StyleSheet, Text, TextInput, Alert} from "react-native";
import {Button} from "react-native-elements";

export default function Registrationform(){
  const [firstname, setfirstnameText] = React.useState<string>("");
  const [lastname, setlastnameText] = React.useState<string>("");
  const [usernameText, setusernameText] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  
  const handleRegistrationform = () => {
    const USERNAME = "Admin";
    const PASSWORD = "Admin";

    if (usernameText === USERNAME && password === PASSWORD)
      {Alert.alert("Registered", "Successfully Registered");
      }else
    {Alert.alert("Error", "Invalid Credentials");
  }
}
    return (

<View style={{
        flex: 1,
      }}>
         <Text style={{
        fontSize: 80,
        fontFamily: 'poppins-bold',
        textAlign:'center', 
        marginTop: 80,
        color: '#00b4d8'
      }}>Create
      </Text>
      <Text style={{
        fontSize: 70,
        fontFamily: 'poppins-thin',
        textAlign:'center', 
        marginTop: -40,
        color: '#00b4d8'
      }}>Account
      </Text>
      <Text style={{
        fontSize: 12,
        fontFamily: 'poppins-semibold',
        textAlign:'center', 
        marginTop:-20,
        color: '#00b4d8'
      }}> Please signup to continue
      </Text>
        <View style={{
          flex: 0,
          marginTop: 15,
        }}>
          <Text style={styles.textStyle
          }>First Name
          </Text>
          <TextInput
          style={styles.input}
          onChangeText={setfirstnameText}
          value={firstname}
          keyboardType={"email-address"}
          placeholder={"  Your first name"}
          autoCapitalize={"none"}
          />
        </View>
        <View style={{
          flex: 0,
          marginTop: 1,
        }}>
          <Text style={styles.textStyle
          }>Last Name
          </Text>
          <TextInput
          style={styles.input}
          onChangeText={setlastnameText}
          value={lastname}
          keyboardType={"email-address"}
          placeholder={"  Your last name"}
          autoCapitalize={"none"}
          />
        </View>
<View style={{
          flex: 0,
          marginTop: 1,
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
          <View style={{
          flex: 0,
        }}>

          <View style={{
            flex: 0
          }}>
            <Button
            title={"Register"}
            titleStyle={{
              fontFamily: 'poppins-bold',
              fontSize:14,
              color: '#ffecd1',
              marginVertical: 1,
              
            }}
            buttonStyle={{
              backgroundColor: '#fb6f92',
              borderRadius: 20,
              marginTop: 20,
             
            }}
            type={"solid"}
            onPress={handleRegistrationform}
            />
            <View style={{
            }}>
            </View>
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