document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.getElementById("currentyear");
    const lastModifiedSpan = document.getElementById("lastModified");

    yearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = `Last Modified: ${document.lastModified}`;
});