import { useLocales } from 'expo-localization';
import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

export function LanguageInfo() {
  const locales = useLocales();
  const { languageCode, regionCode, currencyCode } = locales[0];

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="defaultSemiBold">Configuração Detectada:</ThemedText>
      <ThemedText>Idioma: {languageCode}</ThemedText>
      <ThemedText>Região: {regionCode}</ThemedText>
      <ThemedText>Moeda: {currencyCode}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 12,
    marginTop: 10,
    gap: 4,
  },
});