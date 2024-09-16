//storing equation
let equation;
//storing error function
let error = false;

//operating function
function operate() {
    error = false;
    equation = prompt("Welcome to the A.S.M.D Calculator! Type your equation here or type 'Rules' for the rules.");

    //check if user wants rules page then displays rules
    if (equation == "Rules") {
        prompt("Only +, -, *, or / are accepted. Numbers only, words crash the program. To do exponents write them with two * Ex: 3**2 = 9. Press enter to start calculator.")
        operate();
    } else {
        //Checks if equation doenst have letters
        if (errorCode(equation) == true) {

            if (eval(equation) == Infinity) {
                prompt("Error, can not devide by zero. Press enter to restart.")
                operate();
            }
            else {
                prompt("Your answer is " + eval(equation) + ". Press enter to restart calculator.");
                operate();
            }
        } else {
            prompt("Error, can not contain letters. Press enter to restart.")
            operate();
        }

    }
}

//checks wheather string contains letters
function errorCode(str) {
    const letterPattern = /[a-zA-Z]/;
    return !letterPattern.test(str);
}

//call operating function
operate()