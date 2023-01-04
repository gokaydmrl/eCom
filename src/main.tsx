import "./App.css";
import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Hello from "./components/Hello";
import PrivateRoutes from "./components/Protected";
import Login from "./components/Login";
import UserCon from "./components/UserCon";
import Users from "./components/Users";
import Dialog from "./components/Dialog";
import Navbar from "./components/Navbar";
import { Box, Container, Stack } from "@mui/material";
import Footer from "./components/Footer";
import PrimaAppBar from "./components/PrimAppBar";
import NappBar from "./components/NappBar";
import DarkMode from "./components/DarkMode";
import ThemeCon from "./components/ThemeCon";
import { IThemeContext } from "./context/ThemeContext";
import MainParentComponent from "./components/MainParentComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoutes children={<App />} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/hello",
    element: <PrivateRoutes children={<Hello />} />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dialog",
    element: <Dialog />,
  },
  {
    path: "/users",
    element: <Users />,
    loader: () =>
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          return data;
        }),
  },
]);

// const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

// const props = {
//   isSignedIn: isSignedIn,
// };

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeCon>
      <MainParentComponent>
        <DarkMode />
        <Container fixed maxWidth="xl" sx={{ maxWidth: { sm: "xl" } }}>
          <PrimaAppBar />

          <Navbar />
          <NappBar />
          <Stack direction="column" justifyContent="space-between" spacing={2}>
            <UserCon>
              <RouterProvider router={router} />
            </UserCon>
          </Stack>
          <Footer />
        </Container>
      </MainParentComponent>
    </ThemeCon>

    {/* <App /> */}
  </React.StrictMode>
);
