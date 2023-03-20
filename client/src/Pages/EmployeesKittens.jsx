import { useState } from "react";
import { useParams } from "react-router-dom"

function EmployeesKittens(){

    const [name, setName] = useState("")
    const [weight, setWeight] = useState(null)
    const {id} = useParams();

    function handleSubmit(e){
        e.preventDefault()

        const data = {name, weight}
        console.log(data);
        console.log(id);
    
        return fetch(`/api/kittens/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }).then((res) => res.json())
          .then(employee => console.log(employee));
    }

    return(

        <div>
             <form onSubmit={handleSubmit}>
                <div className="control">
                    <label>Kitten's name</label>
                    <input type="text" placeholder="Name" onChange={e => setName(e.target.value)}></input>
                </div>

                <div className="control">
                    <label>Kitten's Weight</label>
                    <input type="text" placeholder="Type" onChange={e => setWeight(e.target.value)}></input>
                </div>

                <div className="buttons">
                <button type="submit">Register kitten</button>
              </div>  
              </form>
        </div>
    )
}

export default EmployeesKittens;

