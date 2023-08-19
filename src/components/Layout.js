import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="row mx-0">
      <div className="col-2 bg-primary vh-100 pt-2">
        <nav>
          <h2 className="text-center text-white">Nanaware Tech</h2>
          <ul className="list-unstyled sidemenu">
            <li>
              <Link to="/layout">Home</Link>
            </li>
            <li>
              <Link to="user">Users</Link>
            </li>
            <li>
              <Link to="profile">Profile</Link>
            </li>
            <li>
              <Link to="../">Logout</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="col-10 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
