$(document).ready(function() {
  var $numButton = $('.number');
  var $opButton = $('.operator');
  var $math = $('.calculate');
  var $calcScreen = $('.calculation-field');
  var $clearScreen = $('.clear');
  var $outputScreen = $('.output-field');
  var $clearAll = $('.clear-all');
  var $undoOne = $('.undo-one');
  var firstNum = "";
  var secondNum = "";
  var operator = "";
  var result = 0;

  var resetCalc = function() {
    $calcScreen.html('');
    firstNum = "", secondNum = "", operator = "";
  }

  var fixScreen = function(newOp) {
    $calcScreen.html('').append(firstNum);
    operator = newOp;
    // console.log("the fixScreen newOp is: " + newOp);
  }

  var reuseNum = function() {
    firstNum = result;
    $calcScreen.append(firstNum);
  }

  $numButton.click(function(){
    operator == '' ? firstNum += this.id : secondNum += this.id;
    $calcScreen.append(this.id);
    // console.log(this.id);
    // console.log(firstNum);
    // console.log(secondNum);
  });

  $opButton.click(function() {
    firstNum == '' ? reuseNum() : (firstNum);
    operator == '' ? (operator = this.id) : fixScreen(this.id);
    $calcScreen.append(operator);
    console.log(operator);
  });

  $clearScreen.click(function() {
    resetCalc();
  });

  $clearAll.click(function() {
    resetCalc();
    $outputScreen.html('');
    result = 0;
  });

  $undoOne.click(function() {
    // debugger
    if(secondNum.length > 0) {
      secondNum = secondNum.slice(0, -1);
      $calcScreen.html('').append(firstNum).append(operator).append(secondNum);
    } else if(operator.length > 0) {
      operator = "";
      $calcScreen.html('').append(firstNum);
    } else if(firstNum.length > 0) {
      firstNum = firstNum.slice(0, -1);
      $calcScreen.html('').append(firstNum);
    } else {
      $calcScreen.html('');
    }
  });

  $math.click(function() {
    switch(operator) {
      case '+':
        result = parseInt(firstNum) + parseInt(secondNum);
        break;
      case '-':
        result = parseInt(firstNum) - parseInt(secondNum);
        break;
      case '*':
        result = parseInt(firstNum) * parseInt(secondNum);
        break;
      case '/':
        result = parseInt(firstNum) / parseInt(secondNum);
        break;
      default:
        console.log("Something went wrong. Please try again.");
    }
    resetCalc();
    $outputScreen.append(result + " ");
  });

  console.log("document.ready function ran");
});