import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AudiobookPlayer from "./AudiobookPlayer";
import Library from "./Library";
import NoMatch from "./NoMatch";
import SignupPage from "./SignupPage"
import Navbar from "./components/Navbar";
import Landing from "./Landing";
import Login from "./Login";
import Register from "./Register";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
// import Passport from 'passport';
// import GoogLog from "./components/GoogLog";
// import Passport from "../../authentication/passport";

import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}




function App() {
  return (
    <Provider store={store}>
    <Router >
      <div   >
        {/* <GoogLog/> */}
        <Navbar/>
        <Switch>
          <Route className="fullHeight" exact path="/" component={AudiobookPlayer} />
          <Route className="fullHeight"  exact path="/Landing" component={Landing} />
          <Route className="fullHeight"  exact path="/Library" component={Library} />
          <Route className="fullHeight"  exact path="/Login" component={Login} />
          <Route className="fullHeight"  exact path="/Register" component={Register} />
          <Route className="fullHeight"  exact path="/SignupPage" component={SignupPage} />
          <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          <Route component={NoMatch} />
        </Switch>


        </div>
    </Router>
    </Provider>
  );
}

export default App;
