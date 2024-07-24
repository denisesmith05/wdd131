// // var cartCountText = document.querySelector("#cart-count");
// // var signUpForm = document.querySelector(".email-sign-up");
// // var emailInput = document.querySelector("input");
// // var signUpBtn = document.querySelector("#sign-up");
// // var footer = document.querySelector("footer");
// // var shirtBtn = document.querySelector("#shirt-btn");
// // var pantsBtn = document.querySelector("#pants-btn");
// // var shoesBtn = document.querySelector("#shoes-btn");
// // var swimwearBtn = document.querySelector("#swimwear-btn");

// // var count = 0;

// // function addToCart() {
// //     count++;
// //     cartCountText.textContent = count === 1 ? "1 item" : count + " items";
// // }

// // function emailSubmitHandler() {
// //     var confirmationMsg = document.createElement("p");
// //     confirmationMsg.textContent = "Thank you for signing up " + emailInput.value;
// //     signUpForm.remove();
// //     footer.appendChild(confirmationMsg);
// // }

// // shirtBtn.addEventListener("click", addToCart);
// // pantsBtn.addEventListener("click", addToCart);
// // shoesBtn.addEventListener("click", addToCart);
// // swimwearBtn.addEventListener("click", addToCart);
// // signUpBtn.addEventListener("click", emailSubmitHandler);


// // document.addEventListener('DOMContentLoaded', () => {
// //     let cartCount = localStorage.getItem('cartCount') || 0;
// //     document.getElementById('cart-count').textContent = cartCount;

// //     document.querySelectorAll('.cart-btn').forEach(button => {
// //         button.addEventListener('click', () => {
// //             cartCount++;
// //             localStorage.setItem('cartCount', cartCount);
// //             document.getElementById('cart-count').textContent = cartCount;
// //         });
// //     });

// //     document.getElementById('sign-up').addEventListener('click', () => {
// //         const email = document.querySelector('input[type="text"]').value;
// //         alert(`Thank you for signing up, ${email}`);
// //     });

// //     const products = {
// //         all: [
// //             'images/clothing1.avif',
// //             'images/clothing2.avif',
// //             'images/clothing3.avif',
// //             'images/clothing4.jpg',
// //             'images/clothing5.jpg',
// //             'images/clothing6.avif',
// //             'images/clothing7.avif',
// //             'images/clothing8.avif',
// //             'images/clothing9.avif'
// //         ],
// //         shirts: [
// //             'images/clothing1.avif',
// //             'images/clothing5.jpg',
// //             'images/clothing9.avif'
// //         ],
// //         pants: [
// //             'images/clothing2.avif',
// //             'images/clothing8.avif'
// //         ],
// //         shoes: [
// //             'images/clothing3.avif',
// //             'images/clothing6.avif'
// //         ],
// //         swimwear: [
// //             'images/clothing4.jpg',
// //             'images/clothing7.avif'
// //         ]
// //     };

// //     const productsGrid = document.getElementById('products-grid');

// //     document.querySelectorAll('.nav-btn').forEach(button => {
// //         button.addEventListener('click', () => {
// //             const category = button.getAttribute('data-category');
// //             loadProducts(category);
// //         });
// //     });

// //     function loadProducts(category) {
// //         productsGrid.innerHTML = ''; // Clear existing products
// //         products[category].forEach(src => {
// //             const itemCard = document.createElement('div');
// //             itemCard.className = 'item-card';
// //             const img = document.createElement('img');
// //             img.className = 'item-pic';
// //             img.dataset.src = src; // Use data-src for lazy loading
// //             img.alt = category;
// //             const button = document.createElement('button');
// //             button.className = 'cart-btn';
// //             button.textContent = 'Add to Cart';
// //             button.addEventListener('click', () => {
// //                 cartCount++;
// //                 localStorage.setItem('cartCount', cartCount);
// //                 document.getElementById('cart-count').textContent = cartCount;
// //             });
// //             itemCard.appendChild(img);
// //             itemCard.appendChild(button);
// //             productsGrid.appendChild(itemCard);
// //         });
// //         lazyLoadImages();
// //     }

// //     function lazyLoadImages() {
// //         const images = document.querySelectorAll('img[data-src]');
// //         const config = {
// //             rootMargin: '50px 0px',
// //             threshold: 0.01
// //         };

// //         let observer = new IntersectionObserver((entries, self) => {
// //             entries.forEach(entry => {
// //                 if (entry.isIntersecting) {
// //                     preloadImage(entry.target);
// //                     self.unobserve(entry.target);
// //                 }
// //             });
// //         }, config);

// //         images.forEach(image => {
// //             observer.observe(image);
// //         });
// //     }

// //     function preloadImage(img) {
// //         const src = img.getAttribute('data-src');
// //         if (!src) {
// //             return;
// //         }
// //         img.src = src;
// //         img.removeAttribute('data-src');
// //     }

// //     // Initially load shirts category
// //     loadProducts('');
// // });

