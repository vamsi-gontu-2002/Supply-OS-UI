/* ===========================
Supplier Performance Chart
=========================== */

const supplierCtx = document.getElementById("supplierChart");

if (supplierCtx) {

    new Chart(supplierCtx, {

        type: "bar",

        data: {

            labels: ["ABC", "Prime", "Global", "Supply Hub"],

            datasets: [{

                label: "Performance %",

                data: [87, 94, 98, 97],

                backgroundColor: [

                    "#EF4444",

                    "#F59E0B",

                    "#22C55E",

                    "#2563EB"

                ]

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

                    beginAtZero: true,

                    max: 100

                }

            }

        }

    });

}

/* ===========================
Search
=========================== */

const search = document.getElementById("searchBox");

search.addEventListener("keyup", function () {

    let value = this.value.toLowerCase();

    let rows = document.querySelectorAll("#supplierTable tr");

    rows.forEach(row => {

        row.style.display = row.innerText.toLowerCase().includes(value)
            ? "" : "none";

    });

});

/* ===========================
Risk Filter
=========================== */

const filter = document.getElementById("riskFilter");

filter.addEventListener("change", function () {

    let rows = document.querySelectorAll("#supplierTable tr");

    rows.forEach(row => {

        if (this.value === "All Risks") {

            row.style.display = "";

            return;

        }

        row.style.display = row.innerText.includes(this.value)
            ? "" : "none";

    });

});