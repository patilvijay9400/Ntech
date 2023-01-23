import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Layout from "./components/Layout";
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="layout" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="user" element={<Users />} />
          <Route path="create" element={<CreateUser />} />
          <Route path="update" element={<UpdateUser />} />
          {/* <Route path="update/:id"
            render={props => {
              console.log(props)
              return < UpdateUser {...props} />
            }
            }
          >
          </Route> */}
        </Route>
      </Routes>
    </BrowserRouter >

  );
}

export default App;
