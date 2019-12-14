"use strict";
//window.alert("hello");
function hasdata1(element){
     //make sure there is data in this element
     if (element.value == ""){
         window.alert("missing input");
         return false;
     }
    return true;
}

function add()
{
     //get the two numbers from the “num1” and “num2” input boxes and store in variables
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");

    //make sure both boxes have input
    if (hasdata1(num1) && hasdata1(num2)){
        var n1 = Number(num1.value);

        var n2 = Number(num2.value);
     //alert(n1);
     //calculate and store the sum
        var sum = n1 + n2;
     //alert(sum);
     //display the result in the “answer” h2 element
        document.getElementById("answer1").innerHTML = n1 + " + " + n2 + " = " + sum;
    }
}

function reset1() {
        //window.alert("reset");
        //clear the elements on the page
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("answer1").innerHTML = "";
}

