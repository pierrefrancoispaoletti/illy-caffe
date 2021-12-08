import React, { lazy, Suspense, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router";
import { selectCurrentUser } from "../../redux/reducers/User/selector";
import CategorySelector from "../CategorySelector/CategorySelector";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import LocalMessage from "../LocalMessage/LocalMessage";
const Home = lazy(() => import("../../pages/Home/Home"));
const Login = lazy(() => import("../../pages/Login/Login"));
const Products = lazy(() => import("../../pages/Products/Products"));
const App = () => {
  const user = useSelector(selectCurrentUser);
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <Header />
      <LocalMessage />
      <CategorySelector />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={<Home loading={loading} setLoading={setLoading} />}
          />
          <Route
            path={`products/:category`}
            element={<Products loading={loading} setLoading={setLoading} />}
          />
          <Route
            path="connexion"
            element={
              user ? (
                <Navigate replace to="/" />
              ) : (
                <Login loading={loading} setLoading={setLoading} />
              )
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
