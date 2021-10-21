import { Platform, StatusBar } from "react-native";
import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from "react-native";

export default function instalog () {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor= "#b6151a" translucent={false}/>

      <Image
      source={require('./src/assets/logo.png')}
      style={styles.logo}
      />

      <TextInput
      placeholder="Celular, username ou e-mail"
      style={styles.input}
      />

      <TextInput
      placeholder="Sua senha"
      style={styles.input}
      />

      <View style={styles.forgotcontainer}/>
      <TouchableOpacity>
        <Text style={styles.forgotText}> Esqueceu sua senha? </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}> Acessar</Text>
      </TouchableOpacity>

      <View style={styles.forgotcontainer}/>
      <TouchableOpacity>
        <Text style={styles.forgotText}> Acessar como Bruno </Text>
      </TouchableOpacity>
        

      </View>      

  
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    

  },
  logo: {
    marginTop: Platform.OS === 'android' ? '50%' : '20%',
    marginBottom: Platform.OS === 'android' ? '4%': '15%',
  },
  input: {
    width: '90%',
    height: 42,
    backgroundColor: '#F5F5F5',
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff'
  },
  forgotcontainer: {
    width: '90%',
    alignItems: 'flex-end'
  },
  forgotText: {
    color: '#b6151a',
    
    
  },
  loginButton: {
    marginTop: '4%',
    marginVertical: '4%',
    backgroundColor: '#b6151a',
    width: '90%',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  loginText: {
  color: '#fff',
  fontSize: 16
  },

  divisor: {
    marginTop: '9%',
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center'

  },
  divisorLine: {
    width: '42%',
    height: 1,
    backgroundColor: '#b6151a',
    borderRadius: 5,
  },
});