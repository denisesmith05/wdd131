document.addEventListener("DOMContentLoaded", function() {
        const yearSpan = document.getElementById("currentyear");
        const lastModifiedSpan = document.getElementById("lastModified");
        const menuToggle = document.getElementById("menuToggle");
        const menu = document.getElementById("menu");
    
        yearSpan.textContent = new Date().getFullYear();
        lastModifiedSpan.textContent = `Last Modified: ${document.lastModified}`;
    
        menuToggle.addEventListener("click", function() {
            if (menu.style.display === "flex") {
                menu.style.display = "none";
                menuToggle.textContent = "☰";
            } else {
                menu.style.display = "flex";
                menuToggle.textContent = "X";
            }
        });
    });
