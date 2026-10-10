
const currentDate = new Date();

const currentDateFormat = `Current Date and Time: ${currentDate}`;

console.log(currentDateFormat);

function formatDateMMDDYYYY(date) {
  const formattedDate = date.toLocaleDateString("en-US");
  return `Formatted Date (MM/DD/YYYY): ${formattedDate}`;
}

function formatDateLong(date) {
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
  return `Formatted Date (Month Day, Year): ${formattedDate}`;
}