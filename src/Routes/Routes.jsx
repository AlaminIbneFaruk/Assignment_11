import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home.jsx";
import AllArtifacts from "../Pages/AllArtifacts/AllArtifacts.jsx";
import AddArtifacts from "../Pages/AddArtifacts/AddArtifacts.jsx";
import MyArtifactPage from "../Pages/MyArtifacts/MyArtifactPage.jsx";
import Login from "../Pages/Login/Login.jsx";
import Register from "../Pages/Register/Register.jsx";
import ErrorPage from "../Pages/ErrorPages/ErrorPage.jsx";
import Layout from "../Layout/Layout.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";
import ArtifactPage from "../Pages/ArtifactPage/ArtifactPage.jsx";
import LikedArtifacts from "../Pages/LikedArtifacts/LikedArtifacts.jsx";
import ErrorF2F from "../Pages/ErrorF2F/ErrorF2F.jsx";
import Artifacts from "../Pages/Home/Artifacts.jsx";
import UpdateArtifact from "../Pages/UpdateArtifact/UpdateArtifact.jsx";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <Artifacts />,
            loader: () => fetch("http://localhost:5000/artifacts"),
            errorElement: <ErrorF2F></ErrorF2F>,
          },
        ],
      },
      {
        path: "/all-artifacts",
        element: <AllArtifacts />,
        loader: () => fetch("http://localhost:5000/all-Artifacts"),
        errorElement: (
          <>
            <ErrorF2F></ErrorF2F>
          </>
        ),
      },
      {
        path: "/add-artifact",
        element: (
          <PrivateRoutes>
            <AddArtifacts />
          </PrivateRoutes>
        ),
      },
      {
        path: "/myartifacts/:userid",
        element: (
          <PrivateRoutes>
            <MyArtifactPage />
          </PrivateRoutes>
        ),
      },
      {
        path: "/liked-artifacts/:userid",
        element: (
          <PrivateRoutes>
            <LikedArtifacts />
          </PrivateRoutes>
        ),
      },
      {
        path: `/artifact-details/:id`,
        element: (
          <PrivateRoutes>
            <ArtifactPage />
          </PrivateRoutes>
        ),
      },
      {
        path: `/artifactupdate/:id`,
        element: (
          <PrivateRoutes>
            <UpdateArtifact />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default Routes;
