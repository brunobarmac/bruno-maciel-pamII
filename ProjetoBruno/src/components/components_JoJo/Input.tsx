import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface InputProps {
  placeholder: string;
  valor: string;
  onChange: (texto: string) => void;
}

export default function Input({ placeholder, valor, onChange }: InputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={valor}
      onChangeText={onChange}
    />
  );
}

const styles = StyleSheet.create({
  input: { borderWidth: 1, borderColor: '#CCC', padding: 10, borderRadius: 5, marginBottom: 10, backgroundColor: '#FFF' }
});