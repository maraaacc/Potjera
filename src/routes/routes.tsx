import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Informations } from "../components/Informations";
import { Registration } from "../components/Registration";
import { MainLayout } from "../layouts/MainLayout";

import { HomePage } from "../pages/HomePage";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <>Error page</>,
    children: [
      {
        path: "",
        element: <Registration />,
      },
      {
        path: "pravila",
        element: <Informations />,
      },
      {
        path: "kviz",
        element: <Informations />,
      },
    ],
  },
];
const router = createBrowserRouter(routes, {
  basename: "",
});

const Router = () => {
  return (
    <Suspense fallback={<>loading</>}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  );
};

export { Router };
