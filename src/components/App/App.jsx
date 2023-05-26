import { SharedLayout } from "components/SharedLayout/SharedLayout";
import Home from "pages/Home";
import Movies from "pages/Movies";
import { Route, Routes } from "react-router-dom";

export const App = () => {

  return (
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
<Route index element={<Home/>} />
<Route path="movies" element={<Movies />}/>
      </Route>
    </Routes>
  );
};
