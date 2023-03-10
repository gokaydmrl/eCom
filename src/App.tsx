import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hello from "./components/Hello";
import Login from "./components/Login";
import PrivateRoutes from "./components/Protected";
import { UserContext } from "./context/UserContext";
function App() {
  const x = useContext(UserContext);
  console.log("app x", x);

  return (
    <>
      <button onClick={() => x.setIsLogged(true)}>click to true</button>
      <p>{x.isLogged ? "true" : "false"}</p>
      <Hello />
    </>
    // <Router>
    //   <Routes>
    //     <Route element={<PrivateRoutes />}>
    //       <Route path="/hello" element={<Hello />} />
    //     </Route>
    //     <Route path="/login" element={<Login />} />
    //   </Routes>
    // </Router>
  );
}
export default App;
