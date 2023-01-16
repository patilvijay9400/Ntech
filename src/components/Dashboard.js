import React from 'react';
import { UserData } from './UserData';
import { render } from "react-dom";
import { Bar } from "react-chartjs-2";

export class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        labels: UserData.map(o => o.year),
        datasets: [
          {
            label: 'Users Gained',
            backgroundColor: 'rgba(0, 255, 0, 0.2)',
            borderColor: 'rgb(0, 255, 0)',
            borderWidth: 1,
            data: UserData.map(o => o.userGain)
          }
        ]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Bar Chart'
          }
        }
      }
    };
  }
  render() {
    return (
      <div className=''>
        <div className='row'>
          <div className='col-9'>
            <div className='d-flex justify-content-between'>
            <h5>Dashboard</h5>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
          <div className='row pt-3'>
            <div className='col'>
            <div class="card">
              <div class="card-body">
                <i class="fas fa-eye p-3 rounded-circle"></i>
                <h1 class="card-title">500</h1>
                <p class="card-text">Some quick example</p>
              </div>
            </div>
            </div>
            <div className='col'>
            <div class="card">
              <div class="card-body">
                <i class="fas fa-eye p-3 rounded-circle"></i>
                <h1 class="card-title">500</h1>
                <p class="card-text">Some quick example</p>
              </div>
            </div>
            </div>
            <div className='col'>
            <div class="card">
              <div class="card-body">
                <i class="fas fa-eye p-3 rounded-circle"></i>
                <h1 class="card-title">500</h1>
                <p class="card-text">Some quick example</p>
              </div>
            </div>
            </div>
            <div className='col'>
            <div class="card">
              <div class="card-body">
                <i class="fas fa-eye p-3 rounded-circle"></i>
                <h1 class="card-title">500</h1>
                <p class="card-text">Some quick example</p>
              </div>
            </div>
            </div>
          </div>
          <Bar 
            data={this.state.data}
            options={this.state.options}
          />
          </div>
          <div className='col-3 border-start'></div>
        </div>
        
      </div>
    );
  }
}

// render(<L />, document.getElementById("root"));