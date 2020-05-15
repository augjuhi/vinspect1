function ClimantNameFilter() {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("claimantName");
	filter = input.value.toUpperCase();
	table = document.getElementById("customers");
	tr = table.getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[1];
		console.log(td);
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

function CliamNoFilter() {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("claimno");
	filter = input.value.toUpperCase();
	table = document.getElementById("customers");
	tr = table.getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		console.log(td);
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

function policyNumFilter() {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("policyNum");
	filter = input.value.toUpperCase();
	table = document.getElementById("customers");
	tr = table.getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[3];
		console.log(td);
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}
function mobileNumFilter() {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("mobileNum");
	filter = input.value.toUpperCase();
	table = document.getElementById("customers");
	tr = table.getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[4];
		console.log(td);
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}
