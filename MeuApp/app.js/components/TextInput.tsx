import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite seu nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Bruno"
        value={nome}
        onChangeText={setNome}
      />
      <Text style={styles.output}>Olá, {nome || 'visitante'}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    borderRadius: 8,
    width: '80%',
    marginTop: 10,
  },
  output: {
    marginTop: 20,
    fontSize: 20,
    color: 'blue',
  },
});
