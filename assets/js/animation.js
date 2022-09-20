let elementoAnimato = document.querySelectorAll(".animazioneIngresso");

window.addEventListener("scroll", animazioneIngresso);

function animazioneIngresso() {
  elementoAnimato.forEach(function (elemento) {
    let visibile = elemento.getBoundingClientRect().top - window.innerHeight + 15;

    if (visibile < 0) {
      elemento.classList.add("visibile");
    }
  });
}

let elementoAnimatoX = document.querySelectorAll(".animazioneIngressoX");

window.addEventListener("scroll", animazioneIngressoX);

function animazioneIngressoX() {
  elementoAnimatoX.forEach(function (elemento) {
    let visibile = elemento.getBoundingClientRect().top - window.innerHeight + 15;

    if (visibile < 0) {
      elemento.classList.add("visibile");
      setInterval(function () {
        elemento.classList.remove("animazioneIngressoX");
      }, 500);
    }
  });
}
