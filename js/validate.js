function validateForm() {
    var name = document.forms["myForm"]["fname"].value;
    var surnames = document.forms["myForm"]["fsurnames"].value;
    var email = document.forms["myForm"]["femail"].value;
    var telephone = document.forms["myForm"]["ftelephone"].value;
    var address = document.forms["myForm"]["faddress"].value;
    var address2 = document.forms["myForm"]["faddress2"].value;
    var gender = document.getElementById('inputState');
    var invalid = "Elegir sexo...";
    var city = document.forms["myForm"]["fcity"].value;
    var postalcode = document.forms["myForm"]["fpostalcode"].value;

    if (name == "") {
        document.getElementById("fname").style.display = "block";
        document.getElementById("fname").innerHTML = "Nombre no válido";
    } else {
        document.getElementById("fname").style.display = "none";
    }
    if (surnames == "") {
        document.getElementById("fsurnames").style.display = "block";
        document.getElementById("fsurnames").innerHTML = "Apellidos no válido";
    } else {
        document.getElementById("fsurnames").style.display = "none";
    }
    if (email == "") {
        document.getElementById("femail").style.display = "block";
        document.getElementById("femail").innerHTML = "Email no válido";
    } else {
        document.getElementById("femail").style.display = "none";
    }
    if (telephone == "") {
        document.getElementById("ftelephone").style.display = "block";
        document.getElementById("ftelephone").innerHTML = "Teléfono no válido";
    } else {
        document.getElementById("ftelephone").style.display = "none";
    }
    if (address == "") {
        document.getElementById("faddress").style.display = "block";
        document.getElementById("faddress").innerHTML = "Dirección no válida";
    } else {
        document.getElementById("faddress").style.display = "none";
    }
    if (address2 == "") {
        document.getElementById("faddress2").style.display = "block";
        document.getElementById("faddress2").innerHTML = "Dirección no válida";
    } else {
        document.getElementById("faddress2").style.display = "none";
    }
    if (gender.value == invalid) {
        document.getElementById("fgender").style.display = "block";
        document.getElementById("fgender").innerHTML = "Seleccione una opción";
    } else {
        document.getElementById("fgender").style.display = "none";
    }
    if (city == "") {
        document.getElementById("fcity").style.display = "block";
        document.getElementById("fcity").innerHTML = "Ciudad no válida";
    } else {
        document.getElementById("fcity").style.display = "none";
    }
    if (postalcode == "") {
        document.getElementById("fpostalcode").style.display = "block";
        document.getElementById("fpostalcode").innerHTML = "Código postal no válido";
    } else {
        document.getElementById("fpostalcode").style.display = "none";
    }
    if (!document.getElementById("carneSi").checked && !document.getElementById("carneNo").checked) {
        document.getElementById("flicense").style.display = "block";
        document.getElementById("flicense").innerHTML = "Debe seleccionar una acción";
    } else {
        document.getElementById("flicense").style.display = "none";
    }

    return false;
}
