$(document).ready(function () {

    var comments_icon = document.getElementById('comments_icon');
    var comments_options = {
        from: 'fa-comments',
        to: 'fa-comments',
        animation: 'fadeOutTop'
    };

    var pictures_icon = document.getElementById('pictures_icon');
    var pictures_options = {
        from: 'fa-picture-o',
        to: 'fa-picture-o',
        animation: 'rollOutLeft'
    };

    var user_icon = document.getElementById('user_icon');
    var user_options = {
        from: 'fa-user',
        to: 'fa-user',
        animation: 'rotateClockwise'
    };

    $("#comments_icon").mouseenter(function () {
        iconate(comments_icon, comments_options);
    });


    $("#pictures_icon").mouseenter(function () {
        iconate(pictures_icon, pictures_options);
    });

    $("#user_icon").mouseenter(function () {
        iconate(user_icon, user_options);
    });




});