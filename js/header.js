$(document).ready(function(){

    $(".btn").click(function(){

        $(".toggle_menu").addClass("active");

    });
    $(".toggle_close").click(function(){

        $(".toggle_menu").removeClass("active");

    });

    $("#srchBox").click(function(){

        $(".srchForm").addClass("active");

    });
    $(".srchClose").click(function(){

        $(".srchForm").removeClass("active");

    });
});