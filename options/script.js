document.addEventListener("DOMContentLoaded", function() {
	OverlayScrollbars(document.querySelectorAll("body"), { });
});

$(function() {
    $("#player-container").on("click", function() {
        window.open("https://www.youtube.com/watch?v=i63yumCNdJs", "_blank");
    })
})