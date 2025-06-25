import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Coverage from "../pages/Coverage/Coverage";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import PricingForm from "../pages/Pricing/PricingForm";
import DashboardLayout from "../layout/DashboardLayout";
import MyParcel from "../pages/DashBord/MyParcels/MyParcel";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "/coverage",
        loader: () => fetch("./warehouses.json"),
        Component: Coverage,
      },
      {
        path: "/pricing",
        loader: () => fetch("./warehouses.json"),
        element: (
          <PrivetRoute>
            <PricingForm></PricingForm>
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <DashboardLayout></DashboardLayout>
      </PrivetRoute>
    ),
    children: [{ path: "myParcel", Component: MyParcel }],
  },
]);
