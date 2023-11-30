function toggleMode() {
    const html = document.documentElement;

    html.classList.toggle('light');
}


/* FAIXA REI LEAO */

var rei_leao = document.querySelector(".rei-leao");

rei_leao.addEventListener("click", function() {

	// descricao
	var description = document.querySelector("#description");
	var space = document.querySelector("#filmes-click");


	if(description.style.display == "none") {
		description.style.display = "block";
		space.style.display = "block";

		// espaco destinado a descricao
		const grid = document.querySelector('#filmes');
		const computedStyle = window.getComputedStyle(grid);
		const columnValue = computedStyle.getPropertyValue('grid-template-columns');
		const numberColumns = columnValue.split(' ').length;

		const gridItem = document.getElementById('filmes-click');
		gridItem.style.gridColumnEnd = numberColumns+1;

	} else {
		description.style.display = "none";
		space.style.display = "none";
	}
});


/* FAIXA INSERÇÃO */

var next = document.querySelector(".next");

next.addEventListener("click", function() {

	// descricao
	var description = document.querySelector("#add-film");
	var space = document.querySelector("#filmes-click");


	if(description.style.display == "none") {
		description.style.display = "block";
		space.style.display = "block";

		// espaco destinado a descricao
		const grid = document.querySelector('#filmes');
		const computedStyle = window.getComputedStyle(grid);
		const columnValue = computedStyle.getPropertyValue('grid-template-columns');
		const numberColumns = columnValue.split(' ').length;

		const gridItem = document.getElementById('filmes-click');
		gridItem.style.gridColumnEnd = numberColumns+1;

	} else {
		description.style.display = "none";
		space.style.display = "none";
	}
});