// define your endpoints in this file
let express = require('express');
let ticketRouter = express.Router();
let Ticket = require('../../../models/ticket');

let ticket_controller = require('../../../controllers/ticketController');

ticketRouter.use(function (req, res, next) {
  next()
})

ticketRouter.use('/', (req,res,next) => {
  for (const key in req.query) {
    console.log(key, req.query[key]);
  }
  next()
})

ticketRouter.use('/:ticketId', (req,res,next) => {
  Ticket.findById(req.params.ticketId, (err, ticket) => {
    if(err) {
	res.status.send(err);
    } else {
	req.ticket = ticket;
	next()
    }
  })
})

ticketRouter.route('/')
  .get(ticket_controller.ticket_list)
  .post(ticket_controller.ticket_create_post)

ticketRouter.route('/:ticketId/edit')
  .put(ticket_controller.ticket_update)

ticketRouter.route('/:ticketId/delete')
  .get(ticket_controller.ticket_detail)
  .delete(ticket_controller.ticket_delete)

module.exports = ticketRouter; 




