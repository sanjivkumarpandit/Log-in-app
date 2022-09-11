import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./signin.css";

function Signinpage() {
  const [data, setData] = useState(null);
  const [nm, setNm] = useState(false);
  const [name, setName] = useState("");
  const [account, setAccount] = useState(null);
  useEffect(() => {
    async function getData() {
      try {
        axios.get("http://localhost:4000/app/signup").then((response) => {
          console.log(response.data);
          setData(response.data);
        });
      } catch (error) {
        console.log("Sanjiv");
      }
    }
    getData();
  }, []);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const OnChangeUserName = (e) => {
    setAccount(1);
    if (username.length > 0 && password.length > 0) {
      setNm(true);
    } else if (username.length === 0 || password.length === 0) {
      setNm(false);
    }
    setUsername(e.target.value);
    console.log(username);
  };
  const OnChangePassword = (e) => {
    setAccount(1);
    if (username.length > 0 && password.length > 0) {
      setNm(true);
    } else if (username.length === 0 || password.length === 0) {
      setNm(false);
    }
    setPassword(e.target.value);
  };
  const Submitvalue = (event) => {
    event.preventDefault();
    console.log(password);
    console.log(username);
    if (username.length > 0 && password.length > 0) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].username === username && data[i].password === password) {
          setName(data[i].fullName);
          setAccount(3);
          break;
        }
        setAccount(2);
      }
    }
  };

  return (
    <div className="wrapper">
      {account === 3 ? (
        <div className="container">
          <div>
            <form>
            <h1> {name} You are logged in</h1>{" "}
            <button onClick={() => window.location.reload()}>Log Out</button>
            </form>
          </div>
        </div>
      ) : (
        <div className="container">
          <h1>Welcome to Logged In page</h1>
          <form onSubmit={Submitvalue} className="form">
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={OnChangeUserName}
              className="input"
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={OnChangePassword}
              className="input"
            />
            <button type="submit" id="login-button">
              Log In
            </button>
            {(() => {
              if (nm === false) {
                return <div style={{
                  fontSize: "18px",
                  fontWeight: "bolder",
                  color: "blue",
                }}>*Password or username is empty</div>;
              } else if (account === 2) {
                return <div style={{
                  fontSize: "20px",
                  fontWeight: "bolder",
                  color: "red",
                  padding: "10px"
                }}>Invalid Password or Username</div>;
              }
            })()}
            <div
            style={{
              fontSize: "20px",
              fontWeight: "bolder",
              color: "black",
            }}
            >
              <Link
                to="/signup"
                style={{
                  fontSize: "20px",
                  fontWeight: "bolder",
                  color: "black",
                }}
              >
                Register Now?
              </Link>
              If not registered
            </div>
          </form>
        </div>
      )}
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
export default Signinpage;
