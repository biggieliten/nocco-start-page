async function renderCanImages() {
	const response = await fetch("./assets/cans.json");
	const cans = await response.json();

	const carousellElement = document.querySelector(".carousell")

	if (!carousellElement) return;

	cans.forEach(can => {
		const canElement = document.createElement("div")
		canElement.className = `carousell-item ${can.id}`;

		const canImage = document.createElement("img")
		canImage.className = `carousell-item-content ${can.id}`;
		canImage.src = can.path;
		canImage.alt = can.id;

		canElement.append(canImage);
		carousellElement.append(canElement)
	});

}

await renderCanImages();
