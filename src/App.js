/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import { productsData } from "./api/api";
import SignIn from "./pages/SignIn";
import Registration from "./pages/Registration";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} loader={productsData}></Route>
        </Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
      </Route>
    )
  );
  return (
    <div className="font-bodyFont bg-gray-100 overflow-x-hidden">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
