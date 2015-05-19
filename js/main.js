(function(){
  'use strict';

  /*
    Variables
  */

  var calculation = 0;
  var displayedCalculation = "0";
  var pendingOperation;
  var $display = document.querySelector('.calculated');

  /*
    Event handler functions
  */

  function numberButtonPressed(event) {
    var number = Number(event.target.textContent);
    if(pendingOperation !== undefined) {
      switch (pendingOperation) {
        case "+":
          calculation += number;
          break;
        case "-":
          calculation -= number;
          break;
        case "/":
          calculation /= number;
          break;
        case "*":
          calculation *= number;
          break;  
      }
      pendingOperation = undefined;
      $display.textContent = number;
    } else {
      displayOrConcatenateNumber(number);
    }
  }

  function decimalButtonPressed(event) {

  }

  function operatorButtonPressed(event) {
    pendingOperation = event.target.textContent;
  }

  function equalButtonPressed(event) {
    $display.textContent = calculation;
  }

  function clearButtonPressed(event) {
    calculation = 0;
    $display.textContent = "0";
  }

  /*
    Utility functions
  */
  function displayOrConcatenateNumber(inputNumber) {
    if(calculation === 0) {
      calculation = Number(inputNumber);
      displayedCalculation = String(inputNumber);
    } else {
      calculation = Number(displayedCalculation + inputNumber);
      displayedCalculation = String(displayedCalculation + inputNumber);
    }
    $display.textContent = displayedCalculation;
  }

  /*
    Setup event handlers
  */

  [].forEach.call(document.querySelectorAll('.calc-button.number'), function(element){
    element.addEventListener('click', numberButtonPressed);
  }, false);

  [].forEach.call(document.querySelectorAll('.calc-button.operator'), function(element){
    element.addEventListener('click', operatorButtonPressed);
  }, false);
  
  [].forEach.call(document.querySelectorAll('.calc-button.ac'), function(element){
    element.addEventListener('click', clearButtonPressed);
  }, false);
  
  document.querySelector('.period').addEventListener('click', decimalButtonPressed);
  document.querySelector('.equal').addEventListener('click', equalButtonPressed);

})();