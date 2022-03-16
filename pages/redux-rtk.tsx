import { useGetPokemonByNameQuery } from "./api/redux";

export default function ReduxRtk() {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  if (error) return <>An error has occurred.</>;
  if (isLoading) return <>Loading...</>;

  return <>{data.name}</>;
}
