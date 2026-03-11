import { useEffect, useState } from "react";
import { ScrollView, TextInput } from "react-native";
import PokemonCard from "../components/PokemonCard";

interface Pokemon {
  name: string;
  url: string;
}

export default function Index() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

      const response = await fetch(URL);

      const data = await response.json();

      setPokemons(data.results);
      setFilteredPokemons(data.results);
    } catch (error) {
      console.log("Error fetching pokemons:", error);
    }
  };

  const filterPokemon = (text: string) => {
    const arrayFiltered = pokemons.filter((pokemon) =>
      pokemon.name.includes(text.toLowerCase()),
    );

    setFilteredPokemons(arrayFiltered);
  };

  return (
    <ScrollView>
      <TextInput
        placeholder="Buscar pokemon..."
        onChangeText={filterPokemon}
        style={{
          borderWidth: 1,
          margin: 10,
          padding: 10,
        }}
      />

      {filteredPokemons.map((item) => (
        <PokemonCard key={item.name} name={item.name} url={item.url} />
      ))}
    </ScrollView>
  );
}