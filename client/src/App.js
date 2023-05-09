// react-router-dom
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

// Pages
import Home from "./pages/Home/Home"
import Products from "./pages/Products/Products"
import Product from "./pages/Product/Product"



const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
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
    element: <Products/>,
  },
  {
    path: "/product/:id",
    element: <Product/>,
  }
  ]
  }
  
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
