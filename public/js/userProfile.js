function qs(element) {
    return document.querySelector(element)
}

window.addEventListener("load", () => {
    let $inputName = qs('#name'),
        $nameErrors = qs('#nameErrors'),
        $selectProvincias = qs("#province"),
        $selectLocalidades = qs("#city");

        fetch("https://apis.datos.gob.ar/georef/api/provincias")
        .then((response) => response.json())
        .then((data) => {
            for (let index = 0; index < data.provincias.length; index++) {
                $selectProvincias.innerHTML += `<option value="${data.provincias[index].id}">${data.provincias[index].nombre}</option>`
            }
        })
        .catch((error) => console.log(error))
    
        $selectProvincias.addEventListener("change", (event) => {
            let idProvincia = event.target.value;
            $selectLocalidades.innerHTML = `<option value="" hidden selected>Localidades</option>`
    
            fetch(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${idProvincia}&campos=id,nombre&max=5000`)
            .then((response) => response.json())
            .then((data) => {
                data.localidades.forEach(localidad => {
                    $selectLocalidades.innerHTML += `<option value="${localidad.id}">${localidad.nombre}</option>`
                });
            })
            .catch((error) => console.log(error))
    
        })
   
    $inputName.addEventListener("blur", () => {
        switch (true) {
            case !$inputName.value.trim():
                $nameErrors.innerHTML = "Por favor ingrese su nombre";
                $inputName.classList.add("is-invalid");
                break;
            case !regExAlpha.test($inputName.value):
                $nameErrors.innerHTML = "Nombre inválido";
                $inputName.classList.add("is-invalid");
                break;
            default: 
                $inputName.classList.remove("is-invalid");
                $inputName.classList.add("is-valid");
                $nameErrors.innerHTML = "";
                break;
        }
    })
               
   

})