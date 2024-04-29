const year = document.getElementById("year");
const today = new Date();
const currentYear = today.getFullYear();
year.textContent = currentYear;

const lastModified = document.getElementById("lastModified");
const LastModifiedDate = new Date(document.lastModified);

const options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};
const formattedDate = LastModifiedDate.toLocaleDateString(undefined, options);

lastModified.textContent = `Last Modification: ${formattedDate}`;
lastModified.style.color = "white";

