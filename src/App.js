import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch , Routes} from 'react-router-dom';
// pages
import Home from "./components/pages/home-page";
import Layout from "./components/AuthRoute/layout";
import ProductPage from "./components/productPage/productPage";
import ComputerPage from "./components/pages/computer-page";
import BasketPage from "./components/pages/basket-page";
import AdminPage from "./components/pages/admin-page";
import RequireAuth from "./components/AuthRoute/RequireAuth";
import Login from "./components/pages/login";
import ManagerPage from "./components/pages/manager-page";
import SelectedUserManagerPage from "./components/pages/SelectedUserManagerPage";
import Register from "./components/pages/register";
class App extends Component {
  render() {
    return (
      <>
        <Routes>
        <Route path="/" element={<Layout />}>

          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="/selectProduct/:id" element={<ProductPage />} />
          <Route path="/computer" element={<ComputerPage />} />
          <Route element={<RequireAuth allowedRoles={["USER"]} />}>
          <Route path="/basket" element={<BasketPage />} />
          </Route>


          <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
          <Route path="/adminPage" element={<AdminPage />} />
          </Route>


            {/* Protected  Manager Routes*/}
          <Route element={<RequireAuth allowedRoles={["MANAGER"]} />}>
          <Route path="/managerPage" element={<ManagerPage />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={["MANAGER"]} />}>
          <Route path="/managerPanel/selectedUser/:id" element={<SelectedUserManagerPage />} />
          </Route>

          <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Route>
        </Routes>
      </>
    );
  }
}
export default App;
