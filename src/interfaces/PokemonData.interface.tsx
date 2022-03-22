interface Value {
  type: string;
  value: string;
}

interface Damage {
  name: string;
  text: string;
  damage: string;
  convertedEnergyCost: string;
}

interface Data {
  id: string;
  name: string;
  types: [string];
  images: Images;
  resistances: Value[];
  weaknesses: Value[];
  attacks: Damage[];
}

type PokemonData = {
  data: Data;
};

type Images = {
  small: string;
  large: string;
};

export default PokemonData;
