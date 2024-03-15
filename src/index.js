import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AddItems from "./pages/AddItems";
import ListItems from "./pages/ListItems";
import { Provider } from "react-redux";
import store from "./redux/store";
import Items from "./pages/Items";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/items",
    element: <Items />,
  },
  {
    path: "/add",
    element: (
      <div>
        <AddItems />
      </div>
    ),
  },
  {
    path: "/list",
    element: <ListItems />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
