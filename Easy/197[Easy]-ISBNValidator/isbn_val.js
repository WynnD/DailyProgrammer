/**
 * Created by Wynn Drahorad on 1/16/2015.
 */

window.onload = function() {
    // set variables
    var go = document.getElementById("go");
    var test = document.getElementById("test");
    var answer = document.getElementById("answer");

    // test function
    var isISBN = function () {
        // use split() and join() as sort of replaceAll() method
        var patient = test.value.split("-").join("");
        var total = 0;

        // check if ISBN is ten digits long
        if (patient.length =! 10) {
            return false;
        }

        for (var i = 0; i < patient.length; i++) {
            if (patient.charAt(i).toLowerCase() === "x" && i === 9) {
                total += 10 * (10 - i);
            } else {
                total += Number(patient.charAt(i)) * (10 - i);
            }
        }

        return (total % 11 === 0);
    };

    go.onclick = function() {
        answer.innerHTML = isISBN()?"Valid ISBN Number":"Invalid ISBN Number";
    };

};