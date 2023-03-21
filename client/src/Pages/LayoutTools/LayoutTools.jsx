import { Outlet, Link } from "react-router-dom";



const LayoutTools = () => (
  <div className="Layout">
    <nav>
      <ul>
        <li className="grow">
          <Link to="/tools">Tools</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </div>
);

export default LayoutTools;