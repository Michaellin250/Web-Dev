// place your javascript code here

'use strict';

function main(){
  document.getElementById("submit").onclick = validate;
  document.getElementById("reset").onclick = reset;
}

function reset(){
  document.getElementById("theForm").reset();
}

function validate(){
  
  
  var checkPhon = checkPhoneNumber();
  var checkBox = checkBoxes();
  var checkTime = checkTimePeriod();
  var checkValidId = checkValidId();

  if(checkPhon && checkBox && checkTime && checkValidId){
    var stringInput = "Do you want to submit the form data?\n";
    
    if(window.confirm(stringInput)){
      document.theForm.submit();
    }
    
  }
}

function checkBoxes(){

  var highCheckBox = document.getElementById("highBloodPressure");
  var diaBetesCheckBox = document.getElementById("diabetes");
  var glauBox = document.getElementById("glaucoma");
  var asthBox = document.getElementById("asthma");
  var NoBox = document.getElementById("none");
  
  if(!(highCheckBox.checked || diaBetesCheckBox.checked || glauBox.checked || asthBox.checked || NoBox.checked)){
    alert("No conditions selected");
    return false;
  } else if((highCheckBox.checked || diaBetesCheckBox.checked || glauBox.checked || asthBox.checked) && NoBox.checked){
    alert("Invalid conditions selection");
    return false;
  }

  return true;
}

function checkTimePeriod(){
  var category = document.getElementsByName("period");
  var oneSelected = false;
  
  for(var idx = 0; idx < category.length; idx++){
    
    if(category[idx].checked){
      oneSelected = true;
    }
  
  }

  if(!oneSelected){
    alert("No time period selected");
    return false;
  } else{
    return true;
  }
} 

function checkValidId(){
  var study1InHTMLFORM = document.getElementById("firstFourDigits");
  var study2InHTMLFORM = document.getElementById("secondFourDigits");

  var studyVal = study1InHTMLFORM.value;
  var studyVal2 = study2InHTMLFORM.value;

  if(studyVal.length != 4 || studyVal2.length != 4 || studyVal[0] != 'A' || studyVal2[0] != 'B'){
    alert("Invalid study id");
    return false;
  } else {
    var afterValStudy = studyVal.substr(1);
    var afterVal2Study = studyVal2.substr(1);
   
    if(isNaN(parseInt(afterValStudy)) || isNaN(parseInt(afterVal2Study))){ 
      alert("Invalid study id");
      return false;
    }
  }

  return true;
}

function checkPhoneNumber(){
  var phon1InHTMLFORM = document.getElementById("phoneFirstPart");
  var phon2InHTMLFORM = document.getElementById("phoneSecondPart");
  var phon3InHTMLFORM = document.getElementById("phoneThirdPart");

  var val1 = phon1InHTMLFORM.value;
  var val2 = phon2InHTMLFORM.value;
  var val3 = phon3InHTMLFORM.value;

  if(val1.length != 3 || val2.length != 3 || val3.length != 4 || isNaN(val1) || isNaN(val2) || isNaN(val3)){
    alert("Invalid phone number");
    return false;
  } else{
    return true;
  }
}
