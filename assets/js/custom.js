let val = setTimeout(popup_func, 5000);

function popup_func(){
    // console.log("hi");
    myPopup.classList.add("show");
}

closePopup.addEventListener("click", function () {
        myPopup.classList.remove("show");
});