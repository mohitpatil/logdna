/**
 * Created by RajeshPatil on 2/12/17.
 */




$(document).ready(function () {
    $('#tab1').show();
    $('#tab11').addClass('arrow');
});

$('.content-list').click(function () {
    var x = $(this).index();
    $('.content').hide();
    $('#tab' + (x)).show();
    $('.content-list').removeClass('arrow');
    $(this).addClass('arrow');
});

$('.icon').click(function () {
    $('#mySidenav').css("width","250px");
});

$('.closebtn').click(function () {
    $('#mySidenav').css("width","0");
});