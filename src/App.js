import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";




// CSS
import './App.css';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component"
import SignInAndSignUpPage from "./pages/sign-in-and-sing-up/sign-in-and-sing-up.component"

import Header from "./components/header/header-component";
import { auth } from "./firebase/firebase.utils"


class App extends Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
