import React, {Component} from 'react';
import axios from 'axios';


class CreateTicket extends Component {

  constructor(props) {
      super(props);

      this.onChangeTicketTitle = this.onChangeTicketTitle.bind(this);
      this.onChangeTicketAuthor= this.onChangeTicketAuthor.bind(this);
      this.onChangeTicketDescription = this.onChangeTicketDescription.bind(this);
      this.onChangeTicketType = this.onChangeTicketType.bind(this);
      this.onChangeTicketAssignedTo = this.onChangeTicketAssignedTo.bind(this);
      this.onChangeTicketDueDate = this.onChangeTicketDueDate.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
          ticketTitle: '',
          ticketAuthor: '',
          ticketDescription: '',
          ticketType: '',
          ticketAssignedTo: '',
          ticketCreatedAt: '',
          ticketStatus: 'Not Started',
          ticketDueDate: ''
      }
  }

  onChangeTicketTitle(e) {
      this.setState({
          ticketTitle: e.target.value
      });
  }

  onChangeTicketAuthor(e) {
      this.setState({
          ticketAuthor: e.target.value
      });
  }

  onChangeTicketDescription(e) {
      this.setState({
          ticketDescription: e.target.value
      });
  }

  onChangeTicketType(e) {
    this.setState({
        ticketType: e.target.value
    });
  }

  onChangeTicketAssignedTo(e) {
    this.setState({
        ticketAssignedTo: e.target.value
    });
  }


  onChangeTicketDueDate(e) {
    this.setState({
        ticketDueDate: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Ticket Title: ${this.state.ticketTitle}`);
    console.log(`Ticket Description: ${this.state.ticketDescription}`);
    console.log(`Ticket Author: ${this.state.ticketAuthor}`);
    console.log(`Ticket Type: ${this.state.ticketType}`);
    console.log(`Ticket Assigned to: ${this.state.ticketAssignedTo}`);
    console.log(`Ticket Status: ${this.state.ticketStatus}`);
    console.log(`Ticket Due Date: ${this.state.ticketDueDate}`);

    const newTicket = {
      title: this.state.ticketTitle,
      author: this.state.ticketAuthor,
      description: this.state.ticketDescription,
      type: this.state.ticketType,
      assignedTo: this.state.ticketAssignedTo,
      status: this.state.ticketStatus,
      dueDate: this.state.ticketDueDate
    }

    axios.post('http://localhost:4000/tickets/new', newTicket)
        .then(res => console.log(res.data));

    this.setState({
      ticketTitle: '',
      ticketAuthor: '',
      ticketDescription: '',
      ticketType: '',
      ticketAssignedTo: '',
      ticketCreatedAt: '',
      ticketStatus: 'Not Started',
      ticketDueDate: ''
    })
  }

  render() {
    return (
      <div style={{marginTop: 20}}>
        <h3>Create New Ticket</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title: </label>
            <input  type="text"
              className="form-control w-50"
              value={this.state.ticketTitle}
              onChange={this.onChangeTicketTitle}
            />
          </div>
          <div className="form-group">
            <label>Author: </label>
            <input  type="text"
              className="form-control w-50"
              value={this.state.ticketAuthor}
              onChange={this.onChangeTicketAuthor}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <textarea rows="5" 
              className="form-control rounded w-50"
              value={this.state.ticketDescription}
              onChange={this.onChangeTicketDescription}
            />
          </div>
          <div className="form-group">
            <label>Ticket Type: </label>
            <br />
            <div className="form-check form-check-inline">
              <input  className="form-check-input"
                type="radio"
                name="typeOptions"
                id="story"
                value="Story"
                checked={this.state.ticketType === 'Story'}
                onChange={this.onChangeTicketType}
              />
              <label className="form-check-label">Story</label>
            </div>
            <div className="form-check form-check-inline">
              <input  className="form-check-input"
                type="radio"
                name="typeOptions"
                id="subTask"
                value="Sub Task"
                checked={this.state.ticketType === "Sub Task"}
                onChange={this.onChangeTicketType}
              />
              <label className="form-check-label">Sub Task</label>
            </div>
            <div className="form-check form-check-inline">
              <input  className="form-check-input"
                type="radio"
                name="typeOptions"
                id="bugFix"
                value="Bug Fix"
                checked={this.state.ticketType === 'Bug Fix'}
                onChange={this.onChangeTicketType}
              />
              <label className="form-check-label">Bug Fix</label>
            </div>
          </div>
          <div className="form-group">
            <label>Assigned To: </label>
            <input  type="text"
              className="form-control w-50"
              value={this.state.ticketAssignedTo}
              onChange={this.onChangeTicketAssignedTo}
            />
          </div>
          <div className="form-group">
            <label >Ticket Due Date: </label>
            <input className="form-control w-25"
              type="date" 
              name="ticketDueDate"
              max="2022-12-31" 
              min="2019-01-01"
              onChange={this.onChangeTicketDueDate}
              value={this.state.ticketDueDate}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Ticket" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}

export default CreateTicket;