import { styles } from "@/components/styles";
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Pokemon() {

  // "Banco de dados" fake
  const pokemons = [
    { id: 1, nome: "Pikachu", tipo: "Elétrico" },
    { id: 2, nome: "Charmander", tipo: "Fogo" },
    { id: 3, nome: "Squirtle", tipo: "Água" }
  ];

  // Model relacionada
  const ataque = {
    id: 101,
    pokemonId: 1,
    nome: "Choque do Trovão",
    dano: 90
  };

  const [idBusca, setIdBusca] = useState("");
  const [pokemonEncontrado, setPokemonEncontrado] = useState(null);

  const buscarPokemon = () => {
    const achou = pokemons.find(p => p.id == idBusca);
    setPokemonEncontrado(achou || null);
  };

  return (
    <View style={styles.conteiner}>
      <Text style={styles.title}>Pokédex</Text>

      {/* Formulário */}
      <Text>Digite o ID do Pokémon:</Text>

      <TextInput
        style={styles.tableInput}
        placeholder="Ex: 1"
        keyboardType="numeric"
        value={idBusca}
        onChangeText={setIdBusca}
      />

      <TouchableOpacity style={styles.button} onPress={buscarPokemon}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>

      {/* Dados puxados */}
      {pokemonEncontrado && (
        <View>
          <Text>ID: {pokemonEncontrado.id}</Text>
          <Text>Nome: {pokemonEncontrado.nome}</Text>
          <Text>Tipo: {pokemonEncontrado.tipo}</Text>

          {pokemonEncontrado.id === ataque.pokemonId && (
            <>
              <Text style={{ marginTop: 15, fontWeight: 'bold' }}>
                Ataque relacionado
              </Text>
              <Text>Nome: {ataque.nome}</Text>
              <Text>Dano: {ataque.dano}</Text>
            </>
          )}
        </View>
      )}
    </View>
  );
}