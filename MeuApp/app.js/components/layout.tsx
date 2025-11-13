import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, React Native!</Text>
      <Text style={styles.subtitle}>Esse é meu primeiro app com o Expo 🚀</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa a tela toda
    justifyContent: 'center', // centraliza verticalmente
    alignItems: 'center', // centraliza horizontalmente
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
});
