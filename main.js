let menuBtn = document.querySelector(".menuBtn");
links = document.querySelector(".links");

menuBtn.addEventListener("click", () => {
	menuBtn.querySelector("i").classList.toggle("fa-xmark");
	links.classList.toggle("active");
});

AOS.init();