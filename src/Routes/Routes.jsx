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
import ErrorF2F from "../Pages/ErrorF2F/ErrorF2F.jsx";
import Artifacts from "../Pages/Home/Artifacts.jsx";
import Contact from "../Pages/Contact.jsx";

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
            loader: () => fetch("https://assignment-11-server-nu-steel.vercel.app/artifacts"),
            errorElement: <ErrorF2F></ErrorF2F>,
          },
        ],
      },
      {
        path: "/all-artifacts",
        element: <AllArtifacts />,
        loader: () => fetch("https://assignment-11-server-nu-steel.vercel.app/all-artifacts"),
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
        path: `/artifact-details/:id`,
        element: (
          <PrivateRoutes>
            <ArtifactPage />
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
      {
        path: "/contacts",
        element:<Contact/>
      }
      
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default Routes;
