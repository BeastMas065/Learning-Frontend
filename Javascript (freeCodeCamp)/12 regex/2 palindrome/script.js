const checkBtn = document.getElementById("check-btn")
const input = document.getElementById("text-input")
const result = document.getElementById("result")

checkBtn.addEventListener("click", ()=>{
    if (input.value === ''){
        alert("Please input a value")
    }
});