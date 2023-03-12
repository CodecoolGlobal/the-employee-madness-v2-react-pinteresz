import { useState } from "react";
import { Link } from "react-router-dom";
import "./EmployeeTable.css";

const EmployeeTable = ({ employees, onDelete }) => {

  // to filtered employees
  const [filteredEmployees, setFilteredEmployees] = useState(employees);

   // to the name input field
   const [position, setPosition] = useState("")
   const [level, setLevel] = useState("")

   // it reacts:) to te name change in the input field and filters the employees according to that
   function handleLevelChange(event){
    setLevel(event.target.value)

    // with toUpperCase it will be case-insensitive
    const newFilteredEmployees = [...employees].filter(
        (e) => e.level.toUpperCase().includes(event.target.value.toUpperCase())
    )

    // before mapping through to display the employees
    setFilteredEmployees(
        newFilteredEmployees
    ) 
  }


   // it reacts:) to te name change in the input field and filters the employees according to that
   function handlePositionChange(event){
    setPosition(event.target.value)

    // with toUpperCase it will be case-insensitive
    const newFilteredEmployees = [...employees].filter(
        (e) => e.position.toUpperCase().includes(event.target.value.toUpperCase())
    )

    // before mapping through to display the employees
    setFilteredEmployees(
        newFilteredEmployees
    )
  }

  return (
  <div className="EmployeeTable">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>
            <input type="text" placeholder="Level" value={level} onChange={handleLevelChange}/>
          </th>
         
          <th>
            <input type="text" placeholder="Position" value={position} onChange={handlePositionChange}/>
          </th>
          <th />
        </tr>
      </thead>
      <tbody>
        {filteredEmployees.map((employee) => (
          <tr key={employee._id}>
            <td>{employee.name}</td>
            <td>{employee.level}</td>
            <td>{employee.position}</td>
            <td>
              <Link to={`/update/${employee._id}`}>
                <button type="button">Update</button>
              </Link>
              <button type="button" onClick={() => onDelete(employee._id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
};


export default EmployeeTable;
