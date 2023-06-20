const links = document.getElementsByClassName("link");
const pages = document.getElementsByClassName("page");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (event) {
    event.preventDefault();
    const targetPage = this.getAttribute("href").substring(1);

    for (let j = 0; j < pages.length; j++) {
      if (pages[j].id === targetPage) {
        pages[j].classList.add("active");
      } else {
        pages[j].classList.remove("active");
      }
    }
  });
}
