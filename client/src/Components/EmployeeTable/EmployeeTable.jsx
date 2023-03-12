import { useState } from "react";
import { Link } from "react-router-dom";
import "./EmployeeTable.css";

const EmployeeTable = ({ employees, onDelete }) => {

  // to filtered employees
  const [filteredEmployees, setFilteredEmployees] = useState(employees);

   // to the name input field
   const [position, setPosition] = useState("")
   const [level, setLevel] = useState("")
   const [levelAndPosition, setLevelAndPosition] = useState("")

   //Filtering by LEVEL
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

   //Filtering by POSITION
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

   //Filtering by LEVEL and POSITION
   // it reacts:) to te name change in the input field and filters the employees according to that
   function handlelevelAndPositionChange(event){
    setLevelAndPosition(event.target.value)
    // with toUpperCase it will be case-insensitive
    const newFilteredEmployees = [...employees].filter(
        (e) => e.level.toUpperCase().includes(event.target.value.toUpperCase()) || e.position.toUpperCase().includes(event.target.value.toUpperCase())
    )
    // before mapping through to display the employees
    setFilteredEmployees(
        newFilteredEmployees
    )
  }

  //
 function handleFirstNameRearrange(e) {
  e.preventDefault()
  const newSortedEmployees = [...employees].map(employee => employee.name.split(" "))
  console.log(newSortedEmployees);
 }


  return (
  <div className="EmployeeTable">
    <table>
      <thead>
        <tr>
          <th>Name
            <button onClick={handleFirstNameRearrange}>Rearr. by First Name</button>
            <button>Rearr. by Middle Name</button>
            <button>Rearr. by Last Name</button>
          </th>
          <th>
            <input type="text" placeholder="Filter by Level" value={level} onChange={handleLevelChange}/>
            <button>Rearrange by Level</button>
          </th>
          <th>
            <input type="text" placeholder="Filter by Position" value={position} onChange={handlePositionChange}/>
            <button>Rearrange by Position</button>
          </th>
          <th>
            <input type="text" placeholder="Filter by Level and Position" value={levelAndPosition} onChange={handlelevelAndPositionChange}/>
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
