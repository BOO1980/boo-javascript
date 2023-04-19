const myElement = document.getElementById("demo");

function myValidateFunction() {
    const inpObj = document.getElementById("input1");
    if (!inpObj.checkValidity()) {
      document.getElementById("demo").innerHTML = inpObj.validationMessage;
    } else {
      document.getElementById("demo").innerHTML = "Input OK";
    } 
  } 
