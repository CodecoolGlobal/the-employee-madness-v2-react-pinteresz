import { useState } from "react";
import { useNavigate } from "react-router-dom";


  function EquipmentCreator(){
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

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
        .then(() => {
          setLoading(false);
          navigate("/equipments");
        })
        .then(res => console.log(res))
        .catch(error => {
            console.log(error)
          })
      };
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
              <div className="control">
                <label>Equipment's name</label>
                <input type="text" placeholder="Name" onChange={e => setName(e.target.value)}></input>
              </div>

              <div className="control">
                <label>Equipment's Type</label>
                <input type="text" placeholder="Type" onChange={e => setType(e.target.value)}></input>
              </div>

              <div className="control">
                <label>Equipment's Amount</label>
                <input type="number" placeholder="Amount" onChange={e => setAmount(e.target.value)}></input> 
              </div>
               
              <div className="buttons">
              <button type="submit">Register equipment</button>
              </div>           
            </form>
        </div>
    )
  }


  export default EquipmentCreator;