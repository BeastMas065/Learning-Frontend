const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");

const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

const getFlags = () => {
    let str = "";

    if (caseInsensitiveFlag.checked) str = str + "i";

    if (globalFlag.checked) str = str + "g";

    return str;
};

testButton.addEventListener("click", () => {
    const regex = new RegExp(regexPattern.value, getFlags());
    const text = stringToTest.innerText;

    const matches = text.match(regex);

    if (matches) {
        testResult.innerText = matches.join(", ");

        stringToTest.innerHTML = text.replace(
            regex,
            '<span class="highlight">$&</span>'
        );
    } else {
        testResult.innerText = "no match";
    }
});