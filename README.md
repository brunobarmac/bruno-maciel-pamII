# bruno-maciel-pami2
# 1. Planejar o que o app precisa fazer

Antes de codar, você pensa:

-   Mostrar um **display** (onde aparece o cálculo)
-   Ter vários **botões** (números, operadores, limpar, etc.)
-   Quando clicar:
    -   Atualizar a expressão
    -   Calcular o resultado

----------

#  2. Criar a estrutura básica do componente

Você começa com um componente funcional e os estados:

export  default  function  Index() {  
  const [expressao, setExpressao] =  useState<string>('');  
  const [resultado, setResultado] =  useState<string>('0');

 Aqui você define:

-   `expressao`: o que o usuário está digitando (ex: `2+3`)
-   `resultado`: o que aparece na tela

----------

#  3. Definir os botões do teclado

Você cria uma matriz com os botões:

const  linhasDeBotoes  = [  
 ['C', '(', ')', '÷'],  
 ['7', '8', '9', 'x'],  
 ['4', '5', '6', '-'],  
 ['1', '2', '3', '+'],  
 ['0', '.', '⌫', '=']  
];

 Isso facilita renderizar tudo automaticamente depois.

----------

#  4. Definir regras visuais (cores dos botões)

Você cria uma função:

const  obterCorFundo  = (botao: string): string => {

 Ela decide:

-   Vermelho → limpar (`C`)
-   Verde → resultado (`=`)
-   Laranja → operadores
-   Cinza → especiais
-   Escuro → números

----------

#  5. Criar o componente de botão

Você cria um componente reutilizável:

const  Botao: React.FC<BotaoProps> = ({ titulo, corFundo, corTexto }) => (

👉 Esse botão:

-   Mostra o texto
-   Aplica estilo
-   Chama a função quando clicado

onPress={() => lidarComToque(titulo)}

----------

#  6. Criar a lógica dos botões (parte mais importante)

Função principal:

const  lidarComToque  = (valor: string): void => {

Agora você trata cada tipo de botão:

----------

## 6.1 Botão "C" (limpar)

if (valor  ===  'C') {  
  setExpressao('');  
  setResultado('0');  
}

----------

##  6.2 Botão "⌫" (apagar)

else  if (valor  ===  '⌫') {

-   Remove o último caractere
-   Atualiza display

----------

##  6.3 Botão "=" (calcular)

else  if (valor  ===  '=') {

### Passos:

1.  Substitui símbolos:

.replace(/x/g, '*').replace(/÷/g, '/')

2.  Calcula:

eval(expressaoFormatada)

3.  Atualiza resultado
4.  Trata erro com `try/catch`

----------

##  6.4 Números e operadores

else {

Aqui você trata:

###  Evitar erros:

-   Não começar com operador (exceto `-`)
-   Não repetir operadores seguidos

if (operadores.includes(valor)) {

----------

#  7. Montar o layout (interface)

----------

##  7.1 Display

<View  style={styles.displayContainer}>  
  <Text>{resultado}</Text>  
</View>

Mostra o número grande no topo

----------

##  7.2 Teclado

{linhasDeBotoes.map((linha) => (

 Para cada linha:

-   Cria uma `View`
-   Dentro dela cria os botões

{linha.map((botao) => (  
  <Botao  ...  />  
))}

----------

#  8. Criar os estilos

Você define:

----------

##  Container

container: {  
  flex: 1,  
  backgroundColor: '#000000',  
}

----------

##  Display

textoDisplay: {  
  fontSize: 70,  
  color: '#ffffff',  
}

----------

##  Botões

botao: {  
  width: 80,  
  height: 80,  
  borderRadius: 40,  
}

👉 Isso deixa os botões redondos

----------

#  RESUMO FINAL (ordem ideal de construção)

Se você fosse fazer do zero:

1.  Criar o componente (`Index`)
2.  Criar os estados (`expressao` e `resultado`)
3.  Definir os botões (`linhasDeBotoes`)
4.  Criar função de cores (`obterCorFundo`)
5.  Criar componente `Botao`
6.  Criar função principal (`lidarComToque`)
7.  Montar o layout (display + teclado)
8.  Adicionar estilos