// document.addEventListener('DOMContentLoaded', () => {
//     const cartCount = document.getElementById('cart-count');
//     const cartButtons = document.querySelectorAll('.cart-btn');
//     let cartItems = JSON.parse(localStorage.getItem('cartItems')) || 0;

//     // Update cart count on page load
//     cartCount.textContent = cartItems;

//     cartButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             cartItems++;
//             cartCount.textContent = cartItems;
//             localStorage.setItem('cartItems', JSON.stringify(cartItems));
//         });
//     });

//     const mainNavToggle = document.getElementById('main-nav-toggle');
//     const mainNav = document.getElementById('main-nav');
//     mainNavToggle.addEventListener('click', () => {
//         mainNav.classList.toggle('nav-active');
//     });

//     const productNavToggle = document.getElementById('product-nav-toggle');
//     const productNav = document.getElementById('product-nav-links');
//     productNavToggle.addEventListener('click', () => {
//         productNav.classList.toggle('nav-active');
//     });

//     const productNavButtons = document.querySelectorAll('.nav-btn');
//     const productItems = document.querySelectorAll('.item-card');

//     productNavButtons.forEach(button => {
//         button.addEventListener('click', (e) => {
//             e.preventDefault();
//             const category = button.getAttribute('data-category');
//             productItems.forEach(item => {
//                 if (category === 'all' || item.getAttribute('data-category') === category) {
//                     item.style.display = 'inline-block';
//                 } else {
//                     item.style.display = 'none';
//                 }
//             });
//         });
//     });
// });


// Variables
var cartCountText = document.querySelector("#cart-count");
var signUpForm = document.querySelector(".email-sign-up");
var emailInput = document.querySelector("input[type='text']");
var signUpBtn = document.querySelector("#sign-up");
var itemButtons = document.querySelectorAll(".cart-btn");

// Cart count
var count = 0;

// Update cart count
function addToCart() {
    count++;
    cartCountText.textContent = count === 1 ? "1 item" : count + " items";
}

// Handle Add to Cart buttons
itemButtons.forEach(button => {
    button.addEventListener("click", addToCart);
});

// Email sign-up handler
signUpBtn.addEventListener("click", function() {
    if (emailInput.value) {
        var confirmationMsg = document.createElement("p");
        confirmationMsg.textContent = "Thank you for signing up, " + emailInput.value;
        signUpForm.innerHTML = "";
        signUpForm.appendChild(confirmationMsg);
    } else {
        alert("Please enter your email address.");
    }
});

// Responsive navigation for product page
document.getElementById("product-nav-toggle").addEventListener("click", function() {
    var nav = document.querySelector(".product-nav ul");
    nav.style.display = (nav.style.display === "block" ? "none" : "block");
});

// Filtering products by category
var navButtons = document.querySelectorAll(".product-nav .nav-btn");
navButtons.forEach(button => {
    button.addEventListener("click", function() {
        var category = this.getAttribute("data-category");
        var items = document.querySelectorAll(".products-grid .item-card");
        items.forEach(item => {
            if (category === "all" || item.getAttribute("data-category") === category) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});


// // Variables
// var cartCountText = document.querySelector("#cart-count");
// var signUpForm = document.querySelector(".email-sign-up");
// var emailInput = document.querySelector("input[type='text']");
// var signUpBtn = document.querySelector("#sign-up");
// var itemButtons = document.querySelectorAll(".cart-btn");

// // Cart count
// var count = 0;

// // Update cart count
// function addToCart() {
//     count++;
//     cartCountText.textContent = count === 1 ? "1 item" : count + " items";
// }

// // Handle Add to Cart buttons
// itemButtons.forEach(button => {
//     button.addEventListener("click", addToCart);
// });

// // Email sign-up handler
// signUpBtn.addEventListener("click", function() {
//     if (emailInput.value) {
//         var confirmationMsg = document.createElement("p");
//         confirmationMsg.textContent = "Thank you for signing up, " + emailInput.value;
//         signUpForm.innerHTML = "";
//         signUpForm.appendChild(confirmationMsg);
//     } else {
//         alert("Please enter your email address.");
//     }
// });

// // Responsive navigation for product page
// document.getElementById("product-nav-toggle").addEventListener("click", function() {
//     var nav = document.querySelector(".product-nav ul");
//     nav.style.display = (nav.style.display === "block" ? "none" : "block");
// });

// // Filtering products by category
// var navButtons = document.querySelectorAll(".product-nav .nav-btn");
// navButtons.forEach(button => {
//     button.addEventListener("click", function() {
//         var category = this.getAttribute("data-category");
//         var items = document.querySelectorAll(".products-grid .item-card");
//         console.log("Filtering for category:", category); // Debugging line
//         items.forEach(item => {
//             if (category === "all" || item.getAttribute("data-category") === category) {
//                 item.style.display = "block";
//             } else {
//                 item.style.display = "none";
//             }
//         });
//     });
// });



