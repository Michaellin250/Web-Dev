import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTicket from './components/createTicketComponent';
import TicketsList from './components/showTicketsComponent';
import EditTicket from './components/editTicketComponent';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#d80011'}}>
            <Link to="/" className="navbar-brand">UMDCS Ticket Tracking System</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Tickets</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Ticket</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/" exact component={TicketsList} />
          <Route path="/:id/edit" component={EditTicket} />
          <Route path="/create" component={CreateTicket} />
        </div>
      </Router>
    );
  }
}

export default App;