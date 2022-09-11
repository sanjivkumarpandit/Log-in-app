import React, { Component } from "react";
//import 'bootstrap/dist/css/bootsrap.min.css';
import axios from "axios";
import { Link } from "react-router-dom";
import "./signup.css";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      username: "",
      email: "",
      password: "",
      changecheck: false,
      tick: "",
    };
    this.changefullName = this.changefullName.bind(this);
    this.changeusername = this.changeusername.bind(this);
    this.changeemail = this.changeemail.bind(this);
    this.changepassword = this.changepassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.changecheck = this.changecheck.bind(this);
  }
  changecheck(event) {
    this.setState({
      changecheck: event.target.checked,
    });
    console.log(event.target.checked);
  }
  changefullName(event) {
    this.setState({
      fullName: event.target.value,
    });
  }
  changeusername(event) {
    this.setState({
      username: event.target.value,
    });
  }

  changeemail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  changepassword(event) {
    this.setState({
      password: event.target.value,
    });
  }
  async onSubmit(event) {
    event.preventDefault();
    if (this.state.changecheck === false) {
      alert("Tick I agree");
    } else {
      if (
        this.state.username.length === 0 ||
        this.state.email.length === 0 ||
        this.state.password.length === 0 ||
        this.state.fullName.length === 0
      ) {
        alert("Some fields are missing");
      }
      const registered = {
        fullName: this.state.fullName,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      };
      console.log(registered);
      try {
        await axios.post("http://localhost:4000/app/signup", registered);
        console.log("hllo");
      } catch (error) {
        console.log("Sanjiv");
        alert("Some Fields are missing");
      }
      this.setState({
        fullName: "",
        username: "",
        email: "",
        password: "",
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <h1>Welcome to Sign Up Page</h1>
          <form onSubmit={this.onSubmit} className="form">
            <input
              type="text"
              placeholder="Full Name"
              onChange={this.changefullName}
              value={this.state.fullName}
              className="input"
            />
            <input
              type="text"
              placeholder="Username"
              onChange={this.changeusername}
              value={this.state.username}
              className="input"
            />
            <input
              type="text"
              placeholder="E-Mail"
              onChange={this.changeemail}
              value={this.state.email}
              className="input"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={this.changepassword}
              value={this.state.password}
              className="input"
            />
            <div>
              <input
                type="checkbox"
                className="inputx"
                id="exampleCheck1"
                onChange={this.changecheck}
                style={{
                  width: "20px",
                  height: "20px",
                  left: "0",
                  borderRadius: "10px",
                }}
              />
              <label
                className="form-check-label"
                for="exampleCheck1"
                style={{ fontSize: "20px", left: "0px", padding: "0 5px" }}
              >
                I agree
              </label>
            </div>
            <br></br>
            <button type="submit" id="login-button">
              Submit
            </button>
            <div>
              <Link
                to="/"
                style={{
                  fontSize: "20px",
                  fontWeight: "bolder",
                  color: "black",
                }}
              >
                Back to Home
              </Link>
            </div>
          </form>
        </div>

        <ul className="bg-bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    );
  }
}
export default SignUp;
