const MENU={"Café":[["Espresso","Café de especialidad, caturra de altura (Colombia)."],["Capuchino","Espresso con leche texturizada."],["Latte","Suave y cremoso."],["Café helado","Para los días de parque."]],
"Frappés":[["Frappé","Variedades por confirmar."]],
"Pastelería":[["Tortas","Porciones contundentes, sabores por confirmar."],["Pastelitos","Selección del día."],["Opciones sin azúcar","Por confirmar con el local."]],
"Helados":[["Helado","Sabores por confirmar."]]};
const plus='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M12 5v14M5 12h14"/></svg>';
const tabs=document.getElementById('tabs'),grid=document.getElementById('grid');
function show(k){[...tabs.children].forEach(b=>b.classList.toggle('on',b.textContent===k));
grid.innerHTML=MENU[k].map(([n,d])=>`<article class="card"><div class="img">Añadir imagen de producto</div><div class="in"><h3>${n}</h3><p>${d}</p><div class="row"><span class="price">Precio por confirmar</span><button class="add" aria-label="Agregar ${n}">${plus}</button></div></div></article>`).join('')}
Object.keys(MENU).forEach(k=>{const b=document.createElement('button');b.textContent=k;b.onclick=()=>show(k);tabs.appendChild(b)});show('Café');
