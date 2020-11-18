import Dino from './js/hangman.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function () {
  let array = [];
  $("#getLetter").click(function () {
    let userLetter = ($("#letter").val()).toLowerCase();
    $("#letter").val("");
    for (let i = 0; i < array.length; i++) {
      if (array[i].includes(userLetter) === true) {
        $(`#${[i]}`).show();
        $("#letters").hide();
      } else if (array.includes(userLetter) === false){
        $("#letters").html(`The letter "${userLetter}" is not in the word. Try again!`);
      }
    }
    $("#guessedLetters").append(`${userLetter}, `);
  });

  $("#show-answer").click(function () {
    $(".card-text").show();
  });

  let promise = Dino.getWord();
  promise.then(function (response) {
    const body = JSON.parse(response);
    let word = ((body[0]).toString()).toLowerCase();
    let arr = word.split("");
    for (let i=0; i<arr.length; i++) {
      array.push(arr[i]);
    }
    let htmlForWord = "";
    for (let i = 0; i < arr.length; i++) {
      htmlForWord += `<div class="card"><h3 class="card-text" id=${[i]}>${arr[i]}</h3></div>`;
    }
    $('#word').html(htmlForWord);
  });
});