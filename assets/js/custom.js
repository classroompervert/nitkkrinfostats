// const e = require("express");

let val = setTimeout(popup_func, 5000);

function popup_func(){
    // console.log("hi");
    myPopup.classList.add("show");
}

closePopup.addEventListener("click", function () {
        myPopup.classList.remove("show");
});

function myFunction(x) {
    console.log("hi");
    if (x.matches) { // If media query matches
        const underMediaScroll = document.querySelector('.under-media-scroll');
        underMediaScroll.style.display = "block";

        const outerMediaMarquee1 = document.querySelector('.outer-media-marquee1');
        outerMediaMarquee1.style.display = "none";
        const outerMediaMarquee2 = document.querySelector('.outer-media-marquee2');
        outerMediaMarquee2.style.display = "none";
        // element.style.animationPlayState = "paused";
        // element.style.display = "none";
        // element.childNode.style.animationName = "none";
        // console.log(element.parentNode);
        // element.style.backgroundColor = "black";
        // element.style.overflow = "auto";
        // element.style.whiteSpace = "nowrap";
        
    } else {
        const underMediaScroll = document.querySelector('.under-media-scroll');
        underMediaScroll.style.display = "none";

        const outerMediaMarquee1 = document.querySelector('.outer-media-marquee1');
        outerMediaMarquee1.style.display = "block";
        const outerMediaMarquee2 = document.querySelector('.outer-media-marquee2');
        outerMediaMarquee2.style.display = "block";
    }
}

var x = window.matchMedia("(max-width: 1276px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes