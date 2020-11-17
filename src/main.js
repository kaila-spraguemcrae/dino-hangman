import Dino from './js/hangman.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function () {
  let promise = Dino.getWord();
  promise.then(function (response) {
    const body = JSON.parse(response);
    let word = (body[0]).toString();
    let arr = word.split("");
    console.log(arr);
    let htmlForWord = "";
    for (let i = 0; i < arr.length; i++) {
      htmlForWord += `<div class="card">${arr[i]}</div>`;
    }
    $('#word').html(htmlForWord);
    console.log(htmlForWord);
  });
});