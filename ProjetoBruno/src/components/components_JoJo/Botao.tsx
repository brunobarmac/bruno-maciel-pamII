import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface BotaoProps {
  titulo: string;
  onPress: () => void;
  cor?: string; // Opcional (tem uma cor padrão se você não passar)
}

export default function Botao({ titulo, onPress, cor = '#007BFF' }: BotaoProps) {
  return (
    <TouchableOpacity style={[styles.botao, { backgroundColor: cor }]} onPress={onPress}>
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: { padding: 12, borderRadius: 5, alignItems: 'center', marginVertical: 5 },
  texto: { color: '#FFF', fontWeight: 'bold', fontSize: 16 }
});