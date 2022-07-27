/* Simple Function */
let output = document.getElementById("output");

function calc(n1, n2) {

    return n1 + n2;

}

output.innerHTML = calc( 5, 5 );

/* Change Bg */
let bg = document.querySelector(".container");

function changebg() {

    bg.classList.toggle("mystyle");

}