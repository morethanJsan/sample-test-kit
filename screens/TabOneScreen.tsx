import React from "react";
import { View, Text, Image, Dimensions } from "react-native";

export default function TabOneScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FDD8F7',
        justifyContent: 'center',
        paddingHorizontal: 20
      }}
    >


      <View style={{
        flex: 1,
        marginTop: 50,
      }}>
         <Image
      style={{
      height: '75%',
      width: '100%',
      resizeMode: 'center'
      
    }}
    source={{uri:'https://cdn-icons-png.flaticon.com/512/187/187879.png'}}
  />

      </View>


      <Text style={{
        fontSize: 50,
        textAlign: "center", 
        marginBottom: 50,
        color: '#3d6d8d'
    
      
      }}>Welcome!
      </Text>
      <View style={{
        flex: 1,
      }}>
        <View style={{
          flex: 0
        }}>
          <Text style={{
          
            textAlign: "center",
            fontFamily: 'poppins-bold',
            fontSize: 20,
            color: '#3d6d8d'
          }}>Username
          </Text>
          <View style={{
            height: 40,
            width: '100%',
            marginBottom: 30,
            borderWidth: 1,
            borderRadius: 20,
            justifyContent: "center",
            
          }}>

          </View>
        </View>

        <View style={{
          flex: 0,
          marginBottom: 20
        }}>
          <Text style={{
          
          textAlign: "center",
          fontFamily: 'poppins-bold',
          fontSize: 20,
          color: '#3d6d8d'
        }}>Password
        </Text>
          <View style={{
            height: 40,
            width: '100%',
            borderWidth: 1,
            borderRadius: 20,
            
          }}>

          </View>
        </View>
        <View style={{
          flex: 0,
        }}>

          <View style={{
            flex: 0
          }}>
            <View style={{
              height: 50,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              backgroundColor: '#2381EE'
            
            }}>
              <Text style={{
                fontSize: 18,
                color: '#fff'
              }}>
                Login
              </Text>
            </View>
          </View>
        </View>

      </View>
      <View style={{
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingBottom: 20,
        
      }}>
        <Text style={{
          fontSize: 14

        }}>
          Don't have an account? Sign up!
        </Text>
      </View>
    </View>
  );
}
