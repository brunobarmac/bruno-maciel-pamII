import { Link } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "@/components/styles";

// 2. Função principal embaixo
export default function Estudos() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      
      <Text style={styles.title}>Fórmulas de Física ⚛️</Text>
      <Text style={styles.subtitle}>Sua revisão rápida para as provas</Text>

      {/* Card 1 */}
      <View style={styles.conteiner}>
        <Text style={styles.conteinerText}>Movimento Uniformemente Variado (MUV)</Text>
        <Image 
          source={{ uri: "https://cursoenemgratuito.com.br/app/uploads/2018/11/formul%C3%A1rio-de-m.u.v.-movimento-uniformemente-variado-300x300.jpg" }} 
          style={styles.image} 
          resizeMode="contain"
        />
      </View>

      {/* Card 2 */}
      <View style={styles.conteiner}>
        <Text style={styles.conteinerText}>Movimento Uniforme (MU)</Text>
        <Image 
          source={{ uri: "https://www.sofisica.com.br/conteudos/Mecanica/Cinematica/figuras/mu1.GIF" }} 
          style={styles.image} 
          resizeMode="contain"
        />
      </View>


      {/* Card 4 */}
      <View style={styles.conteiner}>
        <Text style={styles.conteinerText}>Lançamento Vertical</Text>
        <Text style={styles.subtitle}>(Velocidade Inicial): É a força/impulso que você deu ao objeto no momento exato em que ele saiu da sua mão.
             Sem essa velocidade inicial, o objeto não subiria; ele apenas cairia.</Text>
        <Image 
          source={{ uri: "https://cursoenemgratuito.com.br/app/uploads/2018/11/formul%C3%A1rio-de-lan%C3%A7amento-vertical-300x300.jpg" }} 
          style={styles.image} 
          resizeMode="contain"
        />
      </View>

      {/* Card 5 */}
      <View style={styles.conteiner}>
        <Text style={styles.conteinerText}>Lançamento Horizontal</Text>
        <Image 
          source={{ uri: "https://cursoenemgratuito.com.br/app/uploads/2018/11/formul%C3%A1rio-de-lan%C3%A7amento-horizontal-300x300.jpg" }} 
          style={styles.image} 
          resizeMode="contain"
        />
      </View>

      {/* Card 6 */}
      <View style={styles.conteiner}>
        <Text style={styles.conteinerText}>Gases Perfeitos (Clapeyron)</Text>
        <Image 
          source={{ uri: "https://cursoenemgratuito.com.br/app/uploads/2018/11/formul%C3%A1rio-de-gases-perfeitos-300x300.jpg" }} 
          style={styles.image} 
          resizeMode="contain"
        />
      </View>

      {/* Card 7 */}
      <View style={styles.conteiner}>
        <Text style={styles.conteinerText}>Calor Específico (Sensível)</Text>
        <Image 
          source={{ uri: "https://cursoenemgratuito.com.br/app/uploads/2018/11/formul%C3%A1rio-de-calor-espec%C3%ADfico-300x300.jpg" }} 
          style={styles.image} 
          resizeMode="contain"
        />
      </View>

      {/* Card 8 */}
      <View style={styles.conteiner}>
        <Text style={styles.conteinerText}>Calor Latente</Text>
        <Image 
          source={{ uri: "https://cursoenemgratuito.com.br/app/uploads/2018/11/formul%C3%A1rio-de-calor-latente-300x300.jpg" }} 
          style={styles.image} 
          resizeMode="contain"
        />
      </View>
      
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
       <Link href="/musica" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Voltar para o Menu</Text>
        </TouchableOpacity>
      </Link>
    </ScrollView>
  );
}