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
    // console.log(email.substring(0,7));
    // console.log(email.substring(16,34));
    if (email?.includes("bipinthapa@sagarmatha.edu.np")) {
      const name = email.substring(0, email.length - 18);
      props.onLogin("teacher", name);
    }


    if (email.substring(0,7)==="076bct0"&&email.substring(16,34)==="@sagarmatha.edu.np"){
      props.onLogin("student", email.substring(0,9));
     
    }
    
    if(email.substring(0,7)==="076bct0"&&email.substring(17,41)==="parent@sagarmatha.edu.np"){
      props.onLogin("parent",email.substring(0,9));
      console.log(email.substring(17,41))
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
