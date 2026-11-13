// Galeria: clicar num print abre ele grande; clicar fora, no × ou Esc fecha.
const caixa = document.querySelector(".lightbox");
const grande = caixa.querySelector("img");

document.querySelectorAll(".foto").forEach((foto) => {
  foto.addEventListener("click", () => {
    const mini = foto.querySelector("img");
    grande.src = foto.dataset.src;
    grande.alt = mini.alt;
    caixa.showModal();
  });
});

caixa.addEventListener("click", () => caixa.close());
