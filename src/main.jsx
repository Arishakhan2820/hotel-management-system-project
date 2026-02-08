import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router";
import { router } from './Routes/Routes.jsx';
import { AuthProvider } from './context/AuthContext';
import "slick-carousel/slick/slick.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/main.css';

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);

