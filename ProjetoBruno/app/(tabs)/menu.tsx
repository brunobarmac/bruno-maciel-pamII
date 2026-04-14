import { styles } from "@/components/styles";
import { Link } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';


export default function Home() {
  return (
    <View style={styles.conteiner}>
      <Text style={styles.title}>Menu Principal</Text>
      <Text style={styles.subtitle}>Para onde vamos agora?</Text>

      {/* Botão 1 */}
      <Link href="/musica" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Música Favorita</Text>
        </TouchableOpacity>
      </Link>

      {/* Botão 2 */}
      <Link href="/estudos" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Simulados e Estudos</Text>
        </TouchableOpacity>
      </Link>

      {/* Botão 3 */}
      <Link href="/piadas" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Pagina de piadas</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
