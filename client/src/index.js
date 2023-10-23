import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';
import AddStudent from './components/AddStudent/AddStudent';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter ([
   {
    path : "/",
    element : <Home/>
  },
  {
    path: "/addstudent",
    element: <AddStudent/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);


