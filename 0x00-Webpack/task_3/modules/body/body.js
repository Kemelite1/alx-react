import $ from 'jquery';
import _ from 'lodash';

$(document).ready(function() {
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="start-btn">Click here to get started</button>');
  $('body').append('<p id="count"></p>');

  let count = 0;
  const updateCounter = _.debounce(() => {
    count++;
    $('#count').text(`${count} clicks on the button`);
  }, 500);

  $('#start-btn').click(updateCounter);
});
