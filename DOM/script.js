// TODO: Realizar Menú Hamburguesa

const btn = document.querySelector(".hamburger");
btn.addEventListener("click", () => {
	const nav = document.querySelector(".nav");
	nav.classList.toggle("hidden");
});
