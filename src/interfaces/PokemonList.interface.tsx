interface Pokemon {
  id?: string;
  name?: string;
  types?: [string];
  images?: Images;
}

type Images = {
  small: string;
  large: string;
};

type PokemonList = {
  data: Pokemon[];
};

export default PokemonList;
