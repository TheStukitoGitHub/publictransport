document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("searchButton");
    const fromCitySelect = document.getElementById("fromCity");
    const toCitySelect = document.getElementById("toCity");
    const resultsContainer = document.getElementById("results");

    // Define static bus route data (replace with actual data)
    const busRoutes = {
        city1: {
            city2: { busNumber: "13", time: "1 минута", departure: "06:10, 06:30, 06:50, 07:10, 07:30, 07:50, 08:10, 08:30, 08:50, 09:10, 09:30, 09:50, 10:10, 10:30, 10:50, 11:10, 11:30, 11:50, 12:10, 12:30, 12:50, 13:10, 13:30, 13:50, 14:10, 14:30, 14:50, 15:10, 15:30, 15:50, 16:10, 16:30, 16:50, 17:10, 17:30, 17:50, 18:10, 18:30, 18:50, 19:10, 19:30, 19:50, 20:10, 20:30, 20:50" },
            city3: { busNumber: "13", time: "2 минути", departure: "06:10, 06:30, 06:50, 07:10, 07:30, 07:50, 08:10, 08:30, 08:50, 09:10, 09:30, 09:50, 10:10, 10:30, 10:50, 11:10, 11:30, 11:50, 12:10, 12:30, 12:50, 13:10, 13:30, 13:50, 14:10, 14:30, 14:50, 15:10, 15:30, 15:50, 16:10, 16:30, 16:50, 17:10, 17:30, 17:50, 18:10, 18:30, 18:50, 19:10, 19:30, 19:50, 20:10, 20:30, 20:50" },
            city4: { busNumber: "13", time: "4 минути", departure: "06:10, 06:30, 06:50, 07:10, 07:30, 07:50, 08:10, 08:30, 08:50, 09:10, 09:30, 09:50, 10:10, 10:30, 10:50, 11:10, 11:30, 11:50, 12:10, 12:30, 12:50, 13:10, 13:30, 13:50, 14:10, 14:30, 14:50, 15:10, 15:30, 15:50, 16:10, 16:30, 16:50, 17:10, 17:30, 17:50, 18:10, 18:30, 18:50, 19:10, 19:30, 19:50, 20:10, 20:30, 20:50" },
            city5: { busNumber: "13", time: "7 минути", departure: "06:10, 06:30, 06:50, 07:10, 07:30, 07:50, 08:10, 08:30, 08:50, 09:10, 09:30, 09:50, 10:10, 10:30, 10:50, 11:10, 11:30, 11:50, 12:10, 12:30, 12:50, 13:10, 13:30, 13:50, 14:10, 14:30, 14:50, 15:10, 15:30, 15:50, 16:10, 16:30, 16:50, 17:10, 17:30, 17:50, 18:10, 18:30, 18:50, 19:10, 19:30, 19:50, 20:10, 20:30, 20:50" },
            city6: { busNumber: "13", time: "9 минути", departure: "06:10, 06:30, 06:50, 07:10, 07:30, 07:50, 08:10, 08:30, 08:50, 09:10, 09:30, 09:50, 10:10, 10:30, 10:50, 11:10, 11:30, 11:50, 12:10, 12:30, 12:50, 13:10, 13:30, 13:50, 14:10, 14:30, 14:50, 15:10, 15:30, 15:50, 16:10, 16:30, 16:50, 17:10, 17:30, 17:50, 18:10, 18:30, 18:50, 19:10, 19:30, 19:50, 20:10, 20:30, 20:50" },
            city7: { busNumber: "13", time: "11 минути", departure: "06:10, 06:30, 06:50, 07:10, 07:30, 07:50, 08:10, 08:30, 08:50, 09:10, 09:30, 09:50, 10:10, 10:30, 10:50, 11:10, 11:30, 11:50, 12:10, 12:30, 12:50, 13:10, 13:30, 13:50, 14:10, 14:30, 14:50, 15:10, 15:30, 15:50, 16:10, 16:30, 16:50, 17:10, 17:30, 17:50, 18:10, 18:30, 18:50, 19:10, 19:30, 19:50, 20:10, 20:30, 20:50" },
            city8: { busNumber: "13", time: "12 минути", departure: "06:10, 06:30, 06:50, 07:10, 07:30, 07:50, 08:10, 08:30, 08:50, 09:10, 09:30, 09:50, 10:10, 10:30, 10:50, 11:10, 11:30, 11:50, 12:10, 12:30, 12:50, 13:10, 13:30, 13:50, 14:10, 14:30, 14:50, 15:10, 15:30, 15:50, 16:10, 16:30, 16:50, 17:10, 17:30, 17:50, 18:10, 18:30, 18:50, 19:10, 19:30, 19:50, 20:10, 20:30, 20:50" },
            city9: { busNumber: "13", time: "16 минути", departure: "06:10, 06:30, 06:50, 07:10, 07:30, 07:50, 08:10, 08:30, 08:50, 09:10, 09:30, 09:50, 10:10, 10:30, 10:50, 11:10, 11:30, 11:50, 12:10, 12:30, 12:50, 13:10, 13:30, 13:50, 14:10, 14:30, 14:50, 15:10, 15:30, 15:50, 16:10, 16:30, 16:50, 17:10, 17:30, 17:50, 18:10, 18:30, 18:50, 19:10, 19:30, 19:50, 20:10, 20:30, 20:50" },
            city10: { busNumber: "13", time: "19 минути", departure: "06:10, 06:30, 06:50, 07:10, 07:30, 07:50, 08:10, 08:30, 08:50, 09:10, 09:30, 09:50, 10:10, 10:30, 10:50, 11:10, 11:30, 11:50, 12:10, 12:30, 12:50, 13:10, 13:30, 13:50, 14:10, 14:30, 14:50, 15:10, 15:30, 15:50, 16:10, 16:30, 16:50, 17:10, 17:30, 17:50, 18:10, 18:30, 18:50, 19:10, 19:30, 19:50, 20:10, 20:30, 20:50" },
            city11: { busNumber: "13", time: "20 минути", departure: "06:10, 06:30, 06:50, 07:10, 07:30, 07:50, 08:10, 08:30, 08:50, 09:10, 09:30, 09:50, 10:10, 10:30, 10:50, 11:10, 11:30, 11:50, 12:10, 12:30, 12:50, 13:10, 13:30, 13:50, 14:10, 14:30, 14:50, 15:10, 15:30, 15:50, 16:10, 16:30, 16:50, 17:10, 17:30, 17:50, 18:10, 18:30, 18:50, 19:10, 19:30, 19:50, 20:10, 20:30, 20:50" },
            city12: { busNumber: "13", time: "24 минути", departure: "06:10, 06:30, 06:50, 07:10, 07:30, 07:50, 08:10, 08:30, 08:50, 09:10, 09:30, 09:50, 10:10, 10:30, 10:50, 11:10, 11:30, 11:50, 12:10, 12:30, 12:50, 13:10, 13:30, 13:50, 14:10, 14:30, 14:50, 15:10, 15:30, 15:50, 16:10, 16:30, 16:50, 17:10, 17:30, 17:50, 18:10, 18:30, 18:50, 19:10, 19:30, 19:50, 20:10, 20:30, 20:50" },
            city13: { busNumber: "13", time: "27 минути", departure: "06:10, 06:30, 06:50, 07:10, 07:30, 07:50, 08:10, 08:30, 08:50, 09:10, 09:30, 09:50, 10:10, 10:30, 10:50, 11:10, 11:30, 11:50, 12:10, 12:30, 12:50, 13:10, 13:30, 13:50, 14:10, 14:30, 14:50, 15:10, 15:30, 15:50, 16:10, 16:30, 16:50, 17:10, 17:30, 17:50, 18:10, 18:30, 18:50, 19:10, 19:30, 19:50, 20:10, 20:30, 20:50" },
            city14: { busNumber: "13", time: "28 минути", departure: "06:10, 06:30, 06:50, 07:10, 07:30, 07:50, 08:10, 08:30, 08:50, 09:10, 09:30, 09:50, 10:10, 10:30, 10:50, 11:10, 11:30, 11:50, 12:10, 12:30, 12:50, 13:10, 13:30, 13:50, 14:10, 14:30, 14:50, 15:10, 15:30, 15:50, 16:10, 16:30, 16:50, 17:10, 17:30, 17:50, 18:10, 18:30, 18:50, 19:10, 19:30, 19:50, 20:10, 20:30, 20:50" },
            city15: { busNumber: "13", time: "29 минути", departure: "06:10, 06:30, 06:50, 07:10, 07:30, 07:50, 08:10, 08:30, 08:50, 09:10, 09:30, 09:50, 10:10, 10:30, 10:50, 11:10, 11:30, 11:50, 12:10, 12:30, 12:50, 13:10, 13:30, 13:50, 14:10, 14:30, 14:50, 15:10, 15:30, 15:50, 16:10, 16:30, 16:50, 17:10, 17:30, 17:50, 18:10, 18:30, 18:50, 19:10, 19:30, 19:50, 20:10, 20:30, 20:50" },
        },
        city2: {
            city1: { busNumber: "13", time: "1 минута", departure: "" },
            city3: { busNumber: "13", time: "1 минути", departure: "" },
            city4: { busNumber: "13", time: "3 минути", departure: "" },
            city5: { busNumber: "13", time: "6 минути", departure: "" },
        },
        city3: {
            city1: { busNumber: "13", time: "2 минута", departure: "" },
            city2: { busNumber: "13", time: "1 минути", departure: "" },
            city4: { busNumber: "13", time: "2 минути", departure: "" },
            city5: { busNumber: "13", time: "5 минути", departure: "" },
        },
        // Add more routes here
    };

    // Function to display bus route information
    function displayBusRoute(fromCity, toCity) {
        if (busRoutes[fromCity] && busRoutes[fromCity][toCity]) {
            const { busNumber, time, departure } = busRoutes[fromCity][toCity];
            const departureTimes = departure.split(", ");
            const currentTime = new Date();
            const currentHour = currentTime.getHours();
            const currentMinute = currentTime.getMinutes();
            let nextDepartureTime = "No more departures today. Next departure tomorrow at ";
            let nextDepartureHour = parseInt(departureTimes[0].split(":")[0]);
            let nextDepartureMinute = parseInt(departureTimes[0].split(":")[1]);

            // Find the next departure time
            for (let i = 0; i < departureTimes.length; i++) {
                const departureHour = parseInt(departureTimes[i].split(":")[0]);
                const departureMinute = parseInt(departureTimes[i].split(":")[1]);

                if (departureHour > currentHour || (departureHour === currentHour && departureMinute > currentMinute)) {
                    nextDepartureTime = `Следващото отпътуване: ${departureTimes[i]}`;
                    nextDepartureHour = departureHour;
                    nextDepartureMinute = departureMinute;
                    break;
                }
            }

            // Display the bus route information
            resultsContainer.innerHTML = `
                <p>Автобус: ${busNumber}</p>
                <p>Пътуване: ${time}</p>
                <p>${nextDepartureTime}</p>
            `;

            // If there are no more departures today, calculate the time until the first departure tomorrow
            if (nextDepartureTime === "No more departures today. Next departure tomorrow at ") {
                const firstDepartureTomorrow = new Date();
                firstDepartureTomorrow.setDate(firstDepartureTomorrow.getDate() + 1);
                firstDepartureTomorrow.setHours(nextDepartureHour);
                firstDepartureTomorrow.setMinutes(nextDepartureMinute);

                const timeUntilFirstDepartureTomorrow = Math.ceil((firstDepartureTomorrow.getTime() - currentTime.getTime()) / (1000 * 60));
                const hoursUntilFirstDepartureTomorrow = Math.floor(timeUntilFirstDepartureTomorrow / 60);
                const minutesUntilFirstDepartureTomorrow = timeUntilFirstDepartureTomorrow % 60;

                resultsContainer.innerHTML += `Next departure tomorrow at ${nextDepartureHour}:${nextDepartureMinute}. It is in ${hoursUntilFirstDepartureTomorrow} hours and ${minutesUntilFirstDepartureTomorrow} minutes.`;
            }
        } else {
            resultsContainer.innerHTML = "<p>Няма намерен маршрут</p>";
        }
    }

    // Event listener for the search button
    searchButton.addEventListener("click", function () {
        const fromCity = fromCitySelect.value;
        const toCity = toCitySelect.value;
        displayBusRoute(fromCity, toCity);
    });

    // Event listener for the "From City" select change
    fromCitySelect.addEventListener("change", function () {
        // Get the selected city in "From City" dropdown
        const selectedCity = fromCitySelect.value;

        // Remove the selected city from the "To City" dropdown
        const toCityOptions = toCitySelect.querySelectorAll("option");
        toCityOptions.forEach((option) => {
            if (option.value === selectedCity) {
                option.disabled = true;
            } else {
                option.disabled = false;
            }
        });
    });
});
