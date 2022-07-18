import { useEffect, useState, useRef } from "react";
import "./StudentAttendance.css";
function StudentAttendance(props) {
  const [total, setTotal] = useState(0);
  const [presentDay, setPresentDay] = useState(0);
  console.log(2);
  console.log(props.name, "k");

  // const [selectOption, setSelectOption] = useState("attendance");

  async function getData() {
    const name = props.name === "Bipin Thapa" ? "bipinthapa" : "hello";

    const response = await fetch(
      `https://sagarmathamsi-default-rtdb.firebaseio.com/${name}.json`
    );

    const data = await response.json();
    data && setTotal(Object.keys(data).length);

    // data &&
    //   Object.keys(data).map((e, index) => {
    //     console.log(e[0]);
    //   });
    const roll = props.roll;

    if (data) {
      const values = Object.values(data);
      let count = 0;
    let daycount =0;
      values.forEach((value) => {
        console.log({ value });
        daycount++;
        value.attendance[roll] && count++;
      }
      );
      setTotal(daycount)
      console.log({ count });
      setPresentDay(count)
      
    }

    // data &&
    //   Object.keys(data).map((present, index) => {
    //     for (let i in data) {
    //       console.log(data);
    //       //   console.log(roll);
    //     }
    //   });
  }

  useEffect(() => {
    if (props.name) {
      getData();
    }
  }, [props.name]);

  //   useEffect(() => {
  //     console.log("Get data is called");
  //
  //   }, [props.name]);
  // getData();
  return (
    <div>
      <div className="MainStudentAttendance">
        <div className="attendanceFromDatabase">
          <div className="total">
            <span className="first">Total Days</span>{" "}
            <span className="second">&nbsp;{total}</span>
          </div>

          <div className="present">
            <span className="first">presentDay Days</span>{" "}
            <span className="second">&nbsp;{presentDay}</span>
          </div>

          <div className="absent">
            <span className="first">Absent Days</span>{" "}
            <span className="second">&nbsp;{total-presentDay}</span>
          </div>

          <div className="percent">
            <span className="first">Percentage</span>{" "}
            <span className="second">&nbsp;{(presentDay*100)/total}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StudentAttendance;
