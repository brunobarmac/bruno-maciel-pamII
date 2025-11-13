import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Você clicou {contador} vezes</Text>
      <Button
        title="Clique aqui"
        onPress={() => setContador(contador + 1)}
        color="#6200ee"
      />
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
    fontSize: 22,
    marginBottom: 10,
  },
});
