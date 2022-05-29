

//Sliders setup

var lengthSlider = document.getElementById("lengthSlider");
document.getElementById("lengthValue").innerHTML = lengthSlider.value;

lengthSlider.oninput = function() {
    document.getElementById("lengthValue").innerHTML = lengthSlider.value;
}


var rangeSlider = document.getElementById("rangeSlider");
document.getElementById("rangeValue").innerHTML = rangeSlider.value;

rangeSlider.oninput = function() {
    document.getElementById("rangeValue").innerHTML = rangeSlider.value;
}

const resetSliders = document.getElementById("resetSliders");

resetSliders.addEventListener("click", function(e){
    lengthSlider.value = 10;
    rangeSlider.value = 20;
    document.getElementById("lengthValue").innerHTML = lengthSlider.value;
    document.getElementById("rangeValue").innerHTML = rangeSlider.value;
});



//Making the array

var arr = createArr(lengthSlider.value, rangeSlider.value);

randomArray.addEventListener("click", function(e){
    arr = createArr(lengthSlider.value, rangeSlider.value);
});

const bubbleSortButton = document.getElementById("bubbleSortButton");

bubbleSortButton.addEventListener("click", function(e){
    console.log(bubbleSort(arr));
});

//Bubble sort
function bubbleSort(arr) {
    var sortedArr = arr;
    var sorted;
    var temp;
    while (true) {
        sorted = true;
        for (i=0; i<sortedArr.length; i++) {
            if (arr[i]>arr[i+1]) {
                sorted = false;
                temp = sortedArr[i+1];
                sortedArr[i+1] = sortedArr[i];
                sortedArr[i] = temp;
            }
        }
        if (sorted==true) { break; }
    }
    return sortedArr
}

//Create a random array
function createArr(length, range) {
    var newArr = [];
    for (i=0; i<length; i++) {
        newArr.push(Math.floor(Math.random()*range));
    }
    return newArr;
}