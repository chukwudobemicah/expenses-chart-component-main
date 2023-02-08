import { dataJson } from './data.js';

const mon = document.querySelector('.mon');
const tue = document.querySelector('.tue');
const wed = document.querySelector('.wed');
const thur = document.querySelector('.thur');
const fri = document.querySelector('.fri');
const sat = document.querySelector('.sat');
const sun = document.querySelector('.sun');
const details = document.querySelectorAll('.details');

details.forEach(detail => detail.classList.add('hidden'));

const [monData, tueData, wedData, thurData, friData, satData, sunData] =
  dataJson;
const weekdays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
const date = new Date();
const day = date.getDay();
const now = weekdays[day - 1];

const generateDynamicGraph = function (day, data) {
  day.style.height = `${data.amount * 2}px`;
  const { value: newDay } = day.dataset;
  if (newDay === now) {
    day.classList.add('cyan');
  }
};
// const daysArr = [mon, tue, wed, thur, fri, sat, sun];
const gatDynamicDetails = function (day, data) {
  day.addEventListener('mouseover', function () {
    day.previousElementSibling.textContent = `${data.amount}`;
    day.previousElementSibling.classList.remove('hidden');
    day.closest('li').style.opacity = 0.7;
  });
  day.addEventListener('mouseleave', function () {
    day.previousElementSibling.classList.add('hidden');
    day.closest('li').style.opacity = 1;
  });
};

const init = function (day, data) {
  gatDynamicDetails(day, data);
  generateDynamicGraph(day, data);
};
init(mon, monData);
init(tue, tueData);
init(wed, wedData);
init(thur, thurData);
init(fri, friData);
init(sat, satData);
init(sun, sunData);
