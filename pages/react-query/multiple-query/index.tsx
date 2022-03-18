import { NextPage } from "next";
import { useQueries } from "react-query";
import Pokedex from "../../../components/pokedex";

const fetchPost = (randomNumber: number) =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`).then((res) =>
    res.json()
  );

const MultipleQueries: NextPage = () => {
  const results = useQueries([
    { queryKey: ["poke", 1], queryFn: () => fetchPost(1) },
    { queryKey: ["poke", 2], queryFn: () => fetchPost(2) },
    { queryKey: ["poke", 3], queryFn: () => fetchPost(3) },
  ]);

  if (
    results?.[0]?.isLoading ||
    results?.[1]?.isLoading ||
    results?.[2]?.isLoading
  ) {
    return <>Loading...</>;
  }

  return (
    <>
      <div className="row-start-2 col-start-2">
        <h1 className="text-lg">Multiple Queries:</h1>
        <Pokedex pokemon={results?.[0]?.data} />
        <Pokedex pokemon={results?.[1]?.data} />
        <Pokedex pokemon={results?.[2]?.data} />
      </div>
    </>
  );
};

export default MultipleQueries;
