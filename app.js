const MENU={"Café":{img:"imagenes/ig/ig-10.webp",alt:"Cafés para llevar y cortado",items:[["Espresso","Café de especialidad, caturra de altura (Colombia)."],["Capuchino","Espresso con leche texturizada."],["Americano","Espresso alargado con agua caliente."],["Café helado","Para los días de parque."]]},
"Salados":{img:"imagenes/ig/ig-02.webp",alt:"Bowl salado con pasta y pollo",items:[["Sándwich","Variedades por confirmar."],["Ensaladas","Variedades por confirmar."],["Gohan","Bowl, ingredientes por confirmar."],["Pastel de choclo","Clásico chileno."]]},
"Jugos":{img:"imagenes/ig/ig-05.webp",alt:"Jugo natural",items:[["Jugos","Sabores por confirmar."]]},
"Frappés":{items:[["Frappé","Variedades por confirmar."]]},
"Pastelería":{items:[["Tortas","Porciones contundentes, sabores por confirmar."],["Pastelitos","Selección del día."],["Opciones sin azúcar","Por confirmar con el local."]]},
"Helados":{items:[["Helado","Sabores por confirmar."]]}};
const plus='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M12 5v14M5 12h14"/></svg>';
const tabs=document.getElementById('tabs'),grid=document.getElementById('grid');
function show(k){[...tabs.children].forEach(b=>b.classList.toggle('on',b.textContent===k));const c=MENU[k];
grid.innerHTML=(c.img?`<img class="catimg" style="grid-column:1/-1" src="${c.img}" alt="${c.alt}" data-edit-img>`:'')+c.items.map(([n,d])=>`<article class="card"><div class="img">Añadir imagen de producto</div><div class="in"><h3>${n}</h3><p>${d}</p><div class="row"><span class="price">Precio por confirmar</span><button class="add" aria-label="Agregar ${n}">${plus}</button></div></div></article>`).join('')}
Object.keys(MENU).forEach(k=>{const b=document.createElement('button');b.textContent=k;b.onclick=()=>show(k);tabs.appendChild(b)});show('Café');
