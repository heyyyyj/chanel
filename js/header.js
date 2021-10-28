$(document).ready(function(){

    $(".btn").click(function(){

        $(".toggle_menu").addClass("active");

    });
    $(".toggle_close").click(function(){

        $(".toggle_menu").removeClass("active");

    });

    // search

    $("#srchBox>button").click(function(){

        //$(".srchForm").addClass("active");
        $(".srchForm").slideToggle(300);

    });
    $(".srchClose").click(function(){
        //console.log(1234);
        //$(".srchForm").removeClass("active");
        $(".srchForm").slideToggle(300);

    });

    // lang

    $("#lang").click(function(){

        $("#lang").toggleClass("on");

    });

});