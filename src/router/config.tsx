// config.tsx

import Layout from "@/pages/Layout";
import Home from "@/pages/Home";
import BottleDepot from "@/pages/BottleDepot";
import General from "@/pages/General";
import MetalDisposal from "@/pages/MetalDisposal";
import PageNotFound from "@/pages/PageNotFound";
import ItemPage from "@/pages/ItemPage";
import ClothingDonations from "@/pages/ClothingDonations";

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
      },
      {
        path: "clothing-donations", // URL: /clothing-donations
        element: <ClothingDonations />,
      },
      {
        path: "item/:item",
        element: <ItemPage />,
      },
      {
        path: "*", // 404 route under Layout
        element: <PageNotFound />,
      },
    ],
  },
];
