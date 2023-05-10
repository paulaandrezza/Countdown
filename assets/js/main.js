const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

var now = new Date();
var birthday = new Date(2024, 02, 25, 00, 00, 00); // o mes considera de 0 a 11, logo o mes 3 que é o meu caso virou 2

var x = setInterval(function() {

    // Obtém a data/hora atual
    var now = new Date().getTime();
  
    // Encontra a distância entre a data atual e a data final
    var distance = birthday - now;
  
    // Calcula dias, horas, minutos e segundos
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    day.innerHTML = days.toString().padStart(2, '0');
    hour.innerHTML = hours.toString().padStart(2, '0');
    minute.innerHTML = minutes.toString().padStart(2, '0');
    second.innerHTML = seconds.toString().padStart(2, '0');    

}, 1000);
