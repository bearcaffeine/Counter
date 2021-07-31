
//get the values from the page
//stars or controler funciton
function getValues(){
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
        //we need to call generateNumbers
        let numbers = generateNumber(startValue, endValue);
        
        //we need to call displayNumbers
        displayNumbers(numbers);
    }else{
        alert("You must enter integers.");
    }

}

//generate numbers from start value to end value
//logic function(s)
function generateNumber(sValue, eValue){
    let numbers = [];

    //we want to get all number from start to end
    for(let index = sValue; index <= eValue; index++){
        
        //this will execute in a loop until index = eValue
        numbers.push(index);
    }

    return numbers;
}

//display the numbers and mark even numbers bold
//display or view function
function displayNumbers(numbers){

    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {
        
        let className = "even";
        let number = numbers[index];

        if(number % 2 == 0){
            className = "even";
        }else {
            className="odd"  
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;

}