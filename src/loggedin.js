import React from "react";
//import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function LoggedIn()
{
    return(
        <div>
            <h1> You are logged in</h1>
            <Link to="/">Back to Home</Link>
        </div>
    )
}