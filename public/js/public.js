$(function () {
    $('.carousel').carousel({
        interval: 2000
    });
});

$(document).ready(function() {
    $('ul.nav li.dropdown').hover(function () {
        $('.dropdown-menu', this).fadeIn();
    }, function () {
        $('.dropdown-menu', this).fadeOut('fast');
    });
});

$('#sidebar > a').on('click', function (e) {
    e.preventDefault();
    if (!$(this).hasClass("active")) {
        var lastActive = $(this).closest("#sidebar").children(".active");
        lastActive.removeClass("active");
        lastActive.next('div').collapse('hide');
        $(this).addClass("active");
        $(this).next('div').collapse('show');
    }
});

$('.clickableAnchor').on('click', function (e) {
    var url = $(this)[0];
    window.location.href = url;
});

$('#inviteTab a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
});

$('.draftPostExhibitor').popover({
    placement: 'left',
    trigger: 'hover'
});


