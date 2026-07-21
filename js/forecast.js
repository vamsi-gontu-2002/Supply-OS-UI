const forecastCtx = document.getElementById("forecastChart");

if (forecastCtx) {

    new Chart(forecastCtx, {

        type: "line",

        data: {

            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],

            datasets: [

                {

                    label: "Historical",

                    data: [38, 40, 43, 45, 47, 49, 51],

                    borderColor: "#2563EB",

                    backgroundColor: "rgba(37,99,235,.1)",

                    fill: false,

                    tension: .4

                },

                {

                    label: "Forecast",

                    data: [39, 42, 46, 48, 51, 54, 58],

                    borderColor: "#22C55E",

                    backgroundColor: "rgba(34,197,94,.1)",

                    borderDash: [6, 6],

                    fill: false,

                    tension: .4

                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    position: "bottom"

                }

            }

        }

    });

}