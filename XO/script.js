$(".cnt").fadeOut();
$("section div").click(function(e) {
    $(this).css({
        transform: "rotate3d(1, 1, 1,359deg)"
    });
    if ($(this).text() == "") {
        $(this).text($(".actv").text());
        $(".game h3").toggleClass("actv");
    }
    let vtop = $("section div:nth-child(1)").text()
    let vbtm = $("section div:nth-child(" + 7 + ")").text()
    let vlft = $("section div:nth-child(" + 1 + ")").text()
    let vrt = $("section div:nth-child(" + 3 + ")").text()
    let vclf = $("section div:nth-child(" + 1 + ")").text()
    let vclr = $("section div:nth-child(" + 3 + ")").text()

    let top = 2;
    let btm = 8;
    let lft = 4;
    let rt = 6;
    let clf = 5;
    let clr = 5;

    for (let index = 0; index < 2; index++) {
        vtop == $("section div:nth-child(" + top + ")").text() && vtop != "" ? top++ : ""
        vbtm == $("section div:nth-child(" + btm + ")").text() && vbtm != "" ? btm++ : ""
        vlft == $("section div:nth-child(" + lft + ")").text() && vlft != "" ? lft += 3 : ""
        vrt == $("section div:nth-child(" + rt + ")").text() && vrt != "" ? rt += 3 : ""
        vclf == $("section div:nth-child(" + clf + ")").text() && vclf != "" ? clf += 4 : ""
        vclr == $("section div:nth-child(" + clr + ")").text() && vclr != "" ? clr += 2 : ""

    }
    console.log(top)
    console.log(btm)
    console.log(lft)
    console.log(rt)
    console.log(clf)
    console.log(clr + "tgh")
    if (top == 4 || btm == 10 || lft == 10 || rt == 12 || clf == 13 || clr == 9) {
        $(".cnt").fadeIn(2000);
        $(".cnt h2").text($(this).text() + " won the game");
    }
});
$("button , .cnt h2").click(function(e) {
    $("section div").text("");
    $("section div").css({
        transform: "rotate3d(1, 1, 1,0deg)"
    });
    $(".cnt").fadeOut(2000);
});