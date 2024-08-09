// * Si los elementos ya existen:
// const btn = document.querySelector(".hamburger");
// btn.addEventListener("click", () => {
// 	const nav = document.querySelector(".nav");
// 	nav.classList.toggle("hidden");
// });

// * Creando los elementos desde JS:
const app = document.querySelector(".app");
const btn = document.createElement("button");
btn.classList.add("hamburger");
btn.textContent = "Click Me!";

const nav = document.createElement("nav");
nav.classList.add("nav");
nav.classList.add("hidden");
nav.innerHTML = `
    <ul class="menu">
        <li><a class="link" href="#">Inicio</a></li>
        <li><a class="link" href="#">Sobre Nosotros</a></li>
        <li><a class="link" href="#">Contacto</a></li>
    </ul>
`;

btn.addEventListener("click", () => {
	const nav = document.querySelector(".nav");
	nav.classList.toggle("hidden");
});

app.appendChild(btn);
app.appendChild(nav);
