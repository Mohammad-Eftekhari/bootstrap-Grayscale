
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $(".my-navbar").css("background", "white");
            $(".nav-text").css("color", "black")

        }

        else {
            $(".my-navbar").css("background", "transparent");
            $(".nav-text").css("color", "")
        }
    })
    // scroll when click on navbar links
    $("#about").click(function () {
        $('html, body').animate({
            scrollTop: $(".sec-2").offset().top
        }, 1000)
    });
    $("#project").click(function () {
        $('html, body').animate({
            scrollTop: $(".sec-3").offset().top
        }, 1000)
    });
    $("#contact").click(function () {
        $('html, body').animate({
            scrollTop: $(".myfooter").offset().top
        }, 1000)
    });
});
