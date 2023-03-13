import { Outlet, Link } from "react-router-dom";
import EquipmentCreator from "../EquipmentCreator";

import "./LayoutEquipment.css";

const LayoutEquipment = () => (
  <div className="Layout">
    <nav>
      <ul>
        <li className="grow">
          <Link to="/equipments">Equipments</Link>
        </li>
        <li>
          <Link to="/equipments/register">
            <button type="button">Register equipment</button>
          </Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </div>
);

export default LayoutEquipment;