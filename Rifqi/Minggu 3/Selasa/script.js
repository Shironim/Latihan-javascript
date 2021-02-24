var selectRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectRow == null) {
            insertNewRecord(formData);
        } else {
            updateRecord(formData);
        }  
        resetForm();
    }
    
}

function readFormData() {
    var formData = {};
    formData["namabrg"] = document.getElementById("namabrg").value;
    formData["jumlahbrg"] = document.getElementById("jumlahbrg").value;
    formData["hargabrg"] = document.getElementById("hargabrg").value;
    formData["loadbrg"] = document.getElementById("loadbrg").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("daftarbrg").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.namabrg;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.jumlahbrg;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.hargabrg;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.loadbrg;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("namabrg").value = "";
    document.getElementById("jumlahbrg").value = "";
    document.getElementById("hargabrg").value = "";
    document.getElementById("loadbrg").value = "";
    selectRow = null;
}

function onEdit(td) {
    selectRow = td.parentElement.parentElement;
    document.getElementById("namabrg").value = selectRow.cells[0].innerHTML;
    document.getElementById("jumlahbrg").value = selectRow.cells[1].innerHTML;
    document.getElementById("hargabrg").value = selectRow.cells[2].innerHTML;
    document.getElementById("loadbrg").value = selectRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectRow.cells[0].innerHTML = formData.namabrg;
    selectRow.cells[1].innerHTML = formData.jumlahbrg;
    selectRow.cells[2].innerHTML = formData.hargabrg;
    selectRow.cells[3].innerHTML = formData.loadbrg;
}

function onDelete(td) {
    if (confirm()) {
        row = td.parentElement.parentElement;
        document.getElementById("daftarbrg").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    if (document.getElementById("namabrg").value == "") {
        isValid = false;
        document.getElementById("namabrgvalidationerror").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("namabrgvalidationerror").classList.contains("hide")) {
            document.getElementById("namabrgvalidationerror");
        }
    }
    return isValid
}
