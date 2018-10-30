"use strict";

// High score submitted on game.html
// submission turned into object via constructor
// object stored in local storage
// score.html on page load checks for local storage
// // if NO local storage builds default table
// // if local storage pulls high score table data
// // if local storage pulls user submitted high score data
// checks score of user submission
// inserts score data (name/score) into table array
// sorts table array by highest score
// creates and appends table to DOM

// +++++++++++++++++++++++++++ DATA ++++++++++++++++++++++++++++++
var allHighScores = [];
var highScoreTable = document.getElementById('high-score-table');

function Highscore(userName, score) {
  this.userName = userName;
  this.score = score;
  allHighScores.push(this);
}

if (!localStorage.highScoreData) {
new Highscore('Becca', 20);
new Highscore('Brent', 32);
new Highscore('Demi', 45);
new Highscore('Fletcher', 60);
new Highscore('Jake', 70);
new Highscore('Bird', 7);
new Highscore('Noah', 45);
new Highscore('Tara', 62);
new Highscore('Zahra', 90);
new Highscore('Sam', 40);
} else {

allHighScores = JSON.parse(localStorage.highScoreData);

}

// +++++++++++++++++++++++++++ FUNCTION DECLARATIONS +++++++++++++

Highscore.prototype.renderUserData = function(rank) {
  var trEl = document.createElement('tr');
  newElement('td', rank, trEl);
  newElement('td', this.userName, trEl);
  newElement('td', this.score, trEl);
  highScoreTable.appendChild(trEl);
};

function newElement(type, content, parent) {
  var element = document.createElement(type);
  element.textContent = content;
  parent.appendChild(element);
}

function makeHeaderRow() {
  var theadEl = document.createElement('thead');
  newElement('th', 'Rank', theadEl);
  newElement('th', 'Name', theadEl);
  newElement('th', 'Score', theadEl);
  highScoreTable.appendChild(theadEl);
}

function sortScores() {
  allHighScores.sort(function (a, b) {
    return b.score - a.score;
  });
}

function renderHighScores() {
  sortScores();
  for (var i = 0; i < allHighScores.length; i++) {
    allHighScores[i].renderUserData(i + 1);
  }
}

// +++++++++++++++++++++++++++ EXECUTABLE ++++++++++++++++++++++++
makeHeaderRow();
renderHighScores();

// +++++++++++++++++++++++++++ WIP +++++++++++++++++++++++++++++++
