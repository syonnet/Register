import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function App() {

  const [termsChecked, setTermsChecked] = useState(false);

  const handleRegister = () => {
    if (!termsChecked) {
      Alert.alert('Error','Debes aceptar los términos y condiciones para registrarte.');
    } else {
      Alert.alert('Registro Exitoso', '¡Te has registrado correctamente!');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/image/01.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.iconContainer}>
          <Ionicons name="logo-xbox" size={80} color="black" />
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
        </View>
      </ImageBackground>
    </View>
  );
};

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
    borderWidth: 1,
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
});