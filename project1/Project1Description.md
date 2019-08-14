# Project #1: Client Side Form Data Validation Using Javascript 

## Due Date: Thursday, March 14th, 2019 11:59 PM
## Objectives: To practice forms, basic css, data validation, data collection, and events in JavaScript.
## Specifications/Requirements
1. We have provided you all the files you need to implement the project. You do not need to add anymore. The 3 files you need to implement for this project are `research.html`, `research.css` and `research.js`. We have also provided you with an express server that you can install and run to see your form in its full functionality. To do so you need to navigate inside of the `researchServer` directory and execute from the command line `npm install`. Once you see that your system has completed downloading all the dependencies you can execute the following command to start up the application server: `$ DEBUG=myapp:* npm start
` on a Mac or Linux system or `> set DEBUG=myapp:* & npm start` on windows. Once you have successfully started the server you should see the following output in your console:
`Research Application server starting...`
`listening on port 3000`

2. General Requirements:
  
    1. Your HTML must appear in a file named research.html.
    2. All the form text fields (e.g., first name) must be defined as required using the required HTML5 feature.
    3. Use the type=email to define the e-mail field.
    4. Your program must verify (using JavaScript) that a valid phone number has been provided. A valid phone number has the format ### ### #### where # is a digit. The message "Invalid phone number" will be generated if an invalid phone number is provided.
    5. Use of type=number for age with a minimum value of 1 and a maximum value of 125.
    6. Use of type=number to represent the height feet and inches values. For feet, the minimum value is 2 and the maximum is 7. For inches, the minimum value is 0 and the maximum is 11. 
    7. Use of type=number for weight with a minimum value of 1 and a maximum value of 600.
    8. Your program must verify (using JavaScript) that at least one condition ("High Blood Pressure","Diabetes", "Glaucoma", "Asthma", "None") has been selected. If no condition is provided, your program must generate the error message "No conditions selected". If the user selects any condition and also "None", your program will generate the error message "Invalid conditions selection".
    9. Your program must verify (using JavaScript) that at least one time period ("Never", "Less than a year", "One to two years", "More than two years") has been selected. Your program will generate the message "No time period selected" if none has been selected.
    10. The "Study Information" section includes a combo box with two options: "Long Term" (default) and "Short Term".
    11. Your program must verify (using JavaScript) that a valid study id has been provided. Valid ids have the following format A### B### where # is a digit. Your program will generate the message "Invalid study id" if an invalid id is provided.
    12. If after evaluating the data any errors are found, your program will not submit the form and will display a single message (using alert) where the fields with invalid data are identified. If the data is correct, a confirmation message ("Do you want to submit the form data?") will be displayed asking for a submission confirmation.
    13. The color associated with the legend is #A0522D
    14. For this project you may not use regular expressions and you may not use jQuery.
3. Functions
    1. It is up to you to define any functions you need, but you must have at least two functions. All functions and all the javascript code should be in a file named research.js.
    2. You should avoid code duplication.
4. Style Requirement
    1. The style and appearance should be close to what you see in the "Sample Run".
    2. Style information should be in a css file named research.css.
5. Server Processing
    1. The form data will be sent to the `/processForm` route that the server we provided you with will define. Your server will be running on localhost on port 3000. You will set this in your form tag using the action attribute.
    2. You will use get as the submission method.
    3. The names to use for form fields are: firstname, lastname, phoneFirstPart, phoneSecondPart, phoneThirdPart, email, age, heightFeet, heightInches, weight, highBloodPressure, diabetes, glaucoma, asthma, none, period, studyType, firstFourDigits, secondFourDigits (these last two correspond to the study id), and comments.
6. Grading
    * (20 pts) Form Implementation
        - Text fields for firstname, lastname, phone
        - Use of type=number for age, height, and weight
        - Use of checkboxes for conditions
        - Use of radio buttons for time period
        - Use of combo box for type of study
        - Use of text fields for study id
        - Text area
        - Clear and Submit buttons
        - All text fields (except text area) marked as required
        - Use of type=email type for email address entry
        - Place holders for study id
    * (5 pts) CSS Style
        - Shadow for Research Form title
        - Brown color legend
        - Round borders for fieldset areas
    * (70 pts) JavaScript Support
        - Phone Validation
        - Conditions (Diabetes, etc.) Validation
        - Time Period Validation
        - Study Id Validation
    * (5 pts) Form generates expected express server confirmation
