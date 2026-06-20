let rows = document.querySelectorAll("tr");

rows.forEach(row=>{
    let qty = row.querySelector(".qty");
    let price = row.querySelector(".price");
    let total = row.querySelector(".total");

    if(qty && price){
        function calc(){
            let q = Number(qty.value) || 0;
            let p = Number(price.value) || 0;
            total.value = q * p;
            grandTotal();
        }

        qty.addEventListener("input", calc);
        price.addEventListener("input", calc);
    }
});

function grandTotal(){
    let totals = document.querySelectorAll(".total");
    let sum = 0;

    totals.forEach(t=>{
        sum += Number(t.value) || 0;
    });

    document.getElementById("grandTotal").innerText = sum;
    document.getElementById("date").innerText = new Date().toLocaleString();
}

function generateReceipt(){
    let names = document.querySelectorAll(".name");
    let qtys = document.querySelectorAll(".qty");
    let prices = document.querySelectorAll(".price");
    let totals = document.querySelectorAll(".total");

    let html = "<table border='1' width='100%'><tr><th>Name</th><th>Qty</th><th>Price</th><th>Total</th></tr>";

    for(let i=0;i<names.length;i++){
        if(names[i].value !== ""){
            html += `
            <tr>
                <td>${names[i].value}</td>
                <td>${qtys[i].value}</td>
                <td>${prices[i].value}</td>
                <td>${totals[i].value}</td>
            </tr>`;
        }
    }

    html += "</table>";

    document.getElementById("receiptData").innerHTML = html;
    document.getElementById("receiptTotal").innerText =
        "Grand Total: " + document.getElementById("grandTotal").innerText;

    document.getElementById("receipt").style.display = "block";
}
html += `
<div style="display:flex; justify-content:space-between; border-bottom:1px solid #000; padding:5px 0;">
    <span>${names[i].value}</span>
    <span>${qtys[i].value}</span>
    <span>${prices[i].value}</span>
    <span>${totals[i].value}</span>
</div>`;