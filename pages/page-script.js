var visibleElement = $("#l1");

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function getHeight(element) {
    const rect = element.getBoundingClientRect();
    return (rect.bottom - rect.top);
}

function refresh() {
    for (i = 1; i <= 4; i++) $(`#l${i}`).css("opacity", "0");
    visibleElement.css("opacity", "100%")
    console.log(visibleElement)
}


$(function() {
    document.querySelector("#l1").style.setProperty("--height", `${getHeight(document.querySelector("#l1"))}px`);
    document.querySelector("#l2").style.setProperty("--height", `${getHeight(document.querySelector("#l2"))}px`);
    document.querySelector("#l3").style.setProperty("--height", `${getHeight(document.querySelector("#l3"))}px`);
    document.querySelector("#l4").style.setProperty("--height", `${getHeight(document.querySelector("#l4"))}px`);
    document.querySelector("#firstInterpretation").style.setProperty("--height", `${getHeight(document.querySelector("#firstInterpretation"))}px`);
    document.querySelector("#lastInterpretation").style.setProperty("--height", `${getHeight(document.querySelector("#lastInterpretation"))}px`);
	const os = OverlayScrollbars(document.querySelectorAll("body"), { 
        callbacks: {
            onScroll: function(eventArgs) { 
                if (isInViewport(document.querySelector(".two"))) {
                    console.log(document.querySelector(".two").getBoundingClientRect())
                    visibleElement = $("#l1");
                    refresh();
                } else if (isInViewport(document.querySelector(".three"))) {
                    visibleElement = $("#l2");
                    refresh();
                } else if (isInViewport(document.querySelector(".four"))) {
                    visibleElement = $("#l3");
                    refresh();
                } else if (isInViewport(document.querySelector(".five"))) {
                    visibleElement = $("#l4");
                    refresh();
                } else if (isInViewport(document.querySelector("#firstInterpretation")) || isInViewport(document.querySelector("#lastInterpretation"))) {
                    for (i = 1; i <= 4; i++) $(`#l${i}`).css("opacity", "0");
                }
            }
        }
    });
});