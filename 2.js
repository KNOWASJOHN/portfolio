const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function(e) {
    const posX = e.clientX + 15;
    const posY = e.clientY + 60 ;
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // cursorOutline.style.left = `${posX}px`;
    // cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate(
        {
            left: `${posX}px`,
            top: `${posY}px`,
        },{ duration: 500, fill:"forwards", easing: "ease-in-out" });   
});