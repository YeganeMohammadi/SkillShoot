const transaction_result = localStorage.getItem("situation")

const modal = document.getElementById("Modal")
const container_one = document.getElementsByClassName("container")[0]
const container_tow = document.getElementsByClassName("container")[1]
const container_tree = document.getElementsByClassName("container")[2]
const closeBtn = document.getElementById('close-modal-btn')

if(transaction_result == "success"){
    modal.classList.remove("hidden")
    container_one.classList.add('blur-sm')
    container_tow.classList.add('blur-sm')
    container_tree.classList.add('blur-sm')
}


closeBtn.addEventListener('click', close_modal)
document.addEventListener('click',function(e){
    if (e.target === modal && !modal.classList.contains("hidden")){
        close_modal();
    }
})
function close_modal(){
    modal.classList.add('hidden')
    container_one.classList.remove('blur-sm')
    container_tow.classList.remove('blur-sm')
    container_tree.classList.remove('blur-sm')
    console.log("Done!")
}

