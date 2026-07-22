const ctx = document.getElementById("productionChart");

if (ctx) {

    new Chart(ctx, {

        type: "line",

        data: {

            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

            datasets: [{

                label: "Units Produced",

                data: [10000, 9400, 9800, 10200, 10400, 9600, 10000],

                borderColor: "#2563EB",

                backgroundColor: "rgba(37,99,235,.15)",

                fill: true,

                tension: .4,

                pointRadius: 5

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    display: false

                }

            }

        }

    });

}