const poCtx = document.getElementById("poChart");

if (poCtx) {

    new Chart(poCtx, {

        type: "doughnut",

        data: {

            labels: [
                "Approved",
                "Pending",
                "Revised"
            ],

            datasets: [{

                data: [220, 80, 28],

                backgroundColor: [
                    "#22C55E",
                    "#F59E0B",
                    "#EF4444"
                ],

                borderWidth: 0

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            cutout: "65%",

            plugins: {

                legend: {
                    position: "bottom"
                }

            }

        }

    });

}