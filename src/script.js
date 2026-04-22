async function renderCanImages() {
	const carouselElement = document.querySelector(".carousel")
	if (!carouselElement) return;

	const response = await fetch("./assets/cans.json");
	const cans = await response.json();

	cans.forEach(can => {
		const canElement = document.createElement("div")
		canElement.className = `carousel-item ${can.id}`;

		const canImage = document.createElement("img")
		canImage.className = `carousel-item-content ${can.id}`;
		canImage.src = can.path;
		canImage.alt = can.id;

		canElement.append(canImage);
		carouselElement.append(canElement)
	});
}

async function renderNewsCards() {
	const newsListElement = document.querySelector(".news-list")
	if (!newsListElement) return;

	const response = await fetch("./assets/news.json");
	const news = await response.json();

	news.forEach(n => {
		const listItemElement = document.createElement("li");
		const listItemImage = document.createElement("img");
		const listItemHeader = document.createElement("h3");
		const headerAnchor = document.createElement("a");
		const listItemDate = document.createElement("p");

		listItemImage.src = n.path;
		listItemImage.alt = n.id;
		headerAnchor.textContent = n.title;
		listItemDate.textContent = n.date

		listItemElement.classList = `news-list-item ${n.id}`;
		listItemImage.classList = `news-list-item-image ${n.id}`;
		listItemHeader.classList = `news-list-item-header ${n.id}`;
		listItemDate.classList = `news-list-item-date ${n.id}`;

		listItemHeader.append(headerAnchor);
		listItemElement.append(listItemImage, listItemHeader, listItemDate);
		newsListElement.append(listItemElement);
	});
}

// Call this metohd twice for increased renders
await renderCanImages();
await renderCanImages();

await renderNewsCards();