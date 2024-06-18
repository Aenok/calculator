document.addEventListener("DOMContentLoaded", function(event){

    let num1;
    let num2;
    let op;

    let display = document.getElementById("display");
    display.innerText = "0";

    let rows = document.getElementsByClassName("row");

    for(let i = 0; i < rows.length; i++){
        
        // button clicking functionality
        rows[i].addEventListener("click", (e) => {
            console.log(e.target.innerText);
        });

        rows[i].addEventListener("onmousedown", (e) => {
            if(e.target.classList.contains("sign1")) {
                e.target.style["background-color"] = "white";
            }
        });
    }

    function add(a,b) 
    {
        return a + b;
    }

    function subtract(a,b) 
    {
        return a - b;
    }

    function multiply(a,b) 
    {
        return a * b;
    }

    function divide(a,b) 
    {
        return a / b;
    }

    function operate(operand1, operand2, operator) 
    {
        switch(operator) 
        {
            case '+':
                return add(operand1, operand2);
            case '-':
                return subtract(operand1, operand2);
            case '*':
                return multiply(operand1, operand2);
            case '/':
                return divide(operand1, operand2);
        }
    }

});