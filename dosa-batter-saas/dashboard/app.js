async function loadVendors(){

const res = await fetch("/vendors")

const data = await res.json()

const table = document.getElementById("vendorTable")

data.forEach(v=>{

const row = `
<tr>
<td>${v.name}</td>
<td>${v.phone}</td>
<td>${v.approved}</td>
</tr>
`

table.innerHTML += row

})

}

loadVendors()