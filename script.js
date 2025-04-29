const photo = document.getElementById("photo");

		const filters = [
			"filter1",
			"filter2",
			"filter3",
			"filter4",
			"filter5",
			"filter6",
			"filter7",
			"filter8"
		];

		function applyFilter(filterName) {
			filters.forEach(filter => {
				if (filter === filterName) {
					photo.classList.add(filter);
				} else {
					photo.classList.remove(filter);
				}
			});
		}

		for (let i = 1; i <= 8; i++) {
			const button = document.getElementById(`btn${i}`);
			button.addEventListener("click", () => {
				applyFilter(`filter${i}`);
			});
		}

		photo.addEventListener("click", () => {
			filters.forEach(filter => {
				photo.classList.remove(filter);
			});
		});