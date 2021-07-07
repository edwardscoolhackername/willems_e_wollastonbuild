(() => {
  const button = document.querySelector("#button"),
        burgerCon = document.querySelector("#burgerCon"),
        navLinks = burgerCon.querySelectorAll("a");


function showMenu() {
  button.classList.toggle("expanded");

  burgerCon.classList.toggle("slideToggle");
}

  button.addEventListener("click", showMenu);

  for (link of navLinks) {
    link.addEventListener("click", showMenu);
  };

})();
