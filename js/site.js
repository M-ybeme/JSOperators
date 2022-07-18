function getNumbers(){

    //get first value from page
    let num1 = document.getElementById("numberOne").value;
    //get second value form page
    let num2 = document.getElementById("numberTwo").value;

    //try to convert numbers
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        
        swal.fire({
            backdrop: false,
            title: 'JS Operators',
            text: "You Must Enter Numbers"
        });

        return;
        
    } 
    let sum = sumNumbers(num1, num2);

    let sub = subNumbers(num1, num2);

    let product = multiplyNumbers(num1, num2);

    let quotient = divideNumbers(num1, num2);

    let r = remainder(num1, num2)
    
    let sumAll = addAllNumbers(num1, num2)

    let factorial = factorialNumbers(num1, num2)
    
    //add the value in the debug console
    console.log("sub=" + sub);
    console.log("sum=" + sum);
    console.log("prod=" + product);
    console.log("div=" + quotient);
    console.log("rem=" + r);
    console.log("sumAll=" + sumAll);
    console.log("factorial=" + factorial);


    }


    //adds two numbers and returns the result
function sumNumbers(number1, number2) {
 
    sum = number1 + number2;
    return sum;

}
function subNumbers(number1, number2) {

    sub = number1 - number2;
    return sub;
}
function multiplyNumbers(number1, number2) {

    product = number1 * number2;
    return product;
}
function divideNumbers(number1, number2) {

    quotient = number1 / number2;
    return quotient;
}
function remainder(number1, number2) {

    let remainder = number1 % number2;
    return remainder;
}

function addAllNumbers(startNumber, endNumber) {
    
    //3 6
    //3+4+5+6
    //return is 18

    let sum = 0;
    for (let i = startNumber; i <= endNumber; i++) {
        sum = sum + i;
    }
    return sum;
}

function factorialNumbers(startNumber, endNumber) {
    let product = 1;
    for (let i = startNumber; i <= endNumber; i ++) {
        product = product * i;
    }
    return product;
        
    }
