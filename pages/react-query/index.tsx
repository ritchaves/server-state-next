import { NextPage } from "next";

import { useQuery } from "react-query";

const fetchPost = () =>
  fetch("https://api.github.com/repos/tannerlinsley/react-query").then((res) =>
    res.json()
  );

const NormalQuery: NextPage = () => {
  const { isLoading, error, data } = useQuery<boolean, Error, any>(
    "repoData",
    fetchPost
  );

  if (isLoading) return <>Loading...</>;

  if (error) return <>An error has occurred: ${error.message}</>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
};

const ReactQuery: NextPage = () => {
  return (
    <div>
      <NormalQuery />
    </div>
  );
};

export default ReactQuery;
