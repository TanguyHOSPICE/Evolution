$(function () {
	const doc = $(document);
	const elementsDisparition = $(".effet");

	doc.on("scroll", function () {
		// Position par rapport au top
		let posActuelle = doc.scrollTop();
		console.log(posActuelle);

		elementsDisparition.each(function () {
			// Position de chq elts par rapport au top
			let decalageTop = $(this).offset.top;
			console.log("Decal" + decalageTop);

			if (posActuelle > decalageTop) {
				$(this).css("opacity", 1 - (posActuelle - decalageTop) / 1000);
			}
		});
	});
});
