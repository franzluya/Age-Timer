const dobEl = document.getElementById("dob");
const form = document.getElementById("dob-form");
const ageEl = document.getElementById("age");
const outputEl = document.getElementById("output");
form.addEventListener("submit", (e) => {
	e.preventDefault();
	const dob = new Date(dobEl.value);

	if (!isNaN(dob.getTime())) {
    form.style.display = "none";
		outputEl.style.display = "block";
    startTimer(dob);
	} else {
    alert('Please input valid birthday')
  }

});

function startTimer(dob) {
	setInterval(() => {
		const timeNow = new Date();

		const ageInMs = timeNow - dob;
		const totalAgeInSeconds = ageInMs / 1000;
		const totalAgeInYears = totalAgeInSeconds / (60 * 60 * 24 * 365);
		const ageInt = Math.floor(totalAgeInYears);
		const ageDecimal = (totalAgeInYears - ageInt).toFixed(9);

		ageEl.innerHTML = `<span class="larger">${ageInt}.</span>${ageDecimal.substring(
			2
		)}`;
	}, 100);
}
