$(document).ready(function() {
    var tm
    let max = 50
    let min = 1
    var fil = []
    var t = setInterval(function() {
        fil.push(Math.floor(Math.random() * (max - min) + min))
        if (fil.length == 15) {
            clearInterval(t);
        }
    }, 10)
    $("header h2").hide();
    $("section button").click(function() {
        $("header h2").hide();
        $(this).css({
            "color": "dodgerblue",
            "background-color": "white",
            "border-color": "dodgerblue"
        });
        if (tm > 0) {
            clearInterval(tm)
        }
        tm = setInterval(function() {
            if (parseInt($(".time").text()) <= 1) {
                $("section .bal").remove()
                clearInterval(tm)
                $("section button").css({
                    "color": "white",
                    "background-color": "dodgerblue",
                    "border-color": "white"
                });
                $(".fill").css("background-color", "rgb(18, 113, 207)");
            }
            if (fil.includes(parseInt($(".time").text()))) {

                $(".fill").css("background-color", "red");
            } else {
                $(".fill").css("background-color", "rgb(18, 113, 207)");
            }
            $(".time").text(parseInt($(".time").text()) - 1);
        }, 1000)

        $("section .bal").remove()
        $(".time").text(50);
        $("section").append("<div class='bal'></div>");


        $(window).mousemove(function(e) {

            // values: e.clientX, e.clientY, e.pageX, e.pageY
            $("section .bal").offset({
                top: e.pageY - 3,
                left: e.pageX - 3
            })
            if ($(".fill").css("background-color") == "rgb(255, 0, 0)") {
                $("section .bal").remove()
                clearInterval(tm)
                $("section button").css({
                    "color": "white",
                    "background-color": "dodgerblue",
                    "border-color": "white"
                });
                $(".fill").css("background-color", "rgb(18, 113, 207)");
            }
        });
    });
    $(window).mousemove(function(e) {
        $("header").hover(function() {
            if (e.clientY - 3 == $("section .bal").offset().top && e.clientX - 3 == $("section .bal").offset().left) {
                $("header h2").fadeIn(1000);
                $("section .bal").remove()
                clearInterval(tm)
                $("section button").css({
                    "color": "white",
                    "background-color": "dodgerblue",
                    "border-color": "white"
                });
                $(".fill").css("background-color", "rgb(18, 113, 207)");

            }

        });
    });

    $(".scont").mouseenter(function() {
        $("section .bal").remove()
        clearInterval(tm)
        $("section button").css({
            "color": "white",
            "background-color": "dodgerblue",
            "border-color": "white"
        });
        $(".fill").css("background-color", "rgb(18, 113, 207)");
    });
});