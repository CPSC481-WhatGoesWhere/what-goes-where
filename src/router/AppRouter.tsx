
// AppRouter.tsx

import { useRoutes } from "react-router-dom";
import { ROUTES_CONFIG } from "./config";

function AppRouter() {
  const routing = useRoutes(ROUTES_CONFIG);
  return routing;
}

export default AppRouter;