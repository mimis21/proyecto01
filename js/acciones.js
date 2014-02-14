// JavaScript Document
$(document).ready(function(){
  document.addEventListener("deviceready",function(){
$('#B1').tap(function(){
	navigator.notification.beep(1);
   })//tap B1
   $('#V1').tap(function (){//lave tap
    navigator.notification.vibrate (500);//vibrar en el dispositivo
   })//tap v2

   });//device ready
})//ready