import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [results, setResults] = useState<any[]>([]);
  useEffect(() => {
    console.log("Entre en pantalla");
  }, []);

  const getPokemons = async () => {
    try {
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=10000";
      const response = await fetch(URL, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        setResults(data.results);
      } else {
        console.log("Request bad");
      }
    } catch (error) {
      console.log("Error en la petición");
    }
  };

  return (
    <View>
      {results.map((item) => {
        return <Text key={item.name}>{item.name}</Text>;
      })}
    </View>
  );
}
