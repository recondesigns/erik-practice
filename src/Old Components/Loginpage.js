import React, { useState, useContext } from "react";
import { FormContext } from "../context/FormContext";
import styles from "../css/Loginpage.module.css";
// import classes from '*.module.sass';

// const LinkedInProvider = new firebase.auth.LinkedInProvider()
function Loginpage() {
  const {
    signInWithGoogle,
    signInWithFacebook,
    logout,
    handleSignup,
    token,
    handleLogin,
    errorMessage
  } = useContext(FormContext);
  const initToggle = {
    privacyAgreement: false,
    login: false
  };

  const initLogin = {
    email: "",
    password: ""
  };
  const [toggle, setToggle] = useState(initToggle);
  const [login, setLogin] = useState(initLogin);
  const [message, setMessage] = useState("");

  function checkPasswords() {
    let results = login.password.localeCompare(login.confirmPassword);
    if (results === 0) {
      handleSignup(login.email, login.password);
      setMessage("Account Created Successfully");
    } else setMessage("passwords do not match, please try again");
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLogin(prev => ({
      ...prev,
      [name]: value
    }));
  }
  return (
    <div className={styles.container}>
      <h1>Create Account</h1>
      <h5>to reserve your booth at VetFest</h5>
      <form className={styles.account}>
          <div className={styles.email}>
      
        <label for="email">Email</label>
        <input
          type="text"
          required
          value={login.email}
          name="email"
          onChange={handleChange}
        ></input>
        </div>
        <div className={styles.password}>
        <label for="password">Password</label>
        <input
          type="password"
          value={login.password}
          name="password"
          onChange={handleChange}
        ></input>
        </div>
        {!toggle.login ? (
          <>
          <div className={styles.confirm}>
            <label>Confirm Password</label>
            <input
              type="password"
              value={login.confirmPassword}
              name="confirmPassword"
              onChange={handleChange}
            ></input>
            </div>
          </>
        ) : (
          ""
        )}
      </form>
      <p style={{ color: "red" }}>{message}</p>
      <div>
        {errorMessage ? <p style={{ color: "red" }}>{errorMessage}</p> : ""}
      </div>
      <input
        type="radio"
        onClick={() =>
          setToggle(prev => ({
            ...prev,
            privacyAgreement: !prev.privacyAgreement
          }))
        }
      />

      <span>
        I have read and accept the Terms of Service and Privacy Policy
      </span>
      <hr></hr>

      <p
        onClick={() =>
          setToggle(prev => ({
            ...prev,
            login: !prev.login
          }))
        }
      >
        Already have an account? Sign in
      </p>
      {toggle.login ? (
        <button
          className={styles.loginBtn}
          onClick={() => handleLogin(login.email, login.password)}
        >
          Login
        </button>
      ) : null}

      {!toggle.login && toggle.privacyAgreement ? (
        <button
          className={styles.accountBtn}
          onClick={() => handleSignup(login.email, login.password)}
          disabled={false}
        >
          Create an Account
        </button>
      ) : null}

      <p>or use</p>

      {toggle.privacyAgreement ? (
        <button className={styles.googleBtn} onClick={() => signInWithGoogle()}>
          Google
        </button>
      ) : (
        <button
          className={styles.googleBtn}
          disabled={true}
          onClick={() => signInWithGoogle()}
        >
          Google
        </button>
      )}
      {toggle.privacyAgreement ? (
        <button
          className={styles.facebookBtn}
          onClick={() => signInWithFacebook()}
        >
          FaceBook
        </button>
      ) : (
        <button
          className={styles.facebookBtn}
          disabled={true}
          onClick={() => signInWithFacebook()}
        >
          FaceBook
        </button>
      )}
      {token ? (
        <button className="social-btn" onClick={() => logout()}>
          Logout
        </button>
      ) : (
        ""
      )}
      {/* <button onClick = {() => signInWithLinkedIn()}>LinkedIn</button> */}
    </div>
  );
}

// 391Lines

export default Loginpage;
