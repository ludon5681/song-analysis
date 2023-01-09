function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener("DOMContentLoaded", function() {
	OverlayScrollbars(document.querySelectorAll("body"), { });
});

$(function() {
    //$("body").overlayScrollbars({ });
    $("body").removeClass("pageChange");
    $("#album-cover, .album-text, .subheading").on("mouseenter", async function() {
        $("#album-cover").addClass("hovered");
        await sleep(150);
        $(".album-text, p.subheading").removeClass("invisible");
    })
    $("#album-cover, .album-text, .subheading").on("mouseleave", async function() {
        $("#album-cover").removeClass("hovered");
        await sleep(150);
        $(".album-text, p.subheading").addClass("invisible");
    })
    $("#album-cover, .album-text, .subheading").on("click", async function() {
        $("body").addClass("pageChange");
        await sleep(500);
        window.location = "./options/options.html"
    })
})