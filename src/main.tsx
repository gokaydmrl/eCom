import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Hello from "./components/Hello";
import Protected from "./components/Protected";
import Login from "./components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/hello",
    element: <Hello />,
  },
]);

// const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

// const props = {
//   isSignedIn: isSignedIn,
// };

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    {/* <BrowserRouter>
      <Routes>
        <Route element={<Protected />}>
          <Route path="/hello" element={<Hello />} />
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>
);
/*
 isSignedIn={isSignedIn} children={children} 
 */
