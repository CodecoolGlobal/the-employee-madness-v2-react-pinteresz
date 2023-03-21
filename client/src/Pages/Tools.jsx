import { useState } from "react";


function Tools() {

    const [tools, setTools] = useState([])

    const fetchToolsdByLetters = (value) => {
        console.log(value);
        if(value.length > 0){
            fetch(`/tools/${value}`)
                .then((res) => res.json())
                .then(result => setTools(result))
        }
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
        </>

    )
}

export default Tools;