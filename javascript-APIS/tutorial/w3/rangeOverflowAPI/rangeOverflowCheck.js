const myElement = document.getElementById("demo");

function myValidateFunction() {
    const inpObj = document.getElementById("input1");
    if (inpObj.validity.rangeOverflow) {
      document.getElementById("demo").innerHTML = inpObj.validationMessage;
    } else {
      document.getElementById("demo").innerHTML = "Input OK";
    } 
  } 
