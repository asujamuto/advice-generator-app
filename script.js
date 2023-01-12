
function getAdvice() {
    let num;
    let num_of_quote = document.getElementById("quote_number")
    const res = document.getElementById("quote");
    fetch('	https://api.adviceslip.com/advice').then(response => {
    return response.json();}).then(adviceData => {
    const Adviceobj = adviceData.slip;
    console.log(adviceData.slip.advice)
    num = adviceData.slip.id
    res.innerHTML = adviceData.slip.advice;
    num_of_quote.innerHTML = num;
    console.log(adviceData.slip.advice);
    }).catch(error => {
    console.log(error);
    });
    }

a = getAdvice()


let button = document.getElementById("button")

button.addEventListener("click", function(){
    window.location.reload();
  });