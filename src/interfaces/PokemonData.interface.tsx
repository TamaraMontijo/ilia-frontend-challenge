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
  imageUrl: string;
  resistances: Value[];
  weaknesses: Value[];
  attacks: Damage[];
}

type PokemonData = {
  card: Data;
};

export default PokemonData;
