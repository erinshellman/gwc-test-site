var element = document.querySelector(".star");
element.addEventListener("click", function() {
    var width = 100;
    var to = 200;
    var loop = function() {
        if(++width < to) {
            element.style.width = width + "px";
            setTimeout(loop, 1);
        }
    }
    loop();
});
