import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/top/TopBar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/User/User";
import NewUser from "./pages/newUser/NewUser";
import Productlist from "./pages/productList/Productlist";
import Product from "./pages/product/Product";

function App() {
  return (
    <Router>
      <TopBar className="topBar" />
      <div classNam="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newuser">
            <NewUser />
          </Route>
          <Route path="/products">
            <Productlist />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newroduct">
            <NewUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
