const BASE_URL = "https://pokeapi.co/api/v2/";

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