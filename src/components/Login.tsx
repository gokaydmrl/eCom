import { useContext } from "react";
import "../App.css";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const userCon = useContext(UserContext);
  console.log("login userCon", userCon.isLogged);

  return (
    <div>
      Login
      <div>{userCon.isLogged ? "true" : "false"}</div>
    </div>
  );
};

export default Login;
