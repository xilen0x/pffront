import React from 'react';
import VertNavbar from '../components/dashcompts/vertnavbar';
import TodoCards from '../components/dashcompts/todocards';

const Dashboard = props => {
  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <VertNavbar />
        </div>
        <div className="col-md-9">
          <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
          </div>
          <TodoCards />
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
      </div>
    </>
  )
}

export default Dashboard;