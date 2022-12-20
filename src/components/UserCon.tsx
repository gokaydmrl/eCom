import React, { Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
const UserCon: React.FC<PropsWithChildren> = ({ children }) => {
  //  const [userCon, setUserCon] = useState(useContext(UserContext));
  const [isLogged, setIsLogged] = useState(false);
  console.log("this usercon", UserContext.Provider);
  // const { isLogged, setIsLogged } = useContext(UserContext);
  console.log("userLogged.isLogged", isLogged);
  // const x = setIsLogged(true);
  // console.log("x", x);

  interface Value {
    isLogged: boolean;
    setIsLogged: Dispatch<SetStateAction<boolean>>;
  }
  const value: Value = { isLogged, setIsLogged };

  return (
    <div>
      <UserContext.Provider value={value}>
        {children}
        {/* <div>{isLogged ? "true" : "false"}</div>
        <button
          onClick={() => {
            return setIsLogged(true);
          }}>
          bas
        </button> */}
      </UserContext.Provider>
    </div>
  );
};

export default UserCon;
