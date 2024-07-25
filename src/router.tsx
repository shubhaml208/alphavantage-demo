import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "./App";
import Error from "./components/error/Error";
import Home from "./components/home/Home";
import { routes } from "./lib/routes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={routes.home} element={<App />} errorElement={<Error />}>
      <Route index element={<Home />} />
    </Route>
  )
);

export default router;
