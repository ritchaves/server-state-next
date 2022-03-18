import { NextPage } from "next";
import { useQuery } from "react-query";
import { Pokemon } from "../../../lib/models/pokemon";

const randomNumber = Math.floor(Math.random() * 200);

const fetchPost = () =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`).then((res) =>
    res.json()
  );

const WithSelector: NextPage = () => {
  const { isLoading, error, data } = useQuery<Pokemon, Error, any>(
    "pokiSelect",
    fetchPost,
    {
      select: (data: Pokemon) => ({
        name: data?.name,
        subscribers_count: data.moves,
      }),
    }
  );

  if (isLoading) return <>Loading...</>;

  if (error) return <>An error has occurred: ${error.message}</>;

  return (
    <div>
      Selector:
      {data.name} {data.moves}
    </div>
  );
};

export default WithSelector;
