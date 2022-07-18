import "./Attendance.css";
import bct076 from "../../Data/076bct.json";
import { useState } from "react";

const bct076data = JSON.parse(JSON.stringify(bct076));

console.log(bct076data[0].Email);

function Attendance(props) {
  const [date, setdate] = useState();

  async function onSubmit(e) {
    e.preventDefault();
    const list = {};
    Object.values(e.target).map((el) => {
      if (el.name?.startsWith("present")) {
        list[el.name.split("-")[1]] = el.checked;
      }
    });

    const response = await fetch(
      "https://sagarmathamsi-default-rtdb.firebaseio.com/" +
        props.name +
        ".json",
      {
        method: "POST",
        body: JSON.stringify({
          date: date,
          attendance: list,
        }),
      }
    );

    const dataa = await response.json();

    if (dataa){

      window.location.reload();
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="MainAttendance">
          <input
            type="date"
            className="date"
            onChange={(e) => setdate(e.target.value)}
            required
          ></input>
          <table>
            <tbody>
              <tr className="heading">
                <th className="roll">Roll number</th>
                <th>Name</th>
                <th>Attendance</th>
                <th className="remark">Remarks</th>
              </tr>

              {bct076data.map((element, index) => {
                return (
                  <tr>
                    <td className="rolltd">{element.Email.substring(0, 9)}</td>
                    <td>{element.Name}</td>
                    <td>
                      <input
                        name={`present-${element.Email.substring(0, 9)}`}
                        type="checkbox"
                        id={element.Email.substring(0, 9)}
                      ></input>
                    </td>
                    <td className="remarktd"></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <input type="submit" value="Add" className="submitbutton"></input>
      </form>
    </div>
  );
}
export default Attendance;
