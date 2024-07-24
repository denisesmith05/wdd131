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

    const temples = [
        {
            name: "Aba Nigeria Temple",
            location: "Aba, Nigeria",
            dedicated: "2005-08-07",
            area: 112000,
            imageUrl: "images/temple1.jpg"
        },
        {
            name: "Accra Ghana Temple",
            location: "Accra, Ghana",
            dedicated: "2004-01-11",
            area: 17000,
            imageUrl: "images/temple2.jpg"
        },
        {
            name: "Adelaide Australia Temple",
            location: "Adelaide, Australia",
            dedicated: "2000-06-15",
            area: 10800,
            imageUrl: "images/temple3.jpg"
        },
        {
            name: "Provo City Center Temple",
            location: "Provo, Utah, USA",
            dedicated: "2016-03-20",
            area: 85000,
            imageUrl: "images/temple4.jpg"
        },
        {
            name: "Rome Italy Temple",
            location: "Rome, Italy",
            dedicated: "2019-03-10",
            area: 44000,
            imageUrl: "images/temple5.jpg"
        },
        {
            name: "Paris France Temple",
            location: "Le Chesnay, France",
            dedicated: "2017-05-21",
            area: 45000,
            imageUrl: "images/temple6.jpg"
        },
        {
            name: "Arequipa Peru Temple",
            location: "Arequipa, Peru",
            dedicated: "2019-12-15",
            area: 27500,
            imageUrl: "images/temple7.jpg"
        },
        {
            name: "Asunción Paraguay Temple",
            location: "Asunción, Paraguay",
            dedicated: "2002-05-19",
            area: 10700,
            imageUrl: "images/temple8.jpg"
        },
        {
            name: "Atlanta Georgia Temple",
            location: "Sandy Springs, Georgia, USA",
            dedicated: "1983-06-01",
            area: 45435,
            imageUrl: "images/temple9.jpg"
        }
    ];

    const templesGrid = document.getElementById("temples-grid");

    const renderTemples = (filteredTemples) => {
        templesGrid.innerHTML = "";
        filteredTemples.forEach(temple => {
            const figure = document.createElement("figure");

            const img = document.createElement("img");
            img.src = temple.imageUrl;
            img.alt = `${temple.name} Temple`;
            img.loading = "lazy";

            const figcaption = document.createElement("figcaption");
            figcaption.textContent = `${temple.name}`;

            const pLocation = document.createElement("p");
            pLocation.textContent = `Location: ${temple.location}`;

            const pDedicated = document.createElement("p");
            pDedicated.textContent = `Dedicated: ${new Date(temple.dedicated).toLocaleDateString()}`;

            const pArea = document.createElement("p");
            pArea.textContent = `Size: ${temple.area.toLocaleString()} sq ft`;

            figure.appendChild(img);
            figure.appendChild(figcaption);
            figure.appendChild(pLocation);
            figure.appendChild(pDedicated);
            figure.appendChild(pArea);

            templesGrid.appendChild(figure);
        });
    };

    const filterTemples = (filterType) => {
        let filteredTemples;
        const now = new Date();

        switch (filterType) {
            case "old":
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
                break;
            case "new":
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
                break;
            case "large":
                filteredTemples = temples.filter(temple => temple.area > 90000);
                break;
            case "small":
                filteredTemples = temples.filter(temple => temple.area < 10000);
                break;
            default:
                filteredTemples = temples;
        }

        renderTemples(filteredTemples);
    };

    document.getElementById("filter-old").addEventListener("click", () => filterTemples("old"));
    document.getElementById("filter-new").addEventListener("click", () => filterTemples("new"));
    document.getElementById("filter-large").addEventListener("click", () => filterTemples("large"));
    document.getElementById("filter-small").addEventListener("click", () => filterTemples("small"));
    document.getElementById("filter-all").addEventListener("click", () => filterTemples("all"));

    renderTemples(temples);
});
