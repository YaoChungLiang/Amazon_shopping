import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Payment from './Payment';
import Login from './Login'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {auth} from './firebase'
import { useStateValue } from './StateProvider';


function App() {
  const [{},dispatch] = useStateValue();

  useEffect(() => {
   // will only run once when the app components loads
    auth.onAuthStateChanged(authUser=>{
      console.log('The user is >>>', authUser);
      if (authUser){
        // the auth just logged in or the user was logged in
        dispatch({
          type:'SET_USER',
          user:authUser,
        })
      }else{
        // the user is logged out
        dispatch({
          type:'SET_USER',
          user:null,
        })
      }
    })
  },[])

  return (
    <Router>

    <div className="app">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/checkout">
          <Header/> {/* Header : bar*/}
          <Checkout/>
        </Route>
        <Route path="/payment">
          <Header/> {/* Header : bar*/}
          <Payment />
        </Route>
        
        <Route path="/">
          <Header/> {/* Header : bar*/}
          <Home />  {/* Home : products */}
        </Route>
      </Switch>
    </div>

    </Router>
  );
}

export default App;
