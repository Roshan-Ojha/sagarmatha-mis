import "./Attendance.css";
import bct076 from "../../Data/076bct.json";

const bct076data = JSON.parse(JSON.stringify(bct076));


console.log(bct076data[0].Email);

function Attendance() {
  return (
    <div>
        <form>
      <div className="MainAttendance">
            <input type="date" className="date"></input>
            <button type="button" className="datebutton"> Search </button>
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
                  <td className="rolltd">{element.Email.substring(0,9)}</td>
                  <td>{element.Name}</td>
                  <td><input type="checkbox" id={element.Email.substring(0,9)}></input></td>
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
