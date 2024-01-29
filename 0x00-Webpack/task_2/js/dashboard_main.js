import '../css/main.css';

import $ from 'jquery';
import _ from 'lodash';

$(document).ready(function() {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="start-btn">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  let count = 0;
  const updateCounter = _.debounce(() => {
    count++;
    $('#count').text(`${count} clicks on the button`);
  }, 300);

  $('#start-btn').click(updateCounter);
});

const logoImage = document.getElementById('logo');

const lazyLoadImage = (entry) => {
  if (entry.isIntersecting) {
    logoImage.src = logoImage.dataset.src;
    observer.unobserve(logoImage);
  }
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(lazyLoadImage);
});

observer.observe(logoImage);