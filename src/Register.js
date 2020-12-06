import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { EventRounded } from "@material-ui/icons";
import { auth } from "./serverconfig";
import Footer from "./Footer";

function Register() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let user = auth.currentUser;
  // let name = user.displayName;
  const [usernamenew, setUserNamenew] = useState("");

  function setUserName(event) {
    setUserNamenew(event.target.value);
  }

  const login = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const logout = (event) => {
    event.preventDefault();
    auth
      .signOut()
      .then((auth) => {
        history.push("/");
      })
      .catch(function (error) {
        console.log("logout error");
      });
  };

  const updateUser = (event) => {
    var user = auth.currentUser;

    user
      .updateProfile({
        displayName: usernamenew,
      })
      .then(function () {
        console.log("user update successful");
        console.log(user.displayName);
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  return (
    <>
      <div className="login">
        <div className="login__form">
          <form>
            {user ? (
              <>
                <h2>
                  You are Already Logged in as{" "}
                  {user ? user.displayName : "RamdomUser"}
                </h2>
                <p>
                  <p>
                    <strong>Edit Username</strong>
                  </p>
                  <input
                    type="text"
                    className="emailLogin"
                    value={usernamenew}
                    onChange={setUserName}
                  ></input>
                  <div className="registerSection">
                    <button
                      className="loginBtnForm loginBtnReg"
                      onClick={logout}
                      type="submit"
                    >
                      Logout
                    </button>

                    <button
                      className="loginBtnForm"
                      onClick={updateUser}
                      type="submit"
                    >
                      Update Username
                    </button>
                  </div>
                </p>
              </>
            ) : (
              <>
                <h2>Welcome to Daraz! Please Register</h2>
                <div className="registerSection">
                  <img
                    className="header__logo img-center"
                    src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1eIwbmljTBKNjSZFuXXb0HFXa.png"
                  />
                </div>
                <div className="formPad">
                  <p>Email</p>
                  <input
                    className="emailLogin"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                  />
                  <p>Password</p>
                  <input
                    className="emailLogin"
                    value={password}
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <div className="registerSection">
                  <button
                    className="loginBtnForm loginBtnReg"
                    onClick={register}
                    type="submit"
                  >
                    REGISTER
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
