<script src="js/config.js"></script>
<script>

async function loadData(){

const { data , error } =
await supabaseClient
.from("records")
.select("*");

if(error){
alert(error.message);
return;
}

document.getElementById("totalRecords").innerText =
data.length;

let total = 0;

data.forEach(r=>{
total += Number(r.total_amt || 0);
});

document.getElementById("totalAmount").innerText =
total;

let html = "";

data.forEach(r=>{

html += `
<tr>
<td>${r.scno}</td>
<td>${r.name}</td>
<td>${r.mobile_no}</td>
<td>${r.total_amt}</td>
<td>
<a target="_blank"
href="https://maps.google.com/?q=${r.latitude},${r.longitude}">
MAP
</a>
</td>
</tr>
`;

});

document.getElementById("tableBody").innerHTML =
html;

}

loadData();

</script>
