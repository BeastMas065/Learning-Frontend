    const text = document.querySelector("#text-input");
const para = document.querySelector("p");

let count = 0

const add = () => {
    para.innerHTML = `Character Count: ${text.value.length <= 50 ? text.value.length : 50}/50`;
    if (text.value.length >= 50) {
        para.style.color = "red";
        text.value = text.value.slice(0, 50)
    } else {
        para.style.color = "black";
    }
}

text.addEventListener("input", add)