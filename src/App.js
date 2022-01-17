import "./app.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import ProductList from "./pages/productList/ProductList";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import NewProduct from "./pages/newProduct/NewProduct";
import Product from "./pages/product/Product";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          {/* Home page */}
          <Route exact path="/">
            <Home />
          </Route>
          {/* Users List page */}
          <Route path="/users">
            <UserList />
          </Route>
          {/* individual user page (:userId indicates that it can be anything (string, number ...)) */}
          <Route path="/user/:userId">
            <User />
          </Route>
          {/* new-user route  */}
          <Route path="/new-user">
            <NewUser />
          </Route>
          {/* products route  */}
          <Route path="/products">
            <ProductList />
          </Route>
          {/* individual product page (:productId indicates that it can be anything (string, number ...)) */}
          <Route path="/product/:productId">
            <Product />
          </Route>
          {/* new-product route  */}
          <Route path="/new-product">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
