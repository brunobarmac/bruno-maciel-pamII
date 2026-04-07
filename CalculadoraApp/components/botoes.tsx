import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

// Interface que define as propriedades do componente Botao
export interface BotaoProps {
  titulo: string;        // Texto exibido no botão
  corFundo?: string;     // Cor de fundo opcional
  corTexto?: string;     // Cor do texto opcional
  onPress: (valor: string) => void; // Função chamada ao clicar
}

// Componente reutilizável de botão
const Botao: React.FC<BotaoProps> = ({
  titulo,
  corFundo = '#4b4b4b', // Cor padrão
  corTexto = '#ee0000'  // Cor padrão do texto
  , onPress
}) => (
  <TouchableOpacity
    style={[styles.botao, { backgroundColor: corFundo }]} // Aplica estilo e cor
    onPress={() => onPress(titulo)} // Chama função ao clicar
  >
    <Text style={[styles.textoBotao, { color: corTexto }]}>
      {titulo} {/* Texto do botão */}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  botao: {
    width: 80,
    height: 80,
    borderRadius: 50, // Botão redondo
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotao: {
    fontSize: 35,
    fontWeight: '600',
  },
});

export default Botao;