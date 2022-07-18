import "./App.css";
import Login from "./Pages/Login";
import TeacherPortal from "./Pages/TeacherPortal";
import { useEffect, useState } from "react";
import LoginScreen from "./assets/LoginScreen-bg.jpg";
import StudentPortal from "./Pages/StudentPortal";
import ParentPortal from "./Pages/ParentPortal";


function App() {
  const [what, setWhat] = useState();
  const [name, setName] = useState();
  // const [student, setStudent] = useState();
  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role === "teacher") {
      setWhat("teacher");
    }
    if (role ==="student"){
      setWhat("student")
    }

    if (role === "parent")
    {
      setWhat("parent");
    }
    const name = localStorage.getItem("name");
    setName(name);
  }, []);

  function isLoggedIn(what, name) {
    setWhat(what);
    localStorage.setItem("role", what);
    localStorage.setItem("name", name);
    setName(name);
  }

  function loggedOut() {
    localStorage.removeItem("role");
    setWhat();
  }

  return (
    <div className="main">
      {what === "teacher" ? (
        <div
          className="AppTeacher"
          style={{ backgroundImage: `url(${LoginScreen}` }}
        >
          <TeacherPortal onLogout={loggedOut} name={name}></TeacherPortal>
        </div>
      ) : what === "student" ? (
        <div className="AppStudent">
          <StudentPortal onLogout={loggedOut} roll = {name}></StudentPortal>
          </div>
      ) : 
      
      what === "parent" ? (
        <div className="AppStudent">
          <ParentPortal onLogout={loggedOut} roll = {name}></ParentPortal>
          </div>
      ) :
      (
        <div
          className="AppLogin"
          style={{ backgroundImage: `url(${LoginScreen}` }}
        >
          <Login onLogin={isLoggedIn}></Login>{" "}
        </div>
      )}
    </div>
  );
}

export default App;
