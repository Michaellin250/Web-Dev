// define your ticket controller handlers here
let Ticket = require('../models/ticket');

exports.ticket_list = function(req, res) {
  Ticket.find({}, (err, tickets) => {
    res.json(tickets)
  })
};

exports.ticket_detail = function(req, res) {
  res.json(req.ticket)
};

exports.ticket_create_post = function(req, res){
  let ticket = new Ticket(req.body);
  ticket.save();
  res.status(201).send(ticket);
};

exports.ticket_delete = function(req, res) {

  Ticket.findById(req.params.ticketId, (err, ticket) => {
    ticket.remove(err => { 
	if(err) {
	  res.status(500).send(err)
	} else {
	  res.status(204).send('removed')
	}
    })
  })
};

exports.ticket_update = function(req, res) {
  Ticket.findByIdAndUpdate(req.params.ticketId,{$set:req.body},{new: true}, function(err, result){
    if(err){
        console.log('error in put');
        console.log(err);
    }
    console.log("RESULT: " + result);
    res.json(result);
  });
};
