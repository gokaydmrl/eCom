import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hello from "./components/Hello";
import Login from "./components/Login";
import PrivateRoutes from "./components/Protected";
function App() {
  return (
    <>
    hey
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
