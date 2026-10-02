const checkBtn = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
    const originalText = input.value;

    if (originalText === "") {
        alert("Please input a value");
        return;
    }

    const cleanedText = originalText
        .replace(/[^a-zA-Z0-9]/g, "")
        .toLowerCase();

    const reversedText = cleanedText
        .split("")
        .reverse()
        .join("");

    if (cleanedText === reversedText) {
        result.textContent = `${originalText} is a palindrome`;
    } else {
        result.textContent = `${originalText} is not a palindrome`;
    }
});