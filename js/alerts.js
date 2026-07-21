const alertCtx = document.getElementById("alertChart");

if (alertCtx) {

    new Chart(alertCtx, {

        type: "pie",

        data: {

            labels: [
                "Critical",
                "Medium",
                "Low"
            ],

            datasets: [{

                data: [12, 18, 25],

                backgroundColor: [
                    "#EF4444",
                    "#F59E0B",
                    "#2563EB"
                ]

            }]

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

document.querySelectorAll(".ack-btn").forEach(button => {

    button.addEventListener("click", function () {

        this.innerHTML = "Completed";

        this.style.background = "#22C55E";

    });

});