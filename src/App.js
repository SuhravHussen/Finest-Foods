import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Componenets/Header/Header';
import Home from './Componenets/Home/Home';
import Admin from './Componenets/Admin/Admin';
import AddProduct from './Componenets/AddProduct/AddProduct';
import EditProduct from './Componenets/EditProduct/EditProduct';
import Login from './Componenets/Login/Login';
import CheckOut from './Componenets/CheckOut/CheckOut';
import { createContext, useState } from 'react';
import PrivateRoute from './Componenets/Privateroute/PrivateRoute';
import PrivateOrder from './Componenets/PrivateRouteforOrder/PrivateOrder';
import Orders from './Componenets/Orders/Orders';

export  const userContext = createContext({})
function App() {

  const [userInfo , setUserInfo] = useState({

  })

  return (
   <userContext.Provider value={[userInfo , setUserInfo]}>
    <div className="App">
     <Router>
     <Header></Header>
    <Switch>
      <Route path="/home">
     <Home></Home>
      </Route>
      <Route path="/admin">
      <Admin></Admin>
      </Route>

      <Route path="/addProduct">
      <AddProduct></AddProduct>
      </Route>
      <Route path="/editProduct">
      <EditProduct></EditProduct>
      </Route>
      <Route path="/login">
      <Login></Login>
      </Route>

      <Route path="/login">
      <Login></Login>
      </Route>
      <PrivateOrder path="/orders">
       <Orders></Orders>
      </PrivateOrder>
      <PrivateRoute path="/checkout/:id">
      <CheckOut></CheckOut>
      </PrivateRoute>        

      <Route exact path="/">
       <Home></Home>
      </Route>
    </Switch>
     </Router>


    </div>
    </userContext.Provider>
  );
}

export default App;
