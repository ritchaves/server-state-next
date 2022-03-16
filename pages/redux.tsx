import { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCall, RootState } from "./api/redux";

const Redux: NextPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.api.data);
  useEffect(() => {
    fetch("https://api.github.com/repos/vercel/swr").then((d) =>
      d.json().then((d) => dispatch(fetchCall(d)))
    );
  }, []);

  if (!data) return <>Loading...</>;
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👁 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
};

export default Redux;
