
// Product array
const products = [
    { id: 1, name: "Mixer" },
    { id: 2, name: "Cook Book" },
    { id: 3, name: "Floral Spatula" },
    { id: 4, name: "Kitchen Towels" },
    { id: 5, name: "Vintage Silverware" },
    { id: 6, name: "Cotton Candy Maker" },
    { id: 7, name: "Apron" }
];

// Populate product options
const productNameSelect = document.getElementById("productName");
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.text = product.name;
    productNameSelect.appendChild(option);
});

// localStorage counter
const reviewCount = localStorage.getItem("reviewCount") || 0;
localStorage.setItem("reviewCount", parseInt(reviewCount) + 1);
