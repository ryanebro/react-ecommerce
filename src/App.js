import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-actions";
import { selectCurrentUser } from "./redux/user/user-selector";
import { createStructuredSelector } from "reselect";
import {
  auth,
  createUserProfileDocument
} from "../src/firebase/firebase.utils";

import "./App.css";
import Header from "./components/header/header";

// Pages
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up";
import CheckoutPage from "./pages/checkout/checkout";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        // firebase.utils has a function that checks if user is created, if not one is created and returned here
        const userRef = await createUserProfileDocument(userAuth);

        // whenever snapshot updates set userReducer value with new object
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        // if user signs out and currentUser is null
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    // close the subscription to avoid memory leak
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </>
    );
  }
}

// argument user is userReducer
const mapStateToProps = createStructuredSelector({
  // allows access to this.props.currentUser
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  //  user passed to setCurrentUser will be used as payload in user-action
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

// first argument is null since we no longer need currentUser state here, app.js only sets it. disregard this note
export default connect(mapStateToProps, mapDispatchToProps)(App);
