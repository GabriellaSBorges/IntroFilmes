function toggleMode() {
    const html = document.documentElement;

    html.classList.toggle('light');
}

var rei_leao = document.querySelector(".rei-leao");

rei_leao.addEventListener("click", function() {

	var description = document.querySelector("#description");
	var space = document.querySelector("#filmes-click");

	if(description.style.display == "none") {
		description.style.display = "block";
		space.style.display = "block";

	} else {
		description.style.display = "none";
		space.style.display = "none";
	}
});
