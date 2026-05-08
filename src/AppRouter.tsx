import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import MainLayout from "./components/layout/MainLayout";
import { ROUTES } from "./constants/routes";
import MovieDetails from "./pages/MovieDetails";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
           <Route path="/movie/:id" element={<MovieDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
