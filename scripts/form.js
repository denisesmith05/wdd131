
// Product array
const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
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
