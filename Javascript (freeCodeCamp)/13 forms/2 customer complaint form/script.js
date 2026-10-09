
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNo = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");

const complaintsGroup = document.getElementById("complaints-group");
const otherComplaint = document.getElementById("other-complaint");
const complaintDescription = document.getElementById("complaint-description");

const solutionsGroup = document.getElementById("solutions-group");
const otherSolution = document.getElementById("other-solution");
const solutionDescription = document.getElementById("solution-description");

const form = document.querySelector("form");

function validateForm() {
  return {
    "full-name": fullName.value.trim() !== "",
    "email": email.validity.valid && email.value.trim() !== "",
    "order-no": /^2024\d{6}$/.test(orderNo.value),
    "product-code": /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/.test(productCode.value),
    "quantity": quantity.value !== "" &&
      Number.isInteger(Number(quantity.value)) &&
      Number(quantity.value) > 0 &&
      quantity.validity.valid,

    "complaints-group": complaintsGroup.querySelectorAll('input[type="checkbox"]:checked').length > 0,

    "complaint-description": !otherComplaint.checked ||
      complaintDescription.value.length >= 20,

    "solutions-group": solutionsGroup.querySelector('input[type="radio"]:checked') !== null,

    "solution-description": !otherSolution.checked ||
      solutionDescription.value.length >= 20
  };
}

function isValid(results) {
  return Object.values(results).every(value => value === true);
}

function setBorder(element, valid) {
  element.style.borderColor = valid ? "green" : "red";
}

function validateField(element, key) {
  const results = validateForm();
  setBorder(element, results[key]);
}

const fields = [
  [fullName, "full-name"],
  [email, "email"],
  [orderNo, "order-no"],
  [productCode, "product-code"],
  [quantity, "quantity"],
  [complaintDescription, "complaint-description"],
  [solutionDescription, "solution-description"]
];

fields.forEach(([element, key]) => {
  element.addEventListener("change", () => {
    validateField(element, key);
  });
});

complaintsGroup.addEventListener("change", () => {
  setBorder(
    complaintsGroup,
    validateForm()["complaints-group"]
  );
});

solutionsGroup.addEventListener("change", () => {
  setBorder(
    solutionsGroup,
    validateForm()["solutions-group"]
  );
});

form.addEventListener("submit", event => {
  event.preventDefault();

  const results = validateForm();
  const valid = isValid(results);

  fields.forEach(([element, key]) => {
    if (!results[key]) {
      setBorder(element, false);
    }
  });

  setBorder(complaintsGroup, results["complaints-group"]);
  setBorder(solutionsGroup, results["solutions-group"]);

  if (otherComplaint.checked) {
    setBorder(complaintDescription, results["complaint-description"]);
  }

  if (otherSolution.checked) {
    setBorder(solutionDescription, results["solution-description"]);
  }

  if (valid) {
    console.log("Form submitted successfully!");
  }
});