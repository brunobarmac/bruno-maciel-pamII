import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

// Importando os componentes (verifique se o caminho bate com as suas pastas)

import Botao from '../src/components/components_JoJo/Botao';
import Input from '../src/components/components_JoJo/Input';
import ModalAviso from '../src/components/components_JoJo/ModalAviso';
import Tabela from '../src/components/components_JoJo/Tabela';

// Mudamos o nome da função para Index!
export default function Index() {
  const [nome, setNome] = useState('');
  const [listaConvidados, setListaConvidados] = useState<string[]>(['Ana', 'Carlos']);
  const [modalAberto, setModalAberto] = useState(false);

  const adicionarConvidado = () => {
    if (nome.trim() !== '') {
      setListaConvidados([...listaConvidados, nome]);
      setNome('');
    }
  };

  const limparLista = () => {
    setListaConvidados([]);
    setModalAberto(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Festa do Fim de Semana 🎉</Text>

      <Input 
        placeholder="Digite o nome do convidado" 
        valor={nome} 
        onChange={setNome} 
      />

      <Botao 
        titulo="Adicionar na Lista" 
        onPress={adicionarConvidado} 
        cor="#28A745" 
      />

      <Tabela dados={listaConvidados} />

      <Botao 
        titulo="Limpar toda a lista" 
        onPress={() => setModalAberto(true)} 
        cor="#DC3545" 
      />

      <ModalAviso visivel={modalAberto}>
        <Text style={styles.textoModal}>Tem certeza que quer apagar todos?</Text>
        
        <View style={styles.botoesModal}>
          <Botao titulo="Sim, apagar" onPress={limparLista} cor="#DC3545" />
          <Botao titulo="Cancelar" onPress={() => setModalAberto(false)} cor="#6C757D" />
        </View>
      </ModalAviso>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F9F9F9', justifyContent: 'center' },
  titulo: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  textoModal: { fontSize: 16, marginBottom: 15, textAlign: 'center' },
  botoesModal: { flexDirection: 'row', gap: 10 } 
});