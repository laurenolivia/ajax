"use strict";


// PART 1: SHOW A FORTUNE


// Callback happens here
// element id #fortune-text receives html method
// results are rendered to html without reloading or new page
function showFortune(results) {
    // TODO: get the fortune and show it in the #fortune-text div
    $("#fortune-text").html(results);
}


// Request happens here
// request is made to /fortune route
// showFortune indicates what to do with info received 
function getFortune() {
	$.get('/fortune', showFortune);
}

// function getFortune() {
// 	$.get('/fortune', function (results) {
// 		$('#fortune-text').html(results);
// 	})
// }

// Event happens here
// Event handler wait for 'click' on element id
// calls function getFortune
$('#get-fortune-button').on('click', getFortune);





// PART 2: SHOW WEATHER

function showForecast(results) {
    $("#zipcode-field").html(results);
}
// Request happens here
// request is made to /weather.json route
// formData stores object zipcode:value
// 
function getForecast(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, showForecast);
}
// Event happens here
// Event handler wait for 'submit' on element id
// calls function getForecast
$("#weather-form").on('submit', getForecast);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


