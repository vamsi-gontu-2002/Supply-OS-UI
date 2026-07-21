const financeCtx = document.getElementById("financeChart");

if (financeCtx) {

    new Chart(financeCtx, {

        type: "bar",

        data: {

            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

            datasets: [

                {

                    label: "Revenue",

                    data: [6.8, 7.1, 7.4, 8.2, 9.1, 10.0],

                    backgroundColor: "#2563EB"

                },

                {

                    label: "Expenses",

                    data: [4.9, 5.2, 5.3, 5.8, 5.9, 6.7],

                    backgroundColor: "#EF4444"

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