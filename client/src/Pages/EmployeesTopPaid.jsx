import { useEffect, useState } from "react"

function EmployeesTopPaid(){

    const [highestPaidEmployees, setHighestPaidEmployees] = useState(null)

    useEffect(() => {
        fetch("/api/top-paid/")
            .then(res => res.json())
            .then(employees => setHighestPaidEmployees(employees))

    }, [])

    return(
        <>
        <h3>The 3 Highest Paid Employees</h3>
        <ul>
           {highestPaidEmployees && highestPaidEmployees.map(employee => (
                 <li key={employee._id}>{employee.name} {employee.salary}</li>
            ))
           }           
        </ul>
        </>
        

    )
}

export default EmployeesTopPaid