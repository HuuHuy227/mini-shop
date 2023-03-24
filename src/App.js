import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product";
import Products from "./Pages/Products/Products";
import "./app.scss"
import Payment from "./Pages/Payment/Payment";
import AppContext from "./hooks/context";
import Search from "./Pages/Search/Search";

const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/products/:id",
        element: <Products/>
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ]
  },
]);

function App() {
  return (
    <div>
      <AppContext>
        <RouterProvider  router={router} />
      </AppContext>
    </div>
  );
}

export default App;
