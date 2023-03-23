import { useState } from "react";
import PopUp from "./PopUp";

import "./popup.css"


function Tools() {

    const [tools, setTools] = useState([])
    const [name, setName] = useState("")
    const [weight, setWeight] = useState("")
    const [popUp, setPopup] = useState(false)
    const [text, setText] = useState("")
    const [actualId, setActualId] = useState("")
 
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

      function handleDelete(id){
        fetch(`/tools/${id}`, { method: "DELETE" }).then((res) => res.json())
      }


      const handleYes = () => {
        handleDelete(actualId)
        setTools(tools.filter((tool) => tool._id !== actualId))
        setPopup(false)
      }
    
      const handleNo = () => {
        setPopup(false)
      }
    
      const handleDeleteClick = (e) => {
        setActualId(e.target.dataset.id)
        setPopup(true)
        setText("Are you sure you want to delete this tool?")
      }

    return (
        <>
        {popUp ? <PopUp text={text} hasOk={false} handleYes={handleYes} handleNo={handleNo} /> : undefined}
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
                        <td><button type="button" data-id={tool._id} onClick={e => handleDeleteClick(e)}>Delete</button></td>
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