
import "./App.css";
import Login from "./Pages/Login";
import TeacherPortal from "./Pages/TeacherPortal";
import { useEffect, useState } from "react";
import LoginScreen from "./assets/LoginScreen-bg.jpg" 

function App() {
  const [what, setWhat] = useState();
  const [teachername, setTeacherName] = useState();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role === "teacher") {
      setWhat("teacher");
    }
    const name = localStorage.getItem("name");
    setTeacherName(name);
  }, []);

  function isLoggedIn(what, name) {
    setWhat(what);
    localStorage.setItem("role", what);
    localStorage.setItem("name", name);
    setTeacherName(name);
  }

  function loggedOut() {
    localStorage.removeItem("role");
    setWhat();
  }

  return (
    <div className="main" >
      {what === "teacher" ? (
        <div className="AppTeacher" style={{backgroundImage:`url(${LoginScreen}`}}><TeacherPortal onLogout={loggedOut} name={teachername}></TeacherPortal></div>
      ) : (
        <div className="AppLogin" style={{backgroundImage:`url(${LoginScreen}`}}>
          <Login onLogin={isLoggedIn}></Login>{" "}
        </div>
      )}
    </div>
  );
}

export default App;
