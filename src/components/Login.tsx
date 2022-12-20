import { useContext } from "react";
import "../App.css";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const userCon = useContext(UserContext);
  console.log("login userCon", userCon);

  return (
    <div>
      Login
      <div>
        <UserContext.Provider value={userCon}>
          {userCon.isLogged ? "true" : "false"}
        </UserContext.Provider>
      </div>
    </div>
  );
};

export default Login;
