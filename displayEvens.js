function findEven(startingNumber, endingNumber, step){
    var evenNumbers = [];
    startingNumber = Number(startingNumber);
    endingNumber = Number(endingNumber)
    step = Number(step)

    for(var i = startingNumber; i<endingNumber; i +=step){
        if(i%2==0){
            evenNumbers.push(i);
        }
    }
    return evenNumbers;
}

function clearErrors() {    
    
    for (var i = 0; i < document.forms["evenNumbers"].elements.length; i++) {
    
        if (document.forms["evenNumbers"].elements[i].parentElement.className.indexOf("has-") != -1) {
            document.forms["evenNumbers"].elements[i].parentElement.className = "form-group";
        }
    }    
}

function validateItems() {
    clearErrors();
    var num1 = document.forms["evenNumbers"]["firstNumber"].value;
    var num2 = document.forms["evenNumbers"]["secondNumber"].value;
    var step = document.forms["evenNumbers"]["step"].value;

    if (num1 == "" || isNaN(num1)){
        alert("Starting Number must be filled with a valid integer.");
        document.forms["evenNumbers"]["firstNumber"].parentElement.className = "form-group has-error";
        document.forms["evenNumbers"]["firstNumber"].focus();
        return false;
    }
    if (num2 == "" || isNaN(num2) || Number(num2) <=num1){
        alert("Ending Number must be filled with a valid integer.");
        document.forms["evenNumbers"]["secondNumber"].parentElement.className = "form-group has-error";
        document.forms["evenNumbers"]["secondNumber"].focus();
        return false;
    }
    if (step == "" || isNaN(step) || step <=0){
        alert("Starting number must be filled with a valid integer.");
        document.forms["evenNumbers"]["step"].parentElement.className = "form-group has-error";
        document.forms["evenNumbers"]["step"].focus();
        return false;
    }

    document.getElementById("results").style.display = "block";
    document.getElementById("resultHeading").innerText = "These are the even numbers between " + num1 + " and " + num2 + " by " + step;
    document.getElementById("evenResults").innerText = findEven(num1, num2, step);

    return false;
}