import { NextPage } from "next";
import useSWR from "swr";
import Pokedex from "../components/pokedex";
import { Pokemon } from "../lib/models/pokemon";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const randomNumber = Math.floor(Math.random() * 200);
const Swr: NextPage = () => {
  const { data, error } = useSWR<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${randomNumber}`,
    fetcher
  );

  if (error) return <>An error has occurred.</>;
  if (!data) return <>Loading...</>;
  return <Pokedex pokemon={data} />;
};

export default Swr;
