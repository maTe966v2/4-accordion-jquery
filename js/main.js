$(function () {
    $(".accordion-item").click(function () {
        $(this).children(".accordion-content").toggle("slow");
        $(this)
            .children(".accordion-title")
            .toggleClass("change")
            .attr("data-content", "-");
    });
});
