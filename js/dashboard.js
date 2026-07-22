function animateValue(id, start, end, duration) {

    let obj = document.getElementById(id);
    if (!obj) return;

    let range = end - start;

    let current = start;

    let increment = end > start ? 1 : -1;

    let step = Math.abs(Math.floor(duration / range));

    let timer = setInterval(() => {

        current += increment;

        obj.innerHTML = current;

        if (current == end) {

            clearInterval(timer);

        }

    }, step);

}

window.onload = function () {

    animateValue("supplierCount", 0, 245, 1200);

    animateValue("delivery", 0, 96, 1200);

};
/* ===============================
   Monthly Spend Chart
=============================== */

const spendCtx = document.getElementById("spendChart");

if (spendCtx) {

    new Chart(spendCtx, {

        type: "line",

        data: {

            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],

            datasets: [{

                label: "Monthly Spend",

                data: [11, 11.1, 12.4, 13.2, 10.2, 11.2, 15.3],

                borderColor: "#2563EB",

                backgroundColor: "rgba(37,99,235,.12)",

                fill: true,

                tension: .4,

                pointRadius: 5,

                pointHoverRadius: 7

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    display: false

                }

            },

            scales: {

                y: {

                    min: 0,

                    max: 16

                }

            }

        }

    });

}

/* ===============================
   Spend Category
=============================== */

const categoryCtx = document.getElementById("categoryChart");

if (categoryCtx) {

    new Chart(categoryCtx, {

        type: "doughnut",

        data: {

            // labels: [

            //     "Raw Material",

            //     "Packaging",

            //     "Transportation",

            //     "Utilities"

            // ],

            datasets: [{

                data: [45, 20, 25, 10],

                backgroundColor: [

                    "#2563EB",

                    "#22C55E",

                    "#F59E0B",

                    "#ef7a44ff"

                ],

                borderWidth: 0

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            cutout: "50%",

            plugins: {

                legend: {

                    position: "bottom",

                }

            }

        }

    });

}