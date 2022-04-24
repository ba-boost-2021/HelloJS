$(".btn").click(function() {
    const color = $(this).attr("data-color");
    $("#color").css({ "background-color": color });
});