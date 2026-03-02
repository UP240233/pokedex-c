import { use, useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {
  useEffect(() => {
    console.log("Entre en pantalla")
  }, []);

  const getPokemons =  async () => {
    try {
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=10";
      const response = await fetch(URL, {
        method: "GET",
      });
      if (response.ok) {      const data = await response.json();
        console.log("Request ok");
      } else {
        console.log("Request bad");
      }
    } catch (error) {     
      console.log("Error en la petición", error);
    }
  };

  return (
    <View>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
