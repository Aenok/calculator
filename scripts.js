document.addEventListener("DOMContentLoaded", function(event){
    let total;
    let num1;
    let num2;
    let op;
    let next;

    
    let display = document.getElementById("display");
    let rows = document.getElementsByClassName("row");

    tabulaRasa();
    

    for(let i = 0; i < rows.length; i++){
        
        // button clicking functionality
        rows[i].addEventListener("click", (e) => {

            
            if(e.target.id == "c") {
                tabulaRasa();
            }

            if(e.target.id == "perc") {
                if(!next) {
                    num1 /= 100;
                    total = num1;
                    display.innerText = total;
                } else {
                    num2 = num2 / 100;
                    display.innerText = num2;
                }
            }

            if(e.target.id == "neg") {
                if(!next) {
                    num1 *= -1;
                    total = num1;
                    display.innerText = total;
                } else {
                    num2 *= -1;
                    total = num2;
                    display.innerText = total;
                }
            }

            if(e.target.classList.contains("sign2") && e.target.id != "eq") {
                if (op.length == 0) {
                    op = e.target.id;
                    next = !next;
                } else {
                    num1 = operate(num1, num2, op);
                    total = num1;
                    display.innerText = total;
                    num2 = "";
                    op = e.target.id;
                    //next = !next;
                }
            }

            if(e.target.id == "eq") {
                if(num2.length > 0) {
                    num1 = operate(num1, num2, op);
                    total = num1;
                    display.innerText = total;
                    num2 = "";
                    op = "";
                    next = !next;
                }
            }


            if(e.target.classList.contains("nums")) {
                if(display.innerText.length < 6) {
                    if(!next) {
                        num1 += e.target.innerText;
                        total = num1;
                        display.innerText = total;
                    } else {
                        num2 += e.target.innerText;
                        display.innerText = num2;
                    }
                }
            }
        });

    }

    function tabulaRasa() {
        total = 0;
        num1 = "";
        num2 = "";
        op = "";
        next = false;
        display.innerText = total;
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

        let n1 = parseInt(operand1);
        let n2 = parseInt(operand2);
        console.log(`num1 = ${n1}, num2 = ${n2}, operator = ${operator}`);
        switch(operator) 
        {
            case '+':
                return add(n1, n2);
            case '-':
                return subtract(n1, n2);
            case '*':
                return multiply(n1, n2);
            case '/':
                return divide(n1, n2);
        }
    }

});