import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import AuthLayout from "./../AuthLayout";
import MainLayout from "./../MainLayout";
import DetailsPage from "./pages/DetailsPage";
import VehiclePage from "./pages/VehiclePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";

export default function App() {
  const router = createBrowserRouter([
    {
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <LoginPage />,
        },
        {
          path: "/signUpPage",
          element: <SignUpPage />,
        },
      ],
    },
    {
      element: <MainLayout />,
      children: [
        {
          path: "/homePage",
          element: <HomePage />,
        },
        {
          path: "/details/:id",
          element: <DetailsPage />,
        },
        {
          path: "/vehiclePage",
          element: <VehiclePage />,
        },
        {
          path: "/aboutUsPage",
          element: <AboutUsPage />,
        },
        {
          path: "/contactUsPage",
          element: <ContactUsPage />,
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
