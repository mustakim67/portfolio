import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from '../Layouts/Home';
import Root from '../Root/Root';
import About from '../Components/AboutCmp';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
        {
            index:true,
            Component:Home
        }
    ]
  },
]);
export default router;