$(document).ready(function(){

    $(".btn").click(function(){

        $(".toggle_menu").addClass("active");

    });
    $(".toggle_close").click(function(){

        $(".toggle_menu").removeClass("active");

    });

    // search

    $("#srchBox").click(function(){

        $(".srchForm").addClass("active");

    });
    $(".srchClose").click(function(){

        $(".srchForm").removeClass("active");

    });

    // lang

    $("#lang").click(function(){

        $("#lang").toggleClass("on");

    });

});