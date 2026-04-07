import React, { ReactNode } from 'react';
import { Modal, StyleSheet, View } from 'react-native';

interface ModalProps {
  visivel: boolean;
  children: ReactNode; // Aceita botões e textos dentro dele
}

export default function ModalAviso({ visivel, children }: ModalProps) {
  return (
    <Modal visible={visivel} transparent animationType="fade">
      <View style={styles.fundo}>
        <View style={styles.caixa}>
          {children}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  fundo: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  caixa: { width: '80%', backgroundColor: '#FFF', padding: 20, borderRadius: 10, alignItems: 'center' }
});