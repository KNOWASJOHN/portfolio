document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button");
    const menuList = document.querySelector(".menu-list");
    const overlay = document.querySelector(".overlay");

    // Toggle menu and overlay visibility
    menuButton.addEventListener("click", () => {
            menuList.classList.add("active");
            menuList.classList.remove("inactive");
            overlay.classList.add("active");
            overlay.classList.remove("inactive");
    });

    // Close menu when clicking on the overlay
    overlay.addEventListener("click", () => {
        menuList.classList.remove("active");
        menuList.classList.add("inactive");
        overlay.classList.remove("active");
        overlay.classList.remove("inactive");
    });

    // Handle swipe gesture to close the menu
    let xStart = null;

    document.addEventListener("touchstart", (e) => {
        xStart = e.touches[0].clientX;
    });

    document.addEventListener("touchmove", (e) => {
        if (!xStart) return;

        const xEnd = e.touches[0].clientX;
        if (xStart - xEnd > 50) { // Detect left swipe
            menuList.classList.remove("active");
            menuList.classList.add("inactive");
            overlay.classList.remove("active");
            overlay.classList.add("inactive");
        }
        xStart = null;
    });
});
