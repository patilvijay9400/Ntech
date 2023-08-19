
const Dashboard = () => {
  return (
    <div className="">
      <div className="row mx-0">
        <div className="col-9">
          <div className="d-flex justify-content-between align-items-center">
            <h4>Dashboard</h4>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
        <div className="col-3 border-start">
          
        </div>
      </div>

    </div>
  )
};

export default Dashboard;