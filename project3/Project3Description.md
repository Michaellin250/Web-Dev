# Ticket Tracking System API
## Due Date: Wednesday, May 8th, 2019 11:59 PM
### Objectives: 
Build out back-end API application/service for ticket-tracking system.
### Overview
This project introduces you to the basic CRUD operations that are part of all RESTful API services. For this api you will be generating a single resource, a ticket. In modern software development, one of the primary tools for managing the software development lifecylce is a ticket tracking system (e.g. Jira). A ticket consists of the following fields:
* Title (string)
* Author (string)
* Description (string - later we will validate its minimum and maximum length)
* Type (String - later we will validate that this is an enum)
* Assigned to (String)
* Created Date (Date)
* Status (String - later we will validate that this is an enum)
* Due Date (Date)

All of these fields are required with the exception of the AssignedTo field - that can be null, indicating that it has not been assigned to a developer.
### Grading
* (20 pts) Correct Schema
* (80 pts) Correct implementation of 4 required endpoints
### tickets-api Specifications
Implement a REST api that exposes the tickets resource stored in an instance of a mongo database with the following endpoints:

* GET /api/v1/tickets (retrieve all the tickets in the database)
* POST /api/v1/tickets (create a new ticket resource and store it in the database)
* PUT /api/v1/tickets/:ticketId/edit (edit an existing ticket in the database)
* DELETE /api/v1/tickets/:ticketId/delete (delete an existing ticket from the database)

### tickets-api Requirements
You need to create the schema that corresponds to the ticket resource described above. All of the fields with the exception for the assignedTo field should be required. We will add additional validations in the second part of the project next week.
Additonally, you will need to create the endpoints in the ticket router file so that they map to the exact url specifications described in the Specifications section. Do not worry about providing us with your database credentials. In app.js, just create variables to serve as place holders for the dbadmin user name and password as well as the url for the mongo instance we would be connecting to - we will change these to our own values but want to see these 3 variables in your code. 
Any business logic should take place inside of the ticket controller methods. Your ticket router should just define the endpoint mappings along with the type of request and then call the appropriate controller method. 
Lastly, any successful response sent back to the client should be in json.

### General Requirements
* When you first start your project do not forget to execute `npm install` inside of the tickets-api directory to install the necessary node dependencies.
* We have provided you the structure for your project. You should maintain the structure we have laid out for you and place the necessary code in the files we have provided you with. 
* You should define whatever necessary custom middleware you need to minimize code duplication and apply it at the appropriate layer (i.e. controller, route, app)
* Do not use var, except for the code we have provided you with ; use let or const for variable definition.
* You should test your api by using the Postman tool we showed in class (or something like it - Curl for example).
### Submission
Submit your application by commiting your code and pushing it to your repo on the university gitlab server. Make sure you verify that you see your code up on the gitlab server after you have pushed it.
