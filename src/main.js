import Dino from './js/hangman.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function () {
  let array = [];

  $("#getLetter").click(function () {
    let userLetter = $("#letter").val();
    $("#letter").val("");
    console.log(array);
    for (let i = 0; i < array.length; i++) {
      console.log(userLetter);
      if (array.includes(userLetter)) {
        $("#array[0]").show();
      }
    }
  });

  let promise = Dino.getWord();
  promise.then(function (response) {
    const body = JSON.parse(response);
    let word = (body[0]).toString();
    let arr = word.split("");
    array.push(arr);
    let htmlForWord = "";
    for (let i = 0; i < arr.length; i++) {
      htmlForWord += `<div class="card"><h3 class="card-text" id=${[i]}>${arr[i]}</h3></div>`;
    }
    $('#word').html(htmlForWord);
    console.log(arr);
  });
});