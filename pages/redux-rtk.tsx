import Pokedex from "../components/pokedex";
import { useGetPokemonQuery } from "./api/redux";

const randomNumb = Math.floor(Math.random() * 300);
export default function ReduxRtk() {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetPokemonQuery(randomNumb);

  if (error) return <>An error has occurred.</>;
  if (isLoading) return <>Loading...</>;

  return <Pokedex pokemon={data!} />;
}
