function qs(element) {
    return document.querySelector(element)
}

window.addEventListener("load", () => {
    let $form = qs("#addProduct-form")
        $name = document.querySelector("#name"),
        $categoria = qs("#categoria"),
        $image = qs("#image"),
        $precio = qs("#precio"),
        $discount = qs("#discount"),
        $promo = qs("#promo"),
        $description = qs("#description"), 
        $nameProductError = qs("#nameProductError"),
        $categoryError = qs("#categoryError"),
        $imageError = qs("#imageError"),
        $priceError = qs("#priceError"),
        $discountError = qs("#discountError"),
        $promoError = qs("#promoError"),
        $descriptionError = qs("#descriptionError"),
        regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/
    

    
    
    $name.addEventListener("blur", ()=>{
        
        switch (true) {
            case !$name.value.trim(): /* evalua si el campo esta vacio */
                $nameProductError.innerHTML = "El campo es requerido";
                $name.classList.add("is-invalid");/* agregarle estilos a esto */
                break;
            case !regExAlpha.test($name.value):
                $nameProductError.innerHTML = "Nombre invalido";
                $inputName.classList.add("is-invalid");
                break;
            default: 
            
                $name.classList.remove("is-invalid")
                $nameProductError.innerHTML = ""
        }

    })

    

    $categoria.addEventListener("blur", ()=>{

        switch (true) {
            case $categoria.value == "Seleccione una categoria":
                 $categoria.classList.add("is-invalid");
                 $categoryError.innerHTML = "Debe seleccionar una categoria"
                break;
        
            default:
                $categoria.classList.remove("is-invalid");
                $categoryError.innerHTML = ""
                break;
        }
        
    })

    $image.addEventListener("blur", ()=>{




    })

    $precio.addEventListener("blur", ()=>{

        switch (true) {
            
            case $precio.value == "":
                $priceError.innerHTML= "Este campo es requerido"
                break;
        
            case $precio.value < 1:
                $priceError.innerHTML= "Debe ser un valor mayor a 1"
                $price.classList.add("is-invalid")
                break;
        
            default:
                $precio.classList.remove("is-invalid")
                $priceError.innerHTML = ""
                /* $precio.style.border = "1px solid ForestGreen" */
                break;
        }

    })

    $discount.addEventListener("blur", ()=>{
      
        switch (true) {

            case $discount.value == "":
                $discountError.innerHTML= ""
                break;
        

            case $discount.value < 1:
                $discountError.innerHTML= "Debe ser un valor mayor a 1"
                $discount.classList.add("is-invalid")
                break;
        
            default:
                $discountError.innerHTML = ""
                $discount.style.border = "1px solid ForestGreen"
                break;
        }
    })

    $promo.addEventListener("blur", ()=>{
    
        switch (true) {
            case $promo.value == "Ninguno":
                $promoError.innerHTML= ""
                
                break;
            case $promo.value == "Oferta" || $promo.value == "Destacado":
                $promoError.innerHTML= ""
        
            default:
                break;
        }
    })

    $description.addEventListener("blur", ()=>{

        switch (true) {
            case !$description.value.trim(): /* evalua si el campo esta vacio */
                $descriptionError.innerHTML = "El campo es requerido";
                $description.classList.add("is-invalid");/* agregarle estilos a esto */
                break;
            
            default: 
                $descriptionError.innerHTML = ""
                $description.classList.remove("is-invalid")
        }
    })

    $form.addEventListener("submit", function(event) {

        event.preventDefault()
        let elementsForm = this.elements;
        let errores = false;
    
        for (let index = 0; index < elementsForm.length - 1; index++) {
            if(elementsForm[index].value == ""
            && elementsForm[index].name !== "promo"
            && elementsForm[index].name !== "discount"
            || elementsForm[index].classList.contains("is-invalid")){
                elementsForm[index].classList.add("is-invalid");
                submitErrors.innerHTML = "Hay errores en el formulario"
                errores = true;
            }
        }

        if(!errores){
            alert("Creaste un nuevo producto!")
            $form.submit()
        }
    })
   

})