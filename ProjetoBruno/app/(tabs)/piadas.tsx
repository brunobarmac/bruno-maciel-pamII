import { styles } from "@/components/styles";
import { Link } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Piadas() {
    return (
        <ScrollView>
        <View style={styles.conteiner}>
        <Text style={styles.title}>Página de Piadas</Text>
        <Text style={styles.lyrics}>Três homens morrem em um acidente e chegam às portas do céu. São Pedro os recebe e explica a regra local: {'\n'}
— Meus filhos, aqui o veículo que vocês receberão para circular pela eternidade depende do quão fiéis vocês foram às suas esposas na Terra. {'\n'}
{'\n'}
São Pedro se vira para o primeiro homem e pergunta: {'\n'}
— E você? Quantas vezes traiu sua mulher? {'\n'}
O homem, meio sem jeito, responde: {'\n'}
— Ah, São Pedro... eu dei umas escorregadas. Foram umas 10 vezes. {'\n'}
São Pedro balança a cabeça, decepcionado, e entrega a ele as chaves de um Fusquinha 1970 todo enferrujado: {'\n'}
— Pode levar. É esse o seu transporte. {'\n'}
{'\n'}
Aí chega o segundo homem: {'\n'}
— E você? {'\n'}
— Olha, São Pedro, eu fui quase um santo. Só traí minha esposa uma única vez, num momento de fraqueza. {'\n'}
São Pedro faz um sinal positivo e entrega a ele as chaves de uma BMW zerada: {'\n'}
— Muito bem, um erro só é perdoável. Aqui estão suas chaves. {'\n'}
{'\n'}
Por fim, chega o terceiro homem. Ele estufa o peito e diz: {'\n'}
— São Pedro, eu nunca, em 40 anos de casado, olhei para outra mulher. Fui absolutamente fiel até o último suspiro! {'\n'}
São Pedro fica impressionado, abre um sorriso enorme e entrega as chaves de uma Ferrari vermelha, conversível, edição limitada: {'\n'}
— Você é um exemplo! Vá e aproveite o paraíso com estilo! {'\n'}
{'\n'}
Algumas semanas depois, o cara da BMW e o cara do Fusca estão dirigindo por uma nuvem quando veem o homem da Ferrari parado no acostamento, chorando copiosamente, com a cabeça encostada no volante. Eles param para consolar o amigo: {'\n'}
— Poxa, cara, o que houve? Você tem o melhor carro do céu! Por que está chorando assim? {'\n'}
{'\n'}
O homem da Ferrari levanta a cabeça, com os olhos vermelhos de tanto chorar, e diz: {'\n'}
— É que eu acabei de cruzar com a minha esposa lá atrás... {'\n'}
— E daí? Ela está bem? {'\n'}
— Ela está andando de patinete! {'\n'}
</Text>
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

      <Link href="/estudos" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Voltar para o Menu</Text>
        </TouchableOpacity>
      </Link>

          </ScrollView>
);
}