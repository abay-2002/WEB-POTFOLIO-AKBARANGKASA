// DAY/NIGHT-MODE
let darkMode = document.getElementById('ganti');
let body = document.getElementsByTagName('body')[0];

darkMode.addEventListener('click',function(){
    darkMode.classList.toggle('toggle-mode-night');
    body.classList.toggle('dark-mode');
});

// ==== EXPENSE INPUT ====
// title
let titleInput = document.getElementById("title-input");
titleInput.addEventListener('change',function(event){
    valueTitle = event.target.value;
});

// amount
let amountInput = document.getElementById("amount-input");
amountInput.addEventListener('change',function(event){
    valueAmount = event.target.value;
});

// date
let dateInput = document.getElementById("date-input");
dateInput.addEventListener('change',function(event){
    valueDate = event.target.value;
});

let buttonSubmit = document.getElementById("expenseSubmit");
buttonSubmit.addEventListener("click",function(event){
    event.preventDefault();

    let expenseInput = {
        title: valueTitle,
        amount: valueAmount,
        date: new Date(valueDate)
    }
    
    console.log(expenseInput);

});
// ==== EXPENSE INPUT CLOSE ====

// ==== MY EXPENSE ====










