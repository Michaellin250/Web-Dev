// define your ticket model here
let mongoose = require('mongoose')

let Schema = mongoose.Schema

let TicketSchema = new Schema(
  {
	title: {type: String, required: true},
	author: {type: String, required: true},
	description: {type: String, required: true},
	type: {type: String, required: true},
	assignedTo: {type: String},
	createdDate: {type: Date, required: true},
	status: {type: String, required:true},
	dueDate: {type: Date,required: true}
  }

);

module.exports = mongoose.model('Ticket', TicketSchema);
