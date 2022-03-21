interface Pokemon {
  id?: string;
  name?: string;
  types?: [string];
  imageUrl?: string;
}

type PokemonList = {
  cards: Pokemon[];
};

export default PokemonList;
