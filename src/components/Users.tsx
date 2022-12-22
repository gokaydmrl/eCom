import React, { useState } from "react";
import "../App.css";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  type LoaderDataType = {
    id: number;
    name: string;
  };

  // type loaderHook = () => LoaderDataType[];

  const [loaderData, setLoaderData] = useState([]);
  const data = useLoaderData() as LoaderDataType[];
  console.log("data", data);

  return (
    <div>
      {data.map((d: LoaderDataType) => {
        return <div key={d.id}>{d.name}</div>;
      })}
    </div>
  );
};

export default Users;
