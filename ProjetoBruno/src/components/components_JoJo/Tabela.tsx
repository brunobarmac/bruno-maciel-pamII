import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface TabelaProps {
  dados: string[]; // Recebe apenas uma lista simples de textos
}

export default function Tabela({ dados }: TabelaProps) {
  return (
    <View style={styles.tabela}>
      <Text style={styles.cabecalho}>Nomes na Lista</Text>
      
      {dados.map((item, index) => (
        <View key={index} style={styles.linha}>
          <Text>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  tabela: { borderWidth: 1, borderColor: '#DDD', borderRadius: 5, marginVertical: 10, backgroundColor: '#FFF' },
  cabecalho: { backgroundColor: '#EEE', padding: 10, fontWeight: 'bold', textAlign: 'center' },
  linha: { borderTopWidth: 1, borderColor: '#DDD', padding: 10 }
});