import "./Login.css";
import { useState } from "react";
import Logo from "../assets/notice1.png";

function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  //   const [teacherIsLoggedIn, setTeacherIsLoggedIn] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    if (!email?.includes("@sagarmatha.edu.np")) {
      alert("Invalid Email");
      return;
    }

    if (email?.includes("@sagarmatha.edu.np")) {
      const name = email.substring(0, email.length - 18);
      props.onLogin("teacher", name);
    }
  }

  return (
    <div className="Login">
      <div className="Sagarmatha">
        <img src={Logo} alt=""></img>
        &nbsp;&nbsp;
        <span>Sagarmatha MIS</span>
      </div>
      <hr className="firsthr"></hr>
      <div className="welcome">
        Welcome to &nbsp;<span> Sagarmatha </span> &nbsp;MIS
      </div>
      <form onSubmit={submitHandler}>
        <div className="Email">
          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="Password">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="forgot">Forgot password?</div>
        <div className="check">
          <input type="checkbox" id="keep"></input>
          <label htmlFor="keep">Remember Me</label>
        </div>
        <div className="submit">
          <input type="submit" value="Login"></input>
        </div>
      </form>
      <hr className="secondhr"></hr>
      <div className="support">
        Contact &nbsp;<span>MIS Support</span>
      </div>
    </div>
  );
}
export default Login;
