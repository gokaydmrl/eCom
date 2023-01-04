import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Lay from "./Lay";

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
    <Box>
      <Grid alignItems="center" justifyContent="center" >
        {data.map((d: LoaderDataType) => {
          return <div key={d.id}>{d.name}</div>;
        })}
        <br />
        <Lay />
      </Grid>

    </Box>
  );
};

export default Users;
