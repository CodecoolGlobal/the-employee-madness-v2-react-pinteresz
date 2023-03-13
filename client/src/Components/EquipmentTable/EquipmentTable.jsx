import { useState } from "react";
import { Link } from "react-router-dom";
import "./EquipmentTable.css"


const EquipmentTable = ({ equipments, onDelete }) => {

  // to filtered employees
  const [filteredEquipments, setFilteredEquipments] = useState(equipments);

  return (
  <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Amount</th> 
          <th />
        </tr>
      </thead>
      <tbody>
        {filteredEquipments.map((equipment) => (
          <tr key={equipment._id}>
            <td>{equipment.name}</td>
            <td>{equipment.type}</td>
            <td>{equipment.amount}</td>
            <td>
              <Link >
                <button type="button">Update</button>
              </Link>
              <button type="button" onClick={() => onDelete(equipment._id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
};


export default EquipmentTable;
