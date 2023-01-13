import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/layout">Home</Link>
          </li>
          <li>
            <Link to="profile">Profile</Link>
          </li>
          <li>
            <Link to="../">Logout</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;