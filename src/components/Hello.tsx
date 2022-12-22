import { useContext } from "react";
import "../App.css";
import { UserContext } from "../context/UserContext";
const Hello = () => {
  const userCon = useContext(UserContext);
  console.log("hello", userCon);

  return (
    <>
      <p> HELL </p>
      <p>{userCon.isLogged ? "true" : "false"}</p>
    </>
  );
};
export default Hello;
