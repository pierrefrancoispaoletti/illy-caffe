import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Products from "../../pages/Products/Products";
import { selectCurrentUser } from "../../redux/reducers/User/selector";
import CategorySelector from "../CategorySelector/CategorySelector";
import Header from "../Header/Header";
import LocalMessage from "../LocalMessage/LocalMessage";
const App = () => {
  const user = useSelector(selectCurrentUser);
  return (
    <div>
      <Header />
      <LocalMessage />
      <CategorySelector />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`products/:category`} element={<Products />} />
        <Route
          path="connexion"
          element={user ? <Navigate replace to="/" /> : <Login />}
        />
      </Routes>
    </div>
  );
};

export default App;
