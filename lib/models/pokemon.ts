// https://pokeapi.co/docs/v2#pokemon

interface Ability {
  id: number;
  name: string;
  is_main_series: boolean;
}

interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: Ability;
}

interface PokemonForm {
  id: number;
  name: string;
  order: number;
  form_order: number;
  is_default: number;
  is_battle_only: boolean;
  is_mega: boolean;
  form_name: string;
}

interface PokemonMove {
  move: {
    id: number;
    name: string;
    accuracy: number;
    effect_chance: number;
    pp: number;
    priority: number;
    power: number;
  }
  version_group_details: any;
}

interface PokemonSprites {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
}

interface PokemonStats {
  stat: {
    id: number;
    name: string;
    is_battle_only: boolean;
  }
  effort: number;
  base_stat: number;
}

interface PokemonType {
  slot: number;
  type: {
    id: number;
    name: string;
  }
}

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: PokemonForm[];
  location_area_encounters: string;
  moves: PokemonMove[];
  sprites: PokemonSprites;
  stats: PokemonStats[];
  types: PokemonType[];
}

