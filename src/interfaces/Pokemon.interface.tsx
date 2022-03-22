interface Dados {
  id?: string;
  name?: string;
  types?: [string];
  images?: Images;
}

type Images = {
  small: string;
  large: string;
};

type Pokemons = {
  data?: Dados[];
};

export default Pokemons;
