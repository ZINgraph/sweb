const imagenes = [];

for (let i = 0; i <= 17; i++) {
  let num = i.toString().padStart(2, '0');
  imagenes.push("img/port" + num + ".png");
}

let index = 0;

const img = document.getElementById("imagen");

function actualizar() {
  img.style.opacity = 0;

  setTimeout(() => {
    img.src = imagenes[index];
    img.style.opacity = 1;
  }, 150);
}

// NEXT
document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % imagenes.length;
  actualizar();
});

// PREV
document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + imagenes.length) % imagenes.length;
  actualizar();
});

// HOME (port00)
document.getElementById("home").addEventListener("click", () => {
  index = 0;
  actualizar();
});

// AUDIO
const ambient = new Audio("audio/ambient.mp3");
const click = new Audio("audio/click-sound.mp3");

let activo = false;

document.getElementById("toggleSound").onclick = () => {
  if (!activo) {
    ambient.loop = true;
    ambient.play();
    activo = true;
  } else {
    ambient.pause();
    activo = false;
  }
};

// CUADROS
document.querySelectorAll(".cuadro").forEach(c => {
  c.onclick = () => {
    document.getElementById("textoActivo").textContent = c.dataset.texto;
    click.currentTime = 0;
    click.play();
  };
});

// POPUP
const popup = document.getElementById("popup");

document.getElementById("abrirPopup").onclick = () => {
  popup.style.display = "flex";
};

document.getElementById("cerrarPopup").onclick = () => {
  popup.style.display = "none";
};

popup.onclick = (e) => {
  if (e.target === popup) popup.style.display = "none";
};