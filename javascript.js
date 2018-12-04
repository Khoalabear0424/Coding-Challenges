function mydatefunction(){

var dateAndTime = document.getElementById("dateAndTime");
var d = new Date();
var t = d.getTime();


dateAndTime.innerHTML = "Today is : " + d + "<br>"+ "Current Time is : "  + t;

}

function myTriangleFunction(){
    var s1, s2, s3;
    s1 = document.getElementById("side1").value*1; //multiplying by 1 makes sure that any future operations dont concatenate the integers
    s2 = document.getElementById("side2").value*1;
    s3 = document.getElementById("side3").value*1;

    //Use Heron's Formua  :  A=sqrt(p*(p-a)*(p-b)*(p-c))
    var p = (s1 + s2 + s3)/2;
    var A = Math.sqrt(p*(p-s1)*(p-s2)*(p-s3));
    var Area = A.toFixed(2);
    
    //send back information to html and embed it inside the previously empty <p> tags
    var areaOfTriangle = document.getElementById("triangle");
    areaOfTriangle.innerHTML = "The area of the triangle is: " + Area + " ft<sup>2</sup>";
}

function rngGeneratorFunction(){
    var guess, rngResult;

    guess = document.getElementById("guess").value;
    rngGenerator = Math.floor((Math.random()*3)+1); //.random() generates a number between 0 and 1 but like in decimals and floor rounds a nmber down to the nearest integer! the +1 just makes sure it doesnt generate 0.
    console.log(rngGenerator);

    if(guess==rngGenerator){
        rngResult = document.getElementById("resultOfGuess");
        rngResult.innerHTML = "My guess was " + rngGenerator + " too! You Win!";
    }
    else {
        rngResult = document.getElementById("resultOfGuess");
        rngResult.innerHTML = "Wrong! My guess was " + rngGenerator + " <br>You suck dick";
    }
}

var dogs = ["german shepard", " Beagle", " Husky", "Assuie"];

var addCats = ["stupid cat", " Evil cat", "Fat Car"];

function dogList(){

    rngGenerator = Math.floor((Math.random()*3)+1); 
    dogs.push(addCats[rngGenerator]);

    var list = document.getElementById("array");
    list.innerHTML = dogs;
    
}

function oddEvenSeparator(){
    var input, numberList, sepInt;

    var input = document.getElementById("longInt").value;
    //console.log(input);

    numberList = input.split("");
    //console.log(numberList);

    x = numberList.length;
    while(x--){ //this works with the array in reverse.  the reason why we want to do this is because since we are adding values to the array, the length will kee changing.  this will fuck up the boundaries of our loop.
        if(numberList[x] % 2 == 0 && numberList[x-1] % 2 == 0){
            numberList.splice(x, 0, " BALLS ");
        }
        else if (numberList[x-1] % 2 != 0 && x > 1){
            x--;
        }
    }
    sepInt = document.getElementById("seperatedNumbers");
    sepInt.innerHTML = numberList.join("");
}


function createMatrix(h , w){
    matrix = [];

    for (var i = 0 ; i < h ; i++){
        matrix [i] = [];
        for ( var j = 0 ; j < w ; j++){
            matrix [i][j] = Math.floor(Math.random()*10+1);
        }
    }
    return matrix;
}

function generateMatrix(){
    var n = document.getElementById("matrixSize").value*1;
    result = createMatrix(n,n)
    
    var displayMatrix = document.getElementById("matrixHere");
    displayMatrix.innerHTML = result.join("<br>"); //using .join combines all the values of the array into a string and whatever is in () is placed in between each string.
    console.log(result);
}

function diagonalForward(){
    var diagonal = [];

    for (var i = 0 ; i < result.length ; i++){
        diagonal.push(result[i][i]);
    }

    console.log(diagonal);
    var insideForward = document.getElementById("displayForward");
    insideForward.innerHTML = "Diagonal Line of the Matrix! <hr>" + diagonal;
}

function diagonalBackward(){
    var diagonal = [];
    var i = result.length;

    while(i--){
        diagonal.push(result[i][i]);
    }

    console.log(diagonal);
    var insideBackward = document.getElementById("displayBackward");
    insideBackward.innerHTML = "Diagonal Line of Matrix in Reverse!! <hr>" + diagonal;
}

function mergeSort(){
    var array1, arrary2;

    var innerarray1 = document.getElementById("input1").value;
    var innerarray2 = document.getElementById("input2").value;

    array1 = (""+innerarray1).split(",");
    array2 = (""+innerarray2).split(",");
    var mergeArray = array1.concat(array2);
  
    var sortArray = mergeArray.sort(function(a, b){return a-b});

    var result = document.getElementById("mergeSortArray");
    result.innerHTML = sortArray;
}

function fact(n){

    if(n < 0){   //kill-safe - doesnt let the function run if the input doesnt make any sense ex. factorial cant be negative
        
        return;
    }

    if(n === 1)  {// base case - this is the convergence of our recursion.  the stack will unwind when this case occurs also, === means equivalence of both type and value
        
        return 1;
    }
    else{
        return n*fact(n-1);
        
    }
}


function findFact(){
    
    var n = document.getElementById("input").value*1;
    var output = document.getElementById("result");

    if(n<0){
        output.innerHTML = "Wrong input! <br> Cannot use negative Numbers!";   
    }

    if(n===1){
        output.innerHTML = "The factorial is: 1"; 
    }
    else{
        output.innerHTML = "The factorial is:" + fact(n);
    }
}


console.log("Hello!")

