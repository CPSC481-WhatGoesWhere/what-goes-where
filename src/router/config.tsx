import Home from "@/pages/Home";
import PageNotFound from "@/pages/PageNotFound";

export const ROUTES_CONFIG = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "*",
    component: <PageNotFound />,
  },
];
