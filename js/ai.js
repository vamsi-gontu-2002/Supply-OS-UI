const predictionCtx = document.getElementById("predictionChart");

if (predictionCtx) {

    new Chart(predictionCtx, {

        type: "radar",

        data: {

            labels: [
                "Forecast",
                "Procurement",
                "Inventory",
                "Suppliers",
                "Manufacturing",
                "Finance"
            ],

            datasets: [{

                label: "AI Confidence",

                data: [97, 94, 96, 92, 95, 98],

                backgroundColor: "rgba(37,99,235,.2)",

                borderColor: "#2563EB",

                pointBackgroundColor: "#2563EB"

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