import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Alert, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const [termsChecked, setTermsChecked] = useState(false);
  const rotateValue = new Animated.Value(0);

  const handleRegister = () => {
    if (!termsChecked) {
      Alert.alert('Heyyy !! ', 'Debes aceptar los términos y condiciones para registrarte.');
    } else {
      Alert.alert('Logro Completado !!', '¡Humano, te has registrado correctamente!');
    }
  };

  const startRotationAnimation = () => {
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 3000, 
        useNativeDriver: true,
      })
    ).start();
  };

  useEffect(() => {
    startRotationAnimation();
  }, []);

  const rotateInterpolate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/image/01.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.iconContainer}>
          <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
            <Ionicons name="logo-xbox" size={80} color="black" />
          </Animated.View>
          <Text style={styles.title}>Registro</Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={24} color="rgb(244, 52, 52)" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              autoCapitalize="words"
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={24} color="rgb(244, 52, 52)" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Correo electrónico"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={24} color="rgb(244, 52, 52)" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              secureTextEntry
            />
          </View>
          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
          <Text></Text>
          <View style={styles.checkboxContainer}>
            <TouchableOpacity onPress={() => setTermsChecked(!termsChecked)}>
              <Ionicons
                name={termsChecked ? 'checkbox' : 'checkbox-outline'}
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <Text style={styles.checkboxLabel}>Acepto los términos y condiciones</Text>
          </View>
          <View style={styles.divider} />
          <Text style={styles.socialText}>o regístrate usando :</Text>
        
          <View style={styles.socialIconContainer}>
            <TouchableOpacity style={styles.socialIcon}>
              <FontAwesome name="facebook" size={24} color="#f50000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <FontAwesome name="twitter" size={24} color="#87ff5c" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <FontAwesome name="google" size={24} color="#f7ff5c" />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  contentContainer: {
    backgroundColor: 'hsla(59, 6%, 96%, 0.32)',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxWidth: 400,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 40,
    borderColor: 'hsla(59, 100%, 0%, 0.51)',
    borderWidth: 3,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: 'black',
  },
  registerButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#ff5e3a',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxLabel: {
    fontSize: 16,
    marginLeft: 5,
  },
  socialIconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 1,
  },
  socialIcon: {
    backgroundColor: '#000000',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginHorizontal: 10,
  },
  socialText: {
    marginBottom: 10,
    textAlign: 'center'
  },
  divider: {
    borderBottomColor: '#0a0101',
    borderBottomWidth: 2,
    marginVertical: 5,
    marginHorizontal: 20
  }
});
