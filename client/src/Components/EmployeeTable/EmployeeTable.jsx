import { useState } from "react";
import { Link } from "react-router-dom";
import "./EmployeeTable.css";

const EmployeeTable = ({ employees, onDelete }) => {

  // to filtered employees
  const [filteredEmployees, setFilteredEmployees] = useState(employees);

   // to the name input field
   const [position, setPosition] = useState("")
   const [level, setLevel] = useState("")
   //const [levelAndPosition, setLevelAndPosition] = useState("")
   
   

   //Filtering by LEVEL
   // it reacts:) to te name change in the input field and filters the employees according to that
   function handleLevelChange(event){
      setLevel(event.target.value)
      // with toUpperCase it will be case-insensitive
      const newFilteredEmployees = [...filteredEmployees].filter(
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
      const newFilteredEmployees = [...filteredEmployees].filter(
          (e) => e.position.toUpperCase().includes(event.target.value.toUpperCase())
      )
      // before mapping through to display the employees
      setFilteredEmployees(
          newFilteredEmployees
      )
    }

   //Filtering by LEVEL and POSITION
   // it reacts:) to te name change in the input field and filters the employees according to that
  //  function handlelevelAndPositionChange(event){
  //   setLevelAndPosition(event.target.value)
  //   // with toUpperCase it will be case-insensitive
  //   const newFilteredEmployees = [...filteredEmployees].filter(
  //       (e) => e.level.toUpperCase().includes(event.target.value.toUpperCase()) || e.position.toUpperCase().includes(event.target.value.toUpperCase())
  //   )
  //   // before mapping through to display the employees
  //   setFilteredEmployees(
  //       newFilteredEmployees
  //   )
  // }

  // <input type="text" placeholder="Filter by Level and Position" value={levelAndPosition} onChange={handlelevelAndPositionChange}/>

    // Rearange by First Name
    function handleFirstNameRearrange(e) {
      e.preventDefault()
      console.log(employees); 
      const newSortedEmployees =[...filteredEmployees].sort(function (a, b) {
          if(a.name < b.name){
            return -1
          }
          else if(a.name > b.name){
            return 1
          }
          else {
            return 0;
          }
        })
      //console.log(newSortedEmployees);
      setFilteredEmployees(newSortedEmployees)
    }


// Rearange by Last Name
function handleMiddleNameRearrange(e) {
  e.preventDefault()
  //console.log(employees); 
  const newSortedEmployees =[...filteredEmployees].sort(function (a, b) {
    if(a.name.split(" ").length > 2 && b.name.split(" ").length <= 2){
      if(a.name.split(" ")[1] < b.name[0]){
        return -1
      }
      else if(a.name.split(" ")[1] > b.name[0]){
        return 1
      }
      else {
        return 0;
      }
    }
    else if(a.name.split(" ").length > 2 && b.name.split(" ").length > 2){
      if(a.name.split(" ")[1] < b.name.split(" ")[1]){
        return -1
      }
      else if(a.name.split(" ")[1] > b.name.split(" ")[1]){
        return 1
      }
      else {
        return 0;
      }
    }
    else if(a.name.split(" ").length <= 2 && b.name.split(" ").length > 2){
      if(a.name[0] < b.name.split(" ")[1]){
        return -1
      }
      else if(a.name[0] > b.name.split(" ")[1]){
        return 1
      }
      else {
        return 0;
      }
    }
    else{
      if(a.name < b.name){
        return -1
      }
      else if(a.name > b.name){
        return 1
      }
      else {
        return 0;
      }
    }
   
  })
  //console.log(newSortedEmployees);
  setFilteredEmployees(newSortedEmployees)
}


    // Rearange by Last Name
    function handleLastNameRearrange(e) {
      e.preventDefault()
      //console.log(employees); 
      const newSortedEmployees =[...filteredEmployees].sort(function (a, b) {
        if(a.name.split(" ")[a.name.split(" ").length-1] < b.name.split(" ")[a.name.split(" ").length-1]){
          return -1
        }
        else if(a.name.split(" ")[a.name.split(" ").length-1] > b.name.split(" ")[a.name.split(" ").length-1]){
          return 1
        }
        else {
          return 0;
        }
      })
      //console.log(newSortedEmployees);
      setFilteredEmployees(newSortedEmployees)
    }

    //  Rearange by Level
    function handleLevelRearrange(e) {
      e.preventDefault()
      //console.log(employees); 
     /* const newSortedEmployees =[...filteredEmployees].sort(function (a, b) {
        if(a.level < b.level){
          return -1
        }
        else if(a.level > b.level){
          return 1
        }
        else {
          return 0;
        }
      })
      //console.log(newSortedEmployees);
      setFilteredEmployees(newSortedEmployees)*/

      const levelArray = ["Godlike","Expert", "Senior", "Medior", "Junior"]
       
      const sortByLevel = (array, sortArray) => {
        return [...array].sort(
          (a, b) => sortArray.indexOf(a.level) - sortArray.indexOf(b.level)
        )
      }
      
      setFilteredEmployees(sortByLevel(filteredEmployees, levelArray))
      
    }

     //  Rearange by Position
     function handlePositionRearrange(e) {
      e.preventDefault()
      //console.log(employees); 
      const newSortedEmployees =[...filteredEmployees].sort(function (a, b) {
        if(a.position < b.position){
          return -1
        }
        else if(a.position > b.position){
          return 1
        }
        else {
          return 0;
        }
      })
      //console.log(newSortedEmployees);
      setFilteredEmployees(newSortedEmployees)
    }

//Checkbox
function handleCheckboxCheck(checked, employee){
 
   const data = {present: checked};
  fetch(`/api/employees/${employee._id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  .then((res) => res.json())
  .then(employee => {
    const newEmployees = [...filteredEmployees]

    newEmployees.forEach(newEmployee => {
      if(newEmployee._id === employee._id){
        newEmployee.present = employee.present
      }
    })
  console.log(employee);    

    setFilteredEmployees(newEmployees)
  })
// react rerender eloidezese, plusz state modisitas
// option A: update react state using response obj
// option B: useEffect - trigger rerender
};


  return (
  <div className="EmployeeTable">
    <table>
      <thead>
        <tr>
          <th>Present</th>
          <th>Name
            <button onClick={handleFirstNameRearrange}>Rearr. by F. Name</button>
            <button onClick={handleMiddleNameRearrange}>Rearr. by M. Name</button>
            <button onClick={handleLastNameRearrange}>Rearr. by L. Name</button>
          </th>
          <th>
            <input type="text" placeholder="Filter by Level" value={level} onChange={handleLevelChange}/>
            <button onClick={handleLevelRearrange}>Rearrange by Level</button>
          </th>
          <th>
            <input type="text" placeholder="Filter by Position" value={position} onChange={handlePositionChange}/>
            <button onClick={handlePositionRearrange}>Rearrange by Position</button>
          </th>
          <th>
           
          </th>
          <th />
        </tr>
      </thead>
      <tbody>
        {filteredEmployees.map((employee) => (
          <tr key={employee._id}>
            <td><input type="checkbox" checked={employee.present} onChange={e => handleCheckboxCheck(e.target.checked, employee)}></input></td>
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


// schema módosítás
// újra populálni az adatbázis
// front-end: chechbox defaultchecked (a schemaban a present kulcs)
// beckend: az id-val elküldeni a checked-nem checkedet állítani 

