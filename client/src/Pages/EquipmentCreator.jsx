import { useState } from "react";


  function EquipmentCreator(){

    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [amount, setAmount] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {name, type, amount}
    
        return fetch("/equipments/register", {
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
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Equipment's Name" onChange={e => setName(e.target.value)}></input>
                <input type="text" placeholder="Equipment's Type" onChange={e => setType(e.target.value)}></input>
                <input type="number" placeholder="Equipment's Amount" onChange={e => setAmount(e.target.value)}></input> 
                <button type="submit">Register equipment</button>
            </form>
        </div>
    )
  }


  export default EquipmentCreator;