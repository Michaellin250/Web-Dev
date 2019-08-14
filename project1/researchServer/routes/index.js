var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/processForm', function(req, res, next) {
  var temp = "";
  if (req.query.period == "OneToTwoYears")
    temp = "One To Two Years"

  if (req.query.period == "LessThanAYear")
    temp = "Less Than A Year"  
    
  if (req.query.period == "MoreThanTwoYears")
    temp = "More Than Two Years"

  res.render('result', { title: 'Database Entry Confirmation',
                        firstName: req.query.firstname,
                        lastName: req.query.lastname,
                        phoneFirstPart: req.query.phoneFirstPart,
                        phoneSecondPart: req.query.phoneSecondPart,
                        phoneThirdPart: req.query.phoneThirdPart,
                        email: req.query.email,
                        age: req.query.age,
                        heightFeet: req.query.heightFeet,
                        heightInches: req.query.heightInches,
                        weight: req.query.weight,
                        highBloodPressure: req.query.highBloodPressure,
                        diabetes: req.query.diabetes,
                        glaucoma: req.query.glaucoma,
                        asthma: req.query.asthma,
                        none: req.query.none,
                        period: temp,
                        studyType: req.query.studyType,
                        firstFourDigits: req.query.firstFourDigits,
                        secondFourDigits: req.query.secondFourDigits,
                        comments: req.query.comments
                      });
  console.log(req.query);
});


module.exports = router;
