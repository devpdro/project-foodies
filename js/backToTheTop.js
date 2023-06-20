const dataAnima = document.querySelector('[dataAnima="scroll"]');

const metadeWindow = window.innerHeight * 7.2;

const btnVoltarTopo = dataAnima.querySelector(".top");

function animaScroll() {
  const topoItem = dataAnima.getBoundingClientRect().top;

  const itemVisivel = topoItem - metadeWindow < 0;
  if (itemVisivel) {
    dataAnima.classList.add("show-button");
  } else {
    dataAnima.classList.remove("show-button");
  }
}

function voltaAoTopo(event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", animaScroll);

btnVoltarTopo.addEventListener("click", voltaAoTopo);
