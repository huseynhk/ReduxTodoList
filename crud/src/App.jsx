import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import { ROUTER } from "./constant/Router";
import Counter from "./components/Counter";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";
import Detail from "./components/Detail";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={ROUTER.Home} exact element={<Home />} />
        <Route path={ROUTER.AddUser} element={<AddUser />} />
        <Route path={ROUTER.Detail + "/:userId"} element={<Detail />} />
        <Route path={ROUTER.UpdateUser + "/:userId"} element={<UpdateUser />} />
        <Route path={ROUTER.Counter}  element={<Counter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
