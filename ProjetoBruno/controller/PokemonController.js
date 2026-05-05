import { Alert } from "react-native";
import { validarPokemon } from "../services/PokemonService";

let bancoFake = [];

export function cadastrarPokemon(nome, tipo) {
  const erro = validarPokemon(nome, tipo);

  if (erro) {
    Alert.alert("Erro", erro);
    return;
  }

  const novoPokemon = {
    id: bancoFake.length + 1,
    nome,
    tipo
  };

  bancoFake.push(novoPokemon);

  Alert.alert("Sucesso", "Pokémon cadastrado!");
  console.log(bancoFake);
}