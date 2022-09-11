import React from "react";
import Signinpage from "./Sign_in_up";
import SignUp from "./SignUp";
import LoggedIn from "./loggedin";
//import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
    return(
  <Router>
    <Routes>
      <Route
        exact path="/"
        element={
          <>
            <Signinpage />
          </>
        }
      />
      <Route
        exact path="/signup"
        element={
          <>
            <SignUp />
          </>
        }
      />
      <Route
        path="/loggedin"
        element={
          <>
            <LoggedIn />
          </>
        }
      />
    </Routes>
  </Router>
    )
};
export default App
