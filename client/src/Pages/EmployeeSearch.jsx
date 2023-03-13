import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import EmployeeTable from "../Components/EmployeeTable";

const fetchEmployees = (search) => {
    return fetch(`/employees/${search}`).then((res) => res.json());
  };

  
const deleteEmployee = (id) => {
    return fetch(`/employees/${id}`, { method: "DELETE" }).then((res) =>
      res.json()
    );
  };

   
const EmployeeSearch = () => {
    const [loading, setLoading] = useState(true);
    const [employees, setEmployees] = useState(null);
    const {search} = useParams();

    const handleDelete = (id) => {
      deleteEmployee(id);
  
      setEmployees((employees) => {
        return employees.filter((employee) => employee._id !== id);
      });
    };
  
    useEffect(() => {
        fetchEmployees(search)
        .then((employees) => {
          setLoading(false);
          setEmployees(employees);
        })
    }, []);
  
    if (loading) {
      return <Loading />;
    }
  
    return <EmployeeTable employees={employees} onDelete={handleDelete} />;
  };



export default EmployeeSearch;