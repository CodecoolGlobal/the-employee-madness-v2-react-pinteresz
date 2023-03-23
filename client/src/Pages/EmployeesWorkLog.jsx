import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

const fetchEmployee = (id) => {
    return fetch(`/api/employees/${id}`).then((res) => res.json());
  };

function EmployeesWorkLog (){

    const [working_hours, setWorking_hours] = useState("")
    const [label, setLabel] = useState("")
    const {id} = useParams();
    const [work_log, setWork_Log] = useState([])

    useEffect(() => {
        fetchEmployee(`${id}`)
        .then(employee => setWork_Log(employee.work_log))
    }, [])

    function handleSubmit(e) {
        e.preventDefault()

        const data = { working_hours, label}
        //console.log(data);
        //console.log(id);
        return fetch(`/api/work_log/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((res) => res.json())
        .then(employee => setWork_Log(employee.work_log));
    }




    return(
       <>
        <h3>My Worklog</h3>
        <ul>
            {work_log && work_log.map(obj => 
            <li key={obj._id}>{obj.working_hours}, {obj.label}</li>
            )}
        </ul>

       <form onSubmit={handleSubmit}>
                <div className="control">
                    <label>Working hours</label>
                    <input type="number" placeholder="Hours" onChange={e => setWorking_hours(e.target.value)}></input>
                </div>

                <div className="control">
                    <label>What did you do?</label>
                    <input type="string" placeholder="Type" onChange={e => setLabel(e.target.value)}></input>
                </div>

                <div className="buttons">
                <button type="submit">Register HOURS</button>
              </div>  
              </form>
       </>
    )
}

export default EmployeesWorkLog;