import { NextPage } from "next";
import { useQueries } from "react-query";

const fetchPost = () =>
  fetch("https://api.github.com/repos/tannerlinsley/react-query").then((res) =>
    res.json()
  );

const MultipleQueries: NextPage = () => {
  const results = useQueries([
    { queryKey: ["post", 1], queryFn: fetchPost },
    { queryKey: ["post", 2], queryFn: fetchPost },
  ]);

  return (
    <>
      Multiple Queries:
      <div style={{ display: "flex", flexDirection: "column" }}>
        {results?.[0]?.data?.name}
        <br />
        {results?.[1]?.data?.name}
      </div>
      {/* <ul>
      {results.map(
        ({ data }) => data && <li key={data.id}>{data.title})</li>
      )}
    </ul> */}
    </>
  );
};

export default MultipleQueries;
