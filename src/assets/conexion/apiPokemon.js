const BASE_URL = "https://pokeapi.co/api/v2/";
const BASE_URL_POKEMON = "https://pokeapi.co/api/v2/pokemon/";
export async function getPokemonList(endpoint) {
  try {
    const response = await fetch(BASE_URL + endpoint);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getPokemon(endpoint) {
    try {
      const response = await fetch(BASE_URL_POKEMON + endpoint);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.log(error);
      return [];
    }
  }