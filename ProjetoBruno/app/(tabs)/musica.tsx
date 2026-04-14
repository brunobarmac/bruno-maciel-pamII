import { styles } from "@/components/styles";
import { useRoute } from '@react-navigation/native';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Função para enviar avaliação
function enviarAvaliacao() {
  Alert.alert('Sucesso', 'Avaliação enviada! Obrigado por compartilhar sua opinião.');
}

// Função principal
export default function Musica() {
  const route = useRoute(); // useRoute retorna informações da rota atual
  const [ritmo, setRitmo] = useState('');
  const [timbre, setTimbre] = useState('');
  const [emocao, setEmocao] = useState('');
  const [arranjo, setArranjo] = useState('');
  const [instrumentacao, setInstrumentacao] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      
      <Text style={styles.title}>Música</Text>
      <Text style={styles.subtitle}>Gerencie suas preferências</Text>
      <Text style={styles.subtitle}>Você está na rota: {route.name}</Text>
      
      <Image 
        source={{ uri: 'https://i.scdn.co/image/ab67616d0000b27376672289b62c60a5fafdb481' }} 
        style={styles.image} 
      />
      
      <Link href="https://open.spotify.com/" asChild>
        <TouchableOpacity>
          <Text style={styles.linkSpotify}>Abrir no Spotify</Text>
        </TouchableOpacity>
      </Link>
      
      <Text style={styles.lyrics}>
        É, às vezes a vida dá dessas{'\n'}
        Mas qual é a pressa, meu amor?{'\n'}
        Nosso futuro não é nenhum mistério{'\n'}
        Estaremos enterrados em algum cemitério{'\n'}
        Sei que um dia eu vou morrer{'\n'}
        Saiba que isso também vale pra você{'\n'}
        Mas enquanto esse dia não vem{'\n'}
        Quero passar todos os outros ao seu lado{'\n'}
        Meu bem, você precisa entender{'\n'}
        Que a minha vida só se torna tolerável com você{'\n'}
        Tem que concordar, enquanto nossa hora não chega{'\n'}
        A gente pode se beijar, pode aproveitar{'\n'}
        Enquanto nossa hora não chega, a gente pode se beijar
      </Text>

      <View style={styles.tableContainer}>
        <Text style={styles.title}>Avalie a Música</Text>
        <View style={styles.tableRow}>
          <Text style={styles.tableLabel}>Ritmo</Text>
          <TextInput
            style={styles.tableInput}
            placeholder="1-10"
            keyboardType="numeric"
            value={ritmo}
            onChangeText={setRitmo}
          />
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableLabel}>Timbre</Text>
          <TextInput
            style={styles.tableInput}
            placeholder="1-10"
            keyboardType="numeric"
            value={timbre}
            onChangeText={setTimbre}
          />
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableLabel}>Emoção Transmitida</Text>
          <TextInput
            style={styles.tableInput}
            placeholder="1-10"
            keyboardType="numeric"
            value={emocao}
            onChangeText={setEmocao}
          />
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableLabel}>Arranjo</Text>
          <TextInput
            style={styles.tableInput}
            placeholder="1-10"
            keyboardType="numeric"
            value={arranjo}
            onChangeText={setArranjo}
          />
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableLabel}>Instrumentação</Text>
          <TextInput
            style={styles.tableInput}
            placeholder="1-10"
            keyboardType="numeric"
            value={instrumentacao}
            onChangeText={setInstrumentacao}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.buttonAvaliacao} onPress={enviarAvaliacao}>
        <Text style={styles.buttonText}>Enviar Avaliação</Text>
      </TouchableOpacity>
        
      <Link href="/menu" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Voltar para o Menu</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/piadas" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Voltar para o Menu</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/estudos" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Voltar para o Menu</Text>
        </TouchableOpacity>
      </Link>
      
    </ScrollView>
  );
}