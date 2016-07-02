
//IS USED TO SET THE ACENT COLOR

var _color = "";

var _colors = ["#0050ef", "#6a00ff", "#d80073", "#a0522d", "#f44336", "#fa6800", "#088a00", "#00bcd4", "#009688", "#eb6361", "#e3000e", "#8870ff", "#23b684"];


_color = _colors[Math.floor(Math.random() * _colors.length)];

console.log("The color is " + _color);

$(document).ready(function () {
    $(".message_box").each(function () {
        console.log("in message box.each");
        $(this).css("backgroundColor", _color);

    });

});