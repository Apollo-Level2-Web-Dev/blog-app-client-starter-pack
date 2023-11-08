import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from './pages/Signup/Signup';
import Signin from './pages/Signin/Signin';
import Posts from './pages/Post/Posts';

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Signin></Signin>
  },
  {
    path: "/posts",
    element: <Posts />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
