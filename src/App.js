import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import Contactus from "./components/ContactUs/Contactus";
import Cart from "./components/Cart/Cart";
import AllProduct from "./components/AllProduct/AllProduct";
import { getCartData } from "./Service/cartData";
import { useEffect } from "react";
import store from "./Store/store";
import { Provider } from "react-redux";
import SingleProductMain from "./components/SingleProductMain/SingleProductMain";
import WishList from "./components/WishList/WishList";

function App() {
  // Retrieve wishlistItems from local storage
  const wishlistItemsFromLocalStorage = JSON.parse(
    localStorage.getItem("wishlistItems")
  );

  // Dispatch the initialization action to set the initial wishlistItems in the Redux store
  store.dispatch({
    type: "INITIALIZE_WISHLIST_ITEMS",
    payload: wishlistItemsFromLocalStorage || [], // Set the initial wishlistItems to an empty array if it doesn't exist in local storage
  });

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const cartData = await getCartData();
        console.log("cartData1-->", cartData);
        store.dispatch({
          type: "INITIALIZE_CART_ITEMS",
          payload: cartData.data || [],
        });
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartData();
  }, []);

  // Retrieve cartItems from local storage
  // const cartItemsFromLocalStorage = JSON.parse(
  //   localStorage.getItem("cartItems")
  // );

  // Dispatch the initialization action to set the initial cartItems in the Redux store
  // store.dispatch({
  //   type: "INITIALIZE_CART_ITEMS",
  //   payload: cartItemsFromLocalStorage || [], // Set the initial cartItems to an empty array if it doesn't exist in local storage
  // });

  return (
    <>
      <Provider store={store}>
        <Router>
          <AppRoutes />
        </Router>
      </Provider>
    </>
  );
}

function AppRoutes() {
  const navigate = useNavigate();

  const isLoggedIn = () => {
    // Retrieve the user's login status from local storage or Redux store
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    return isLoggedIn === "true";
  };

  // const PrivateRoute = ({ path, element }) => {
  //   if (isLoggedIn()) {
  //     return (
  //       <>
  //         <InternalNavbar />
  //         {element}
  //         <Footer />
  //       </>
  //     );
  //   } else {
  //     return <Navigate to="/login" replace />;
  //   }
  // };

  return (
    <Routes>
      <Route
        path="/"
        element={
          isLoggedIn() ? (
            <Navigate to="/product-main" replace />
          ) : (
            <>
              <Navbar />
              <LandingPage />
              <Footer />
            </>
          )
        }
      />

      <Route
        path="/about"
        element={
          <>
            <Navbar />
            <AboutUs />
            <Footer />
          </>
        }
      />

      <Route
        path="/contactus"
        element={
          <>
            <Navbar />
            <Contactus />
            <Footer />
          </>
        }
      />

      <Route
        path="/fav"
        element={
          <>
            <Navbar />
            <WishList />
            <Footer />
          </>
        }
      />

      <Route
        path="/cart"
        element={
          <>
            <Navbar />
            <Cart />
            <Footer />
          </>
        }
      />
      <Route
        path="/all-product"
        element={
          <>
            <Navbar />
            <AllProduct />
            <Footer />
          </>
        }
      />

      <Route
        path="/single-product"
        element={
          <>
            <Navbar />
            <SingleProductMain />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
