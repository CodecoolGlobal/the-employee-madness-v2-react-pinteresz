import { Outlet, Link } from "react-router-dom";
import EquipmentCreator from "../EquipmentCreator";

import "./LayoutEquipment.css";

const LayoutEquipment = () => (
  <div className="Layout">
    <EquipmentCreator />
  </div>
);

export default LayoutEquipment;