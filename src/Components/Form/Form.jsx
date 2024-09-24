import React, { useState, useEffect } from "react";
import "./Form.css";
import Button from "../Button/Button";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import user_icon from "../Assets/person.png";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [action, setAction] = useState("Sign In");
  const [newUsers, setNewUsers] = useState([]);
  // const [oldUsers, setOldUsers] = useState([]);

  const handleName = (event) => setName(event.target.value);

  const handleEmail = (event) => setEmail(event.target.value);

  const handlePassword = (event) => setPassword(event.target.value);

  const resetState = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  //to see the full list in real time because setState is asynchronous, meaning that users still holds its previous value when you log it immediately after calling setUsers.
  useEffect(() => {
    console.log("Updated Users List:", newUsers);
  }, [newUsers]); // This will trigger each time users state changes

  const addUser = () => {
    if (action === "Sign Up") {
      const existingUser = newUsers.find((user) => user.email === email);
      if (existingUser) {
        alert("User already exists. Please sign in");
      } else {
        const newUser = {
          name: name,
          email: email,
          password: password,
        };

        setNewUsers([...newUsers, newUsers]);
        console.log("New User added:", newUser); // This will log the latest user added

        console.log("Users List:", newUsers); // This will log the entire users array

        alert("User registered succesfully!");
      }
    }

    // Aici poți trimite `newUser` către server sau să-l gestionezi cum ai nevoie
    resetState();
  };

  // Funcția de Sign In - verificăm dacă utilizatorul există
  const signInUser = () => {
    const user = newUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      alert(`Welcome back, ${user.name}!`);
    } else {
      alert("You don't have an account, please sign up.");
    }
    resetState();

    console.log("Users List:", newUsers); // This will log the entire users array
  };

  const handleSubmit = () => {
    if (action === "Sign In") {
      resetState();
    } else resetState();
  };

  const handleSignIn = () => {
    if (action === "Sign In") {
      signInUser();
    } else {
      setAction("Sign In");
    }
    // setAction(action === "Sign In" ? "Sign Up" : "Sign In");
  };

  const handleSignUp = () => {
    if (action === "Sign Up") {
      addUser();
    } else {
      setAction("Sign Up");
    }
    // setAction(action === "Sign In" ? "Sign Up" : "Sign In");
  };
  return (
    <div className="container">
      <div className="header">
        <h1>{action}</h1>
        <div className="underline"></div>
      </div>
      <form className="inputs" onSubmit={handleSubmit}>
        {action === "Sign In" ? (
          <></>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              onChange={handleName}
              id="person"
              type="text"
              value={name}
              placeholder="Name"
            />
            <label htmlFor="person"></label>
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt="" />
          <input
            onChange={handleEmail}
            id="email"
            type="text"
            value={email}
            placeholder="Email"
          />
          <label htmlFor="email"></label>
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            onChange={handlePassword}
            id="password"
            type="password"
            value={password}
            placeholder="Password"
          />
          <label htmlFor="password"></label>
        </div>
      </form>
      {action === "Sign In" ? (
        <div className="forgot-password">
          Forgot password? <span>Click here</span>
        </div>
      ) : (
        <></>
      )}
      <div className="submit-container">
        <Button
          className={action === "Sign In" ? "inactive-button" : "active-button"}
          // onClick={action === "Sign In" ? addUser : handleAction}
          // onClick={handleSubmitOrSwitchSignIn}
          onClick={handleSignIn}
          type="submit"
          label="Sign In"
          // disabled={action === "Sign In"} // Disable if "Sign Up" is active
        ></Button>
        <Button
          className={action === "Sign Up" ? "inactive-button" : "active-button"}
          // onClick={action === "Sign Up" ? addUser : handleAction}
          // onClick={handleSubmitOrSwitchSignUp}
          onClick={handleSignUp}
          type="submit"
          label="Sign Up"
          // disabled={action === "Sign Up"} // Disable if "Sign Up" is active
        ></Button>
      </div>
    </div>
  );
};

export default Form;
