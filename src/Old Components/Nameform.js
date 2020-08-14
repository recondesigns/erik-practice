import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { Link } from "react-router-dom";
import styles from "../css/NameForm.module.css";

function Nameform() {
  const { firstName, lastName, handleChange, phoneNumber, logout } = useContext(
    FormContext
  );

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1> Let us get to know you </h1>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={() => handleChange}
        ></input>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={() => handleChange}
        ></input>
        <label>Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          value={phoneNumber}
          onChange={() => handleChange}
        ></input>

        <Link exact to="/form2">
          <button className={styles.contBtn} type="button">
            Continue
          </button>
        </Link>
        <button className={styles.logoutBtn} type='button' onClick = {() => logout()}>Logout</button>
      </form>
    </div>
  );
}

//  111 Lines

export default Nameform;
