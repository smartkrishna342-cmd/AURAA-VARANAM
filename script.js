let cart = 0;

const buttons = document.querySelectorAll(".product-info button");

const count = document.querySelector(".cart-count");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        cart++;

        count.innerText = cart;

        alert("Item Added to Cart!");

    });

});