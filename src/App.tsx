import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Hello from "./components/Hello";
import Login from "./components/Login";
import Protected from "./components/Protected";

function App() {
  const [user, setUser] = useState<boolean>(false);
  console.log(user);

  return (
    <div className="App">
      <Router location={""} >
        <Routes>
          <Route element={<Protected />}>
            <Route element={<Hello />} path="/hello" />
          </Route>
          <Route element={<Login />} path="/login" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
