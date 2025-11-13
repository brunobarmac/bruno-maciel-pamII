import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [mensagem, setMensagem] = useState('Clique no botão abaixo');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{mensagem}</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => setMensagem('Você clicou! 😄')}
      >
        <Text style={styles.textoBotao}>Toque aqui</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
