import { useState } from "react";
import bct076 from "../../Data/076bct.json";
import './Assesment.css'

const bct076data = JSON.parse(JSON.stringify(bct076));
function Assesment() {
  const [cycle, setCycle] = useState("first");

  return (
    <div className="mainAssesment">
      <div className="left">
        <div className="chooseContainer">
          <div className="firstcycle" onClick={(e) => setCycle("first")}>
            1<sup>st</sup>Cycle
          </div>
          <div className="secondcycle" onClick={(e) => setCycle("second")}>
            {" "}
            2<sup>nd</sup>Cycle{" "}
          </div>
          <div className="thirdcycle" onClick={(e) => setCycle("third")}>
            {" "}
            3<sup>rd</sup>Cycle
          </div>
        </div>
      </div>

      <div className="right">
        <div className="fixedmark">
          Full Mark: {cycle === "first" ? "20" : cycle === "second" ? 20 : 80} |
          Pass Mark: {cycle === "first" ? "08" : cycle === "second" ? "08" : 32}
        </div>

        <form>
          <div className="MainAttendance">
            <table className="manualTable">
              <tbody>
                <tr className="heading">
                  <th className="roll">Roll number</th>
                  <th>Name</th>
                  <th>Attendance</th>
                  <th className="remark">Obtained Marks</th>
                </tr>

                {bct076data.map((element, index) => {
                  return (
                    <tr>
                      <td className="rolltd">
                        {element.Email.substring(0, 9)}
                      </td>
                      <td>{element.Name}</td>
                      <td>
                        <input
                          type="checkbox"
                          id={element.Email.substring(0, 9)}
                        ></input>
                      </td>
                      <td className="remarktd"><input className="marks"></input></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <input type="submit" value="Add" className="submitbutton"></input>
        </form>
      </div>
    </div>
  );
}
export default Assesment;
