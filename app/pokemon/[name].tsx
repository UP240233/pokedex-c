import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function PokemonDetailScreen() {
  const params = useLocalSearchParams()
  const [pokemonData, setPokemonData] = useState(null)

  useEffect(() => {
    getPokemonData()
  }, [])

  const getPokemonData = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${params.name}`
      )
      const json = await response.json()
      setPokemonData(json)
    } catch (error) {
      console.log('Error al obtener el pokemon:', error)
    }
  }

  return (
    <View style={{ padding: 20 }}>
      <Text>{params.name}</Text>

      <Text>
        {pokemonData
          ? JSON.stringify(pokemonData, null, 2)
          : 'Cargando...'}
      </Text>
    </View>
  )
}