import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from '../Layouts/Home';
import Root from '../Root/Root';
import About from '../Components/AboutCmp';
import HobbyHub from '../Components/ProjectDetails/HobbyHub';
import CareForce from '../Components/ProjectDetails/CareForce';
import EnglishJanala from '../Components/ProjectDetails/EnglishJanala';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
        {
            index:true,
            Component:Home
        },
        {
          path:'projects/hobby-hub',
          Component:HobbyHub
        },
        {
          path:'projects/care-force',
          Component:CareForce
        },
        {
          path:'projects/english-janala',
          Component:EnglishJanala
        }
    ]
  },
]);
export default router;