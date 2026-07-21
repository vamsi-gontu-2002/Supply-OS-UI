const status = document.getElementById("status");

const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const step4 = document.getElementById("step4");
const step5 = document.getElementById("step5");

setTimeout(() => {

    status.innerHTML = "Loading Supplier Network...";
    step2.innerHTML = "✓ Supplier Network Loaded";

}, 1200);

setTimeout(() => {

    status.innerHTML = "Loading Manufacturing...";
    step3.innerHTML = "✓ Manufacturing Ready";

}, 2500);

setTimeout(() => {

    status.innerHTML = "Connecting ERP...";
    step4.innerHTML = "✓ ERP Connected";

}, 3800);

setTimeout(() => {

    status.innerHTML = "Launching Dashboard...";
    step5.innerHTML = "✓ Dashboard Ready";

}, 5000);

setTimeout(() => {

    window.location = "dashboard.html";

}, 6200);