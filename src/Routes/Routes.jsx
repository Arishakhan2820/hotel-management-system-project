
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Main from "../Layout/Main";
import AboutPage from "../Pages/AboutPage";
import Layout2 from "../Layout/Layout2";
import Home2 from "../Pages/Home2";
import Layout3 from "../Layout/Layout3";
import Home3 from "../Pages/Home3";
import DestinationPage from "../Pages/DestinationPage";
import ActivitiesPage from "../Pages/ActivitiesPage";
import ActivitiesDetailsPage from "../Pages/ActivitiesDetailsPage";
import TeamPage from "../Pages/TeamPage";
import TeamDetailsPage from "../Pages/TeamDetailsPage";
import ContactPage from "../Pages/ContactPage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LoginPage
  },
  {
    path: "/register",
    Component: RegisterPage
  },
  {
    path: "/home",
    Component: Layout3,
    children: [
      {
        index: true,
        Component: Home3
      },
      {
        path: "home2",
        Component: Home2
      },
      {
        path: "about",
        Component: AboutPage
      },
      {
        path: "destination",
        Component: DestinationPage
      },
      {
        path: "activities",
        Component: ActivitiesPage
      },
      {
        path: "activities/activities-details",
        Component: ActivitiesDetailsPage
      },
      {
        path: "team",
        Component: TeamPage
      },
      {
        path: "team/team-details",
        Component: TeamDetailsPage
      },
      {
        path: "contact",
        Component: ContactPage
      },
    ],
  },
  {
    path: '/landing-main',
    Component: Main,
    children: [
      {
        index: true,
        Component: Home3,
      },
    ],
  },
  {
    path: '/home-layout2',
    Component: Layout2,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);