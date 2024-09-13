let equation
function operate(){
    equation = prompt("Welcome to the A.S.M.D Calculator! Type your equation here or type Rules for the rules.");
    if (equation == "Rules") {
        prompt("Only +, -, *, or / are accepted. Numbers only, words crash the program. Press enter to start calculator.")
        operate();
    } else {
        if (isNaN(eval(equation))){
            prompt("Error, is not a number. Press enter to restart.")
            operate();
        } else if (eval(equation) == Infinity) {
            prompt("Error, can not devide by zero. Press enter to restart.") 
            operate();
        }else {
        prompt("Your answer is " + eval(equation) + ". Press enter to restart calculator.");
        operate();}
    }
}
operate()