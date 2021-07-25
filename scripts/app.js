const hourSpan = document.querySelector("#hour");
const minuteSpan = document.querySelector("#minute");
const secondSpan = document.querySelector("#second");
const daysOfWeekSpan = document.querySelectorAll(".day-of-week span");
const daysOfMonthSpan = document.querySelector("#day-of-month");
const monthSpan = document.querySelector("#month");
const yearSpan = document.querySelector("#year");

let currentDate = new Date();
let daysOfWeek = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
let months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

const formatDateTime = (number) => (number < 10 ? "0" + number : number);

const displayTime = () => {
  let date = new Date();

  let hour = date.getHours();
  let minute = date.getMinutes();
  let seconds = date.getSeconds();

  hourSpan.innerText = formatDateTime(hour);
  minuteSpan.innerText = formatDateTime(minute);
  secondSpan.innerText = formatDateTime(seconds);
};

setInterval(displayTime, 1000);

daysOfWeekSpan.forEach((dayOfWeekSpan) => {
  let innerText = dayOfWeekSpan.innerText.toLowerCase();
  let currentDayOfWeek = daysOfWeek[currentDate.getDay()];

  console.log(innerText, currentDayOfWeek);

  if (innerText === currentDayOfWeek) {
    dayOfWeekSpan.classList.add("active");
  }
});

const displayDate = () => {
  yearSpan.innerText = currentDate.getFullYear();
  daysOfMonthSpan.innerText = currentDate.getDate();
  monthSpan.innerText = months[currentDate.getMonth()];
};

displayDate();
