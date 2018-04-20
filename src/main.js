import { DateCompare } from './class';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

$(document).ready(function() {
  $(".dateCalc").submit(function(event){
    event.preventDefault();
    let userDate1 = new Date ($("#dateOne").val());
    let userDate2 = new Date ($("#dateTwo").val());
    let newDate = new DateCompare(userDate1, userDate2);

    $("#output").append(`You are: ${newDate.getDifference()},  ${newDate.toMercury()}, ${newDate.toVenus()}, ${newDate.toMars()}, ${newDate.toJupiter()}`);
  });
});
