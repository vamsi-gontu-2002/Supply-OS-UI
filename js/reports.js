const reportCtx = document.getElementById("reportChart");

if (reportCtx) {

    new Chart(reportCtx, {

        type: "line",

        data: {

            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

            datasets: [{

                label: "Supply Chain Performance",

                data: [72, 75, 79, 83, 88, 92],

                borderColor: "#2563EB",

                backgroundColor: "rgba(37,99,235,.15)",

                fill: true,

                tension: .4

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

document.querySelectorAll(".download-btn").forEach(btn => {

    btn.addEventListener("click", function () {

        this.innerHTML = "Downloaded";

        this.style.background = "#22C55E";

    });

});