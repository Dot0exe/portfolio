function checkRating() {
	var stars = document.querySelectorAll('input[name="rating"]:checked');
	if (stars.length > 0) {
		submitButton.disabled = false;
		submitButton.style.backgroundColor = "#4CAF50";
	} else {
		submitButton.disabled = true;
		submitButton.style.backgroundColor = "#808080";
	}
}
function showRatingForm() {
	var hasRated = localStorage.getItem("hasRated");

	if (!hasRated) {
		var popup = document.createElement("div");
		popup.innerHTML = `
			<div class="form">
				<form id="ratingForm" action="#" method="post">
					<label>Değerlendirme:</label>
					<span class="rating">
						<input type="radio" id="star5" name="rating" value="5" required>
						<label for="star5" title="Beş yıldız"></label>
						<input type="radio" id="star4" name="rating" value="4">
						<label for="star4" title="Dört yıldız"></label>
						<input type="radio" id="star3" name="rating" value="3">
						<label for="star3" title="Üç yıldız"></label>
						<input type="radio" id="star2" name="rating" value="2">
						<label for="star2" title="İki yıldız"></label>
						<input type="radio" id="star1" name="rating" value="1">
						<label for="star1" title="Bir yıldız"></label>
					</span><br>
					<input type="submit" id="submitButton" value="Gönder" disabled>
				</form>
			</div>`;
		popup.classList.add("popup");
		document.body.appendChild(popup);

		var closeButton = document.createElement("button");
		closeButton.textContent = "X";
		closeButton.classList.add("closeButton");
		popup.appendChild(closeButton);

		closeButton.addEventListener("click", function () {
			document.body.removeChild(popup);
		});

		var submitButton = document.getElementById("submitButton");

		document.addEventListener("change", checkRating);

		document.getElementById("ratingForm").addEventListener("submit", function (event) {
			event.preventDefault();
			checkRating();
			document.getElementById("ratingForm").reset();
			document.body.removeChild(popup);
			localStorage.setItem("hasRated", true);
		});


	}
}

showRatingForm();
checkRating()