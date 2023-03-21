import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const fetchEmployees = (id) => {
    return fetch(`/api/kittens/${id}`).then((res) => res.json());
  };

function EmployeesKittens(){

    const [kittens, setKittens] = useState("")
    const [name, setName] = useState("")
    const [weight, setWeight] = useState(null)
    const {id} = useParams();

    useEffect(() => {
        fetchEmployees(`${id}`)
        /*fetch(`/api/kittens/${id}`)
        .then((res) => res.json())*/
        .then(employee => setKittens(employee.kittens))
    }, [])
    

    function handleSubmit(e){
        e.preventDefault()

        const data = {name, weight}
        //console.log(data);
        //console.log(id);
    
        return fetch(`/api/kittens/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }).then((res) => res.json())
          .then(employee => setKittens(employee.kittens));
    }


    return(
        <>
        <h3>My kittens</h3>
        <ul>
            {kittens && kittens.map(kitten => 
            <li key={kitten._id}>{kitten.name}</li>
            )}
        </ul>
        <div>
             <form onSubmit={handleSubmit}>
                <div className="control">
                    <label>Kitten's name</label>
                    <input type="text" placeholder="Name" onChange={e => setName(e.target.value)}></input>
                </div>

                <div className="control">
                    <label>Kitten's Weight (kg)</label>
                    <input type="number" min="0" max="20" placeholder="Type" onChange={e => setWeight(e.target.value)}></input>
                </div>

                <div className="buttons">
                <button type="submit">Register kitten</button>
              </div>  
              </form>
        </div>
        </>
        
    )
}

export default EmployeesKittens;

