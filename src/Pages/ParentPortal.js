import Logo from "../assets/notice1.png";
import bct076 from "../Data/076bct.json";
import { useEffect, useState } from "react";
import "./StudentPortal.css";
import StudentAttendance from "../Components/Student/StudentAttendance";

function ParentPortal(props)
{
    const [selectOption, setSelectOption] = useState("attendance");

  const [teacherName, setTeacherName] = useState();

  bct076.forEach((data, index) => {
    if (data.Email.substring(0, 9) === props.roll) {
      console.log(bct076[index]);
      return;
    }
  });

  function logoutHandler() {
    props.onLogout();
  }

  const subjectDatayetaxa = [
    {
      subject: "Computer Organization and Architecture",
      teacherName: "Bipin Thapa",
    },
    {
      subject: "computer Graphics",
      teacherName: "Shankar Bhandari",
    },
    {
      subject: "Probability and Statistics",
      teacherName: "Bobby Pradhan",
    },
    {
      subject: "Instrumentation II",
      teacherName: "Narayan Adhikari",
    },
    {
      subject: "Communication English",
      teacherName: "VKY",
    },
    {
      subject: "Data Communication",
      teacherName: "Pawan Khadka",
    },
    {
      subject: "Software Enginering",
      teacherName: "Ramesh Tamang",
    },

    // ["","Bipin Thapa"],
    // ["COmputer Graphics",""],
    // ["Probability and Statistics",""],
    // ["",""],
    // ["",""],
    // ["",""],
    // ["",""]
  ];

  const subjectData = JSON.parse(JSON.stringify(subjectDatayetaxa));

  return (
    <div>
      <div className="studentMain">
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

Parent of &nbsp;

          {
            bct076.find((data, index) => {
              return data.Email.split(".")[0] === props.roll;
            })?.Name
          }
        </div>

        <div className="Studentsubjects">
          {subjectData.map((subject, index) => {
            return (
              <div>
                <div
                  className={"Studentsubject"}
                  onClick={() => setTeacherName(subject.teacherName)}
                >
                  {subject.subject}
                </div>

                <div className={"subject_teacher"}>{subject.teacherName}</div>
              </div>
            );
          })}
        </div>
    

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
                  <li onClick={(e) => setSelectOption("assesment")}>
                    Assesment
                  </li>
                </div>
              </ul>
            </nav>
          </div>
        </div>

        <div className="Studentcontents">
          {selectOption === "attendance" ? (
            <StudentAttendance
              name={teacherName}
              roll={props.roll}
            ></StudentAttendance>
          ) : (
            ""
          )}
        </div>

        <div>
          <button onClick={logoutHandler}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default ParentPortal;