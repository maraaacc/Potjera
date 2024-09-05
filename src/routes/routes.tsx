import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Board } from "../components/Board";
import { Informations } from "../components/Informations";
import { Questions } from "../components/Questions";
import { Registration } from "../components/Registration";
import { BoardLayout } from "../layouts/BoardLayout";
import { MainLayout } from "../layouts/MainLayout";

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
        path: "minuta_znanja",
        element: <Questions />,
      },
    ],
  },
  {
    path: "/",
    element: <BoardLayout />,
    errorElement: <>Error page</>,
    children: [
      {
        path: "ploca",
        element: <Board />,
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
