// Carta: foto real distinta por ítem cuando existe; si no, fila tipográfica (sin placeholder diagonal).
// Hero usa ig-03; no repetir esa foto aquí.
const MENU = {
  "Café": {
    items: [
      ["Espresso", "Caturra de altura (Colombia).", "imagenes/ig/ig-10.webp"],
      ["Capuchino", "Espresso con leche texturizada.", "imagenes/ig/ig-01.webp"],
      ["Americano", "Espresso alargado con agua caliente.", "imagenes/ig/ig-07.webp"],
      ["Café helado", "Para el parque.", null]
    ]
  },
  "Salados": {
    items: [
      ["Sándwich", "Variedades por confirmar.", "imagenes/ig/ig-06.webp"],
      ["Ensaladas / bowls", "Incluye gohan; detalle por confirmar.", "imagenes/ig/ig-02.webp"],
      ["Pastel de choclo", "Clásico chileno.", null]
    ]
  },
  "Jugos": {
    items: [
      ["Jugos naturales", "Sabores por confirmar.", "imagenes/ig/ig-05.webp"]
    ]
  },
  "Frappés": {
    items: [["Frappé", "Variedades por confirmar.", null]]
  },
  "Pastelería": {
    items: [
      ["Tortas", "Porciones; sabores por confirmar.", null],
      ["Pastelitos", "Selección del día.", null],
      ["Sin azúcar", "Opciones por confirmar con el local.", null]
    ]
  },
  "Helados": {
    items: [["Helado", "Sabores por confirmar.", null]]
  }
};

const tabs = document.getElementById("tabs");
const grid = document.getElementById("grid");

function row([name, desc, img]) {
  if (img) {
    return `<div class="menu-row">
      <img src="${img}" alt="${name}" loading="lazy" data-edit-img>
      <div><h3>${name}</h3><p>${desc}</p></div>
      <span class="price">Precio por confirmar</span>
    </div>`;
  }
  return `<div class="menu-row nophoto">
    <div><h3>${name}</h3><p>${desc}</p></div>
    <span class="price">Precio por confirmar</span>
  </div>`;
}

function show(k) {
  [...tabs.children].forEach(b => b.classList.toggle("on", b.textContent === k));
  const c = MENU[k];
  grid.innerHTML = `<div class="menu">${c.items.map(row).join("")}</div>`;
}

Object.keys(MENU).forEach(k => {
  const b = document.createElement("button");
  b.textContent = k;
  b.onclick = () => show(k);
  tabs.appendChild(b);
});
show("Café");


/* FAB: ocultar si ya estás en carta o más abajo (evita tapar ítems) */
(function(){
  const fab=document.querySelector('.fab');
  const carta=document.querySelector('#carta');
  if(!fab||!carta||!('IntersectionObserver' in window)) return;
  const io=new IntersectionObserver((entries)=>{
    for(const e of entries){
      if(e.isIntersecting && e.intersectionRatio>0.15) fab.style.display='none';
      else if(window.scrollY < carta.offsetTop - 80) fab.style.display='';
    }
  },{threshold:[0,0.15,0.4]});
  io.observe(carta);
  const sync=()=>{
    if(window.matchMedia('(min-width:768px)').matches){fab.style.display='none';return;}
    fab.style.display = (window.scrollY + 40 >= carta.offsetTop) ? 'none' : 'flex';
  };
  window.addEventListener('scroll',sync,{passive:true});
  sync();
})();
