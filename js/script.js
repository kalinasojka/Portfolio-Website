
// inserting snippets

(function (global) {

var cv = {};

var aboutmeHtml = 'snippets/aboutme.html';
var projectsHtml = 'snippets/projects.html';
var educationHtml = 'snippets/education.html';
var jobsHtml = 'snippets/jobs.html';
var activitiesHtml = 'snippets/activities.html';
var contactHtml = 'snippets/contact.html';

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

// On first load, show home view !!!it's aboutmeHtml!
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  aboutmeHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
});

cv.loadProjects = function () {
	showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  projectsHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

cv.loadEducation = function () {
	showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  educationHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

cv.loadJobs = function () {
	showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  jobsHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

cv.loadActivities = function () {
	showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  activitiesHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

cv.loadContact = function () {
	showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  contactHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

global.$cv = cv;

})(window);



