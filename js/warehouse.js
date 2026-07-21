const inventoryCtx = document.getElementById("inventoryChart");

if (inventoryCtx) {

    new Chart(inventoryCtx, {

        type: "bar",

        data: {

            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

            datasets: [

                {

                    label: "Inbound",

                    data: [120, 145, 132, 160, 170, 155, 180],

                    backgroundColor: "#2563EB"

                },

                {

                    label: "Outbound",

                    data: [98, 126, 118, 148, 160, 149, 172],

                    backgroundColor: "#22C55E"

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