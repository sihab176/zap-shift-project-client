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
import payment from "../pages/DashBord/Payment/payment";
import PaymentHistory from "../pages/DashBord/Payment/PaymentHistory";
import TrackParcel from "../pages/DashBord/TrackParcel/TrackParcel";
import BeARider from "../pages/BeARider/BeARider";
import PendingRiders from "../pages/BeARider/PendingRiders/PendingRiders";
import ActiveRiders from "../pages/BeARider/ActiveRiders/ActiveRiders";
import MakeAdmin from "../pages/MakeAdmin/MakeAdmin";
import Forbidden from "../pages/Error/Forbidden";
import AdminRoute from "../PrivetRoute/AdminRoute";

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
      {
        path: "/be-a-rider",
        loader: () => fetch("./warehouses.json"),
        element: (
          <PrivetRoute>
            <BeARider></BeARider>
          </PrivetRoute>
        ),
      },
      {
        path: "/forbidden",
        Component: Forbidden,
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
    children: [
      { path: "myParcel", Component: MyParcel },
      { path: "myParcel/:parcelId", Component: payment },
      { path: "paymentHistory", Component: PaymentHistory },
      { path: "track", Component: TrackParcel },
      {
        path: "pending",
        element: (
          <AdminRoute>
            <PendingRiders></PendingRiders>
          </AdminRoute>
        ),
      },
      {
        path: "active-riders",
        element: (
          <AdminRoute>
            <ActiveRiders></ActiveRiders>
          </AdminRoute>
        ),
      },
      {
        path: "makeAdmin",

        element: (
          <AdminRoute>
            {" "}
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
        ),
      },
    ],
  },
]);
