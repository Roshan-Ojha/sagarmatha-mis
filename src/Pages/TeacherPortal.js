import { useEffect, useState } from "react";
import Logo from "../assets/notice1.png";
import Assesment from "../Components/Teacher/Assesment";
import Assignment from "../Components/Teacher/Assignment";
import Attendance from "../Components/Teacher/Attendance";
import "./teacher.css";

function TeacherPortal(props) {
  const [selectOption, setSelectOption] = useState("attendance");

  function logoutHandler() {
    props.onLogout();
  }

  return (
    <div className="mainteacher">
      <div className="sagarmatha">
        <div>
          <img style={{ height: "100%" }} src={Logo} alt=""></img>
        </div>
        &nbsp;&nbsp;
        <span>
          Sagarmatha <br /> MIS
        </span>
        <div>
          <button onClick={logoutHandler}>Logout</button>
        </div>
      </div>
      <div className="welcomeTeacher">
        <span>Welcome&nbsp;</span>
        {props.name === "bipinthapa" ? "Bipin Thapa" : ""}
      </div>
      <hr></hr>

      <div className="selectBatch">
        <div className="year">
          <select name="batch">
            <option>Batch</option>
            <option value="075">075</option>
            <option value="076">076</option>
            <option value="077">077</option>
            <option value="078">078</option>
          </select>
        </div>
        <div className="faculty">
          <select name="faculty">
            <option>Faculty</option>
            <option value="BEI">Electronics Engineering</option>
            <option value="BCT">Computer Engineering</option>
            <option value="BCE">Civil Engineering</option>
          </select>
        </div>
        <div>
          <button type="button">Search</button>
        </div>
      </div>

      <div className="subject">
        Subject &nbsp; &gt; &nbsp;
        <span>
          {props.name === "bipinthapa"
            ? "Computer Organization and Architecture"
            : ""}
        </span>
      </div>
      <hr></hr>
      <div className="Entry">
        <div className="navbar">
          <nav>
            <ul className="entryOption">
              <div className="wrap">
                <li
                  className="attendence"
                  onClick={(e) => setSelectOption("attendance")}
                >
                  Attendance
                </li>
                <li onClick={(e) => setSelectOption("assignment")}>
                  Assignment
                </li>
                <li onClick={(e) => setSelectOption("assesment")}>Assesment</li>
              </div>
            </ul>
          </nav>
        </div>
      </div>

      <div className="contents">
        {selectOption === "attendance" ? (
          <Attendance></Attendance>
        ) : selectOption === "assignment" ? (
          <Assignment></Assignment>
        ) : selectOption === "assesment" ? (
          <Assesment></Assesment>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default TeacherPortal;
