let answer;


function opertate(){
    let num1 = prompt("Welcome to the A.S.M.D Calculator! What is your first number?");
    let num2 = prompt("What is your second number");
    let operator = prompt("What is the operator for your equation?");
    if (operator == "+") {
        answer = (parseFloat(num1)+parseFloat(num2))
    } else if (operator = "-") {
        answer == (parseFloat(num1)-parseFloat(num2))
    } else if (operator = "*") {
        answer == (parseFloat(num1)*parseFloat(num2))
    } else if (operator = "/") {
        answer == (parseFloat(num1)*parseFloat(num2))
    } else {
        console.log("Operator invalid. Please re-enter.")
        opertate();
    }

   if (answer == "undifined" || answer == "NaN") {
    prompt("Oops! Something went wrong! Make sure you only use numbers and operators. Press enter to restart.")
    opertate();
   } else {
    console.log(answer);
    prompt("Your answer is " + answer + ". Press enter to restart calculator")
    opertate();
   }

}

opertate();