const basket = document.querySelector(".buybasket");
const footer = document.querySelector(".footer");

window.addEventListener("scroll", () => {
  const basketRect = basket.getBoundingClientRect();
  const footerRect = footer.getBoundingClientRect();

  if (basketRect.bottom > footerRect.top) {
    // Basket is overlapping footer → hide it
    basket.style.opacity = "0";
    basket.style.transform = "translateY(20px)";
  } else {
    // Basket is above footer → show it
    basket.style.opacity = "1";
    basket.style.transform = "translateY(0)";
  }
});
