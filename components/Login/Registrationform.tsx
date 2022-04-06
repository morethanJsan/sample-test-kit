import React, {useEffect} from "react";
import {View,Image, StyleSheet, Text, TextInput, Alert, ScrollView} from "react-native";
import { ErrorMessage, Formik, prepareDataForValidation } from "formik";
import * as yup from 'yup';
import {Button} from "react-native-elements";
import ViewWithLoading from "../ViewWithLoading";



export default function Registrationform(){
  const [firstname, setfirstnameText] = React.useState<string>("");
  const [lastname, setlastnameText] = React.useState<string>("");
  const [emailaddress, setEmailAddressText] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirmpassword, setConfirmPassword] = React.useState<string>("");
  const [loading, setLoading] = React.useState(true);
  

  useEffect(() => {
    console.log(loading);
    setLoading(true);
    setTimeout(() => {
          setLoading(false);
    }, 3000);
}, [])


const registerSchema = yup.object({
  email: yup.string().required('Email is required').matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)$/, 'Invalid email'),
  password: yup.string().required('Password is required'),
  conPassword: yup.string().required('Confirm your password')
  
})

  
  const handleRegistrationform = () => {
    if (password === confirmpassword){
      Alert.alert("Registered");
   }
   else{
     Alert.alert("Error", "Passwords do not match");
   }
   
 }
    return (
    <ViewWithLoading loading={loading}>
      <Formik       
                initialValues={{
                email: '',
                password: '',
                conPassword:''
              }}
              onSubmit={(values, action) => {
                console.log(values);
              }}
              validationSchema={registerSchema}

            >
              {({ handleChange, values, errors, touched, handleSubmit} ) => (
              
<View style={{
        flex: 1,
      }}>
         <Text style={{
        fontSize: 60,
        fontFamily: 'poppins-bold',
        textAlign:'center', 
        marginTop: 20,
        color: '#00b4d8'
      }}>Create
      </Text>
      <Text style={{
        fontSize: 60,
        fontFamily: 'poppins-thin',
        textAlign:'center', 
        marginTop: -40,
        color: '#00b4d8'
      }}>Account
      </Text>
      <Text style={{
        fontSize: 12,
        fontFamily: 'poppins-bold',
        textAlign:'center', 
        marginTop:-20,
        color: '#00b4d8'
      }}> Please signup to continue
      </Text>
      <ScrollView>
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
          }>Email Address
          </Text>
          <TextInput
          style={styles.input}
          onChangeText={setEmailAddressText}
          value={emailaddress}
          keyboardType={"email-address"}
          placeholder={"  Your email address"}
          autoCapitalize={"none"}
          error={errors.emailaddress !== undefined}
          />
          {errors.emailaddress &&

          <Text style= {{marginVertical:5, color: 'pink'}}>
            {errors.emailaddress}
          </Text>
}
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
          marginBottom: 20
        }}>
          <Text style={styles.textStyle
          }>Confirm Password
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setConfirmPassword}
          value={confirmpassword}
          keyboardType={"visible-password"}
          placeholder={"  Your password"}
          secureTextEntry={true}
          />


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
        </ScrollView>
        </View>
        </Formik>
        </ViewWithLoading>
      
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
      