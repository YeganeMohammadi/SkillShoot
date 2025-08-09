const backBtn = document.getElementById("back-to-buy-class")

let transaction_result = "success"

backBtn.addEventListener('click',function(e){
    localStorage.setItem("situation" , transaction_result)
})