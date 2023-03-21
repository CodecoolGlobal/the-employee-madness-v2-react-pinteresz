import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import Layout from "./Pages/Layout";
import LayoutEquipment from "./Pages/LayoutEquipment";
import LayoutMissingEmployees from "./Pages/LayoutMissingEmployees/index";
import LayoutTools from "./Pages/LayoutTools/index";
import ErrorPage from "./Pages/ErrorPage";
import EmployeeList from "./Pages/EmployeeList";
import EmployeeCreator from "./Pages/EmployeeCreator";
import EmployeeUpdater from "./Pages/EmployeeUpdater";
import EquipmentCreator from "./Pages/EquipmentCreator";
import EmployeeSearch from "./Pages/EmployeeSearch";
import EquipmentList from "./Pages/EquipmentList";
import MissingEmployees from "./Pages/MissingEmployees";
import EmployeesKittens from "./Pages/EmployeesKittens";
import EmployeesTopPaid from "./Pages/EmployeesTopPaid";
import Tools from "./Pages/Tools";

import "./index.css";
import TableTest from "./Pages/TableTest";
import FormTest from "./Pages/FormTest";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <EmployeeList />,
      },
      {
        path: "/create",
        element: <EmployeeCreator />,
      },
      {
        path: "/update/:id",
        element: <EmployeeUpdater />,
      },
      {
        path: "/table-test",
        element: <TableTest />,
      },
      {
        path: "/form-test",
        element: <FormTest />,
      },
      {
        path: "/employees/:search",
        element: <EmployeeSearch />
      },
      {
        path: "/kittens/:id",
        element: <EmployeesKittens />
      },
      {
        path: "/top-paid",
        element: <EmployeesTopPaid />
      }

    ],
  },
  {
    path: "/equipments",
    element: <LayoutEquipment/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"/equipments",
        element: <EquipmentList/>
      },
      {
        path: "/equipments/register",
        element: <EquipmentCreator />,
      },
    ]

  },
  {
    path: "/missing",
    element: <LayoutMissingEmployees/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/missing",
        element: <MissingEmployees/>,
      }
    ]
  },
  {
    path: "/tools",
    element: <LayoutTools/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/tools",
        element: <Tools/>,
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
