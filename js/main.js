/**
 * Created by admin on 17.01.2017.
 */
$(function(){
    $(".bt-menu-trigger").on("click", function() {
        $("body").toggleClass("blocked");
        $(this).toggleClass("burger-right-margin");
    });

    $(".bt-overlay").on("click", function () {
        $("body").removeClass("blocked");
        $(".bt-menu-trigger").removeClass("burger-right-margin");
    });

    $(".slider-buttons-list li").on('click', function() {
        var indexItem = $(this).index();
        var elementHeight = $(".slides-list li").outerHeight(true);
        var margin = indexItem * elementHeight;
        // console.log(margin);
        $(this).addClass('active-button');
        $(this).siblings().removeClass('active-button');
        $(".slides-list").animate({"margin-top": -margin}, 1000);
    });

    $("#fly-higher-hover-container").on("mouseenter", function() {
        $("#fly-higher-hover").addClass("hover-active");
        $("#fly-higher-button").addClass("button-active").text("view less");
    });

    $("#fly-higher-hover-container").on("mouseleave", function() {
        $("#fly-higher-hover").removeClass("hover-active");
        $("#fly-higher-button").removeClass("button-active").text("view more");
    });

    $(".show-text-button").on("click", function () {
        $(this).siblings("h2").toggleClass("active-text");
        $(this).siblings(".hidden-text").fadeToggle(200);
    });
});