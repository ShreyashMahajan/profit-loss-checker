var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#qty-stock");
var currentPrice = document.querySelector("#current-price");

var submitBtn = document.querySelector("#sbmt-btn");

var outputBox = document.querySelector("#output-box");

submitBtn.addEventListener("click",submitHandler);

function submitHandler(){
    var inprice = initialPrice.value ;
    var totalStocks = stockQuantity.value;
    var curr = currentPrice.value;

    profitAndLossCalculator(inprice,totalStocks,curr);
}

function profitAndLossCalculator(inpr,stqty,crnt){
    if(inpr > crnt) {
       var loss = (inpr-crnt)*stqty;
       var lossPer = ((inpr-crnt)/inpr)*100;
        //message
    } else if (crnt > inpr){
        var profit = (crnt-inpr)*stqty;
        var profitPer = ((crnt-inpr)/inpr)*100;
        // message
    }else {
        var a=4;
        showMessage("hi");
        showMessage(a);
    }
}

function showMessage (msg){
    outputBox.innerText = msg;
}