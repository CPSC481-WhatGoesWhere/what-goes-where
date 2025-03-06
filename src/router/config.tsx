
// config.tsx


import Layout from "@/pages/Layout";
import Home from "@/pages/Home";
import BottleDepot from "@/pages/BottleDepot";
import General from "@/pages/General";
import MetalDisposal from "@/pages/MetalDisposal";
import PageNotFound from "@/pages/PageNotFound";

export const ROUTES_CONFIG = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // This makes it so that "/" will rout to home
        element: <Home />,
      },
      {
        path: "bottle-depot", // URL: /bottle-depot
        element: <BottleDepot />,
      },
      {
        path: "general", // URL: /general
        element: <General />,
      },
      {
        path: "metal-disposal", // URL: /metal-disposal
        element: <MetalDisposal />,
      }
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];