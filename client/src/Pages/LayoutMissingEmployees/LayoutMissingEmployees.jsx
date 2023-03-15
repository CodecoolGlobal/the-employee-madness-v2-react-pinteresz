import { Outlet, Link } from "react-router-dom";


const LayoutMissingEmployees = () => (
  <div className="Layout">
    <nav>
      <ul>
        <li className="grow">
          <Link to="/missing">Missing Heros from Morning Meeting</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </div>
);

export default LayoutMissingEmployees;