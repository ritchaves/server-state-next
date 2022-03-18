import { NextPage } from "next";

import { useQuery } from "react-query";
import Pokedex from "../../components/pokedex";
import { Pokemon } from "../../lib/models/pokemon";

const randomNumber = Math.floor(Math.random() * 200);

const fetchPost = () =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`).then((res) =>
    res.json()
  );

const NormalQuery: NextPage = () => {
  const { isLoading, error, data } = useQuery<boolean, Error, Pokemon>(
    "repoData",
    fetchPost
  );

  if (isLoading) return <>Loading...</>;

  if (error) return <>An error has occurred: ${error.message}</>;

  return <Pokedex pokemon={data!} />;
};

const ReactQuery: NextPage = () => {
  return <NormalQuery />;
};

export default ReactQuery;
