import { useState } from "react";


function Tools() {

    const [tools, setTools] = useState([])
    const [name, setName] = useState("")
    const [weight, setWeight] = useState("")
 
    const fetchToolsdByLetters = (value) => {
        console.log(value);
        if(value.length > 0){
            fetch(`/tools/${value}`)
                .then((res) => res.json())
                .then(result => setTools(result))
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {name, weight}
    
        return fetch("/tools/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then(res => console.log(res))
        .catch(error => {
            console.log(error)
          })
      };

    return (
        <>
            <input type="text" onChange={(e) => fetchToolsdByLetters(e.target.value)}/>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Weight</th>
                    </tr>
                </thead>
                <tbody>
                    {tools.map((tool) => (
                    <tr key={tool._id}>
                        <td>{tool.name}</td>
                        <td>{tool.weight}</td>
                    </tr>
                    )
                    )}
                </tbody>
            </table>

            <div>
            <form onSubmit={handleSubmit}>
              <div className="control">
                <label>Tool's name</label>
                <input type="text" placeholder="Name" onChange={e => setName(e.target.value)}></input>
              </div>

              <div className="control">
                <label>Tool's Weight</label>
                <input type="text" placeholder="Type" onChange={e => setWeight(e.target.value)}></input>
              </div>

              <div className="buttons">
                <button type="submit">Register Tool</button>
              </div>           
            </form>
        </div>
        </>

    )
}

export default Tools;