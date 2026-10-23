const arrContainer = document.getElementById("array-container");
const startingArray = document.getElementById("starting-array");
const generateBtn = document.getElementById("generate-btn");
const sortBtn = document.getElementById("sort-btn");

const ARRAY_LENGTH = 5;

const generateElement = () => Math.floor(Math.random() * 100) + 1;

const generateArray = () =>
  Array.from({ length: ARRAY_LENGTH }, () => generateElement());

const generateContainer = () => document.createElement("div");

const fillArrContainer = (element, arr) => {
  element.innerHTML = "";
  arr.forEach((num) => {
    const span = document.createElement("span");
    span.textContent = num;
    element.appendChild(span);
  });
};

const isOrdered = (a, b) => a <= b;

const swapElements = (arr, index) => {
  if (!isOrdered(arr[index], arr[index + 1])) {
    [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
  }
};

const highlightCurrentEls = (element, index) => {
  const children = Array.from(element.children);
  [children[index], children[index + 1]].forEach((child) => {
    if (child) {
      child.style.border = "3px dashed red";
    }
  });
};

generateBtn.addEventListener("click", () => {
  Array.from(arrContainer.children).forEach((child) => {
    if (child !== startingArray) {
      child.remove();
    }
  });
  fillArrContainer(startingArray, generateArray());
});

sortBtn.addEventListener("click", () => {
  const arr = Array.from(startingArray.children).map((span) =>
    parseInt(span.textContent, 10)
  );
  if (arr.length < 2 || arr.some(Number.isNaN)) return;

  Array.from(arrContainer.children).forEach((child) => {
    if (child !== startingArray) {
      child.remove();
    }
  });
  fillArrContainer(startingArray, arr);
  highlightCurrentEls(startingArray, 0);

  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (!isOrdered(arr[i], arr[i + 1])) {
        swapped = true;
      }
      swapElements(arr, i);

      const step = generateContainer();
      fillArrContainer(step, arr);

      if (i < arr.length - 2) {
        highlightCurrentEls(step, i + 1);
      } else if (swapped) {
        highlightCurrentEls(step, 0);
      }

      arrContainer.appendChild(step);
    }
  }
});