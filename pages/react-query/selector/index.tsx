import { NextPage } from "next";
import { useQuery } from "react-query";

const fetchPost = () =>
  fetch("https://api.github.com/repos/tannerlinsley/react-query").then((res) =>
    res.json()
  );

const WithSelector: NextPage = () => {
  const { isLoading, error, data } = useQuery<boolean, Error, any>(
    "repoData",
    fetchPost,
    {
      select: (repoData: any) => ({
        name: repoData?.name,
        subscribers_count: repoData.subscribers_count,
      }),
    }
  );

  if (isLoading) return <>Loading...</>;

  if (error) return <>An error has occurred: ${error.message}</>;

  return (
    <div>
      Selector:
      {data.name} {data.subscribers_count}
    </div>
  );
};

export default WithSelector;
