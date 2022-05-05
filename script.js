var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

// function compute() {
//     p = document.getElementById("principal").value;
//     const computeButton = document.querySelector(".compute-interest")
//     computeButton.addEventListener("click", () => {
//         document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
//     })
    
// }

function compute() {
    document.getElementById("result").innerHTML = `If you deposit <mark>${principal}</mark>,\<br\>at an interest rate of ${rate} %\<br\>You will receive an amount of ${amount},\<br\>in the year ${year} \<br\>`;
};

function myFunction() {
    // Get the value of the input field with id="numb"
    let validatePrincipal = document.getElementById("principal").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) || x < 1) {
      alert("Enter a positive number");
    } else {
      text = "Input OK";
    }
  }