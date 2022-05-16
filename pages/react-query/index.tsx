import { NextPage } from "next";
import Link from "next/link";

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
    "pokemon",
    fetchPost
  );

  if (isLoading) return <>Loading...</>;

  if (error) return <>An error has occurred: ${error.message}</>;

  return <Pokedex pokemon={data!} />;
};

const ReactQuery: NextPage = () => {
  return (
    <>
      <NormalQuery />
      <div className="col-start-2 col-end-3 row-start-3 flex justify-end">
        <Link href="/react-query/multiple-query">
          <a className="underline underline-offset-4 m-1">multiple query</a>
        </Link>
        <Link href="/react-query/selector">
          <a className="underline underline-offset-4 m-1">selector</a>
        </Link>
      </div>
    </>
  );
};

export default ReactQuery;
