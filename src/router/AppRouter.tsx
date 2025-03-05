import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES_CONFIG } from "./config";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES_CONFIG.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.component}
          ></Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
