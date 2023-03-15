import { useEffect, useState } from "react";
import Loading from "../Components/Loading";

const fetchMissingEmployees = () => {
    return fetch("/api/missingemployees").then((res) => res.json());
  };


const MissingEmployees = () => {

    const [loading, setLoading] = useState(true);
    const [employees, setEmployees] = useState(null);

    useEffect(() => {
        fetchMissingEmployees()
          .then((employees) => {
            setLoading(false);
            setEmployees(employees);
          })
      }, []);


    if (loading) {
        return <Loading />;
      }

    return(
 <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee._id}>
            <td>{employee.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>    
  )
}

export default MissingEmployees;