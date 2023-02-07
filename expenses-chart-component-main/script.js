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
const now = weekdays[day];

const generateDynamicGraph = function (day, data) {
  day.style.height = `${data.amount * 2}px`;
  const { value: newDay } = day.dataset;
  if (newDay === now) {
    day.classList.add('cyan');
  }
};
// const daysArr = [mon, tue, wed, thur, fri, sat, sun];
const fillDetails = function (day, data) {
  day.addEventListener('mouseover', function () {
    day.previousElementSibling.textContent = `${data.amount}`;
    day.previousElementSibling.classList.remove('hidden');
    day.closest('li').style.opacity = 0.5;
  });
  day.addEventListener('mouseleave', function () {
    day.previousElementSibling.classList.add('hidden');
    day.closest('li').style.opacity = 1;
  });
};
fillDetails(mon, monData);
fillDetails(tue, tueData);
fillDetails(wed, wedData);
fillDetails(thur, thurData);
fillDetails(fri, friData);
fillDetails(sat, satData);
fillDetails(sun, sunData);

generateDynamicGraph(mon, monData);
generateDynamicGraph(tue, tueData);
generateDynamicGraph(wed, wedData);
generateDynamicGraph(thur, thurData);
generateDynamicGraph(fri, friData);
generateDynamicGraph(sat, satData);
generateDynamicGraph(sun, sunData);
