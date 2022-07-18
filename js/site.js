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
    //calling Numbers
    let sum = sumNumbers(num1, num2);

    let sub = subNumbers(num1, num2);

    let product = multiplyNumbers(num1, num2);

    let quotient = divideNumbers(num1, num2);

    let r = remainder(num1, num2)
    
    let sumAll = addAllNumbers(num1, num2)

    let factorial = factorialNumbers(num1, num2)

    displayResults(sum,sub,product,quotient,r,sumAll,factorial)
    

    //add the value in the debug console
     console.log("sub=" + sub);
     console.log("sum=" + sum);
     console.log("prod=" + product);
     console.log("div=" + quotient);
     console.log("rem=" + r);
     console.log("sumAll=" + sumAll);
     console.log("factorial=" + factorial);

    //display all the results from our math

    function displayResults(sumResult, subResult, productResult, quotientResult, rResult, sumAllResult, factorialResult) {
        let results = document.getElementById("results");
        results.innerHTML= ""
        //creat p tags 
        let pTag = document.createElement("p");
        pTag.classList.add("pResults");
        pTag.innerHTML = "The sum of the numbers = " + sumResult;

        let pTagSub = document.createElement("p");
        pTagSub.classList.add("pResults");
        pTagSub.innerHTML = "The difference between the numbers = " + subResult;

        let pTagQuotient = document.createElement("p");
        pTagQuotient.classList.add("pResults");
        pTagQuotient.innerHTML = "The quotient of the numbers = " + quotientResult;

        let pTagProduct = document.createElement("p");
        pTagProduct.classList.add("pResults");
        pTagProduct.innerHTML = "The product of the numbers = " + productResult;

        let pTagR = document.createElement("p");
        pTagR.classList.add("pResults");
        pTagR.innerHTML = "The remainder of the numbers = " + rResult;

        let pTagSumAll = document.createElement("p");
        pTagSumAll.classList.add("pResults");
        pTagSumAll.innerHTML = "The Sum of  all the numbers = " + sumAllResult;

        let pTagFactorial = document.createElement("p");
        pTagFactorial.classList.add("pResults");
        pTagFactorial.innerHTML = "The factorial of all the numbers = " + factorialResult;

        results.appendChild(pTag);
        results.appendChild(pTagSub);
        results.appendChild(pTagQuotient);
        results.appendChild(pTagProduct);
        results.appendChild(pTagR);
        results.appendChild(pTagSumAll);
        results.appendChild(pTagFactorial);
        
    }
    // add to inner html of the result div
    // results.appendchild(pTag);
    // results.appendchild(pTagSub);
    // results.appendchild(pTagQuotient);
    // results.appendchild(pTagProduct);
    // results.appendchild(pTagR);
    // results.appendchild(pTagSumAll);
    // results.appendchild(pTagFactorial);

    
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
