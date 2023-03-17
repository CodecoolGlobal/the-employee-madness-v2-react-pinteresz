import { useEffect, useState } from "react";
import Loading from "../Components/Loading";

const fetchMissingEmployees = () => {
    return fetch("/api/missingemployees").then((res) => res.json());
  };


const MissingEmployees = () => {

    const [loading, setLoading] = useState(true);
    const [employees, setEmployees] = useState(null);
    const [isShowingClicked, setIsShowingClicked] = useState(false)

    const handleShowingClick = (e) => {
      e.preventDefault()
      setIsShowingClicked(prev => !prev)
    }

    const handleNotShowingClick = (e) => {
      e.preventDefault()
      setIsShowingClicked(prev => !prev)
    }

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
      <>
        {isShowingClicked ? 
          <div>
            <button type="button" onClick={handleNotShowingClick}>And back...</button>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Missing?</th>
                  <th>Are we happy about it?</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee._id}>
                    <td>{employee.name}</td>
                    <td>Yes</td>
                    <td>Nope</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> : <button type="button" onClick={handleShowingClick}>OK, let's see, who is missing!</button>
        }
       </>
    )
}

export default MissingEmployees;