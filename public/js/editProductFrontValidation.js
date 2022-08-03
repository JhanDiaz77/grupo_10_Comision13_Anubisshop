function qs(element) {
    return document.querySelector(element)
}

window.addEventListener("load", () => {
    let $name = qs("#name_"),
        $categoria = qs("#categoria_"),
        $promo = qs("#promo_"),
        $image = qs("#image_"),
        $precio = qs("#precio_"),
        $discount = qs("#discount_"),
        $description = qs("#descriptionn"),
        
        $forms= qs("#editProduct-form"),
        $submit_Error = qs ("#submit_Error")

        $nameProduct_Error = qs("#nameProduct_Error"),
        $category_Error = qs("#category_Error"),
        $image_Error = qs("#image_Error"),
        $price_Error = qs("#price_Error"),
        $discount_Error = qs("#discount_Error"),
        $promo_Error = qs("#promo_Error"),
        $description_Error = qs("#description_Error"),
        regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/


        $name.addEventListener("blur", ()=>{
        
            switch (true) {
                case !$name.value.trim(): /* evalua si el campo esta vacio */
                    $nameProduct_Error.innerHTML = "El campo es requerido";
                    $name.classList.add("is-invalid");/* agregarle estilos a esto */
                    break;
                case !regExAlpha.test($name.value):
                    $nameProduct_Error.innerHTML = "Nombre invalido";
                    $inputName.classList.add("is-invalid");
                    break;
                default: 
                    $name.classList.remove("is-invalid")
                    $name.classList.add("is-valid")
                    $nameProduct_Error.innerHTML = ""
            }
    
        })

        $categoria.addEventListener("blur", ()=>{

            switch (true) {
                case $categoria.value == "Seleccionar categoria":
                     $category_Error.innerHTML = "Debe seleccionar una categoria";
                    
                    break;
            
                default:
                    $categoria.classList.remove("is-invalid")
                    $categoria.classList.add("is-valid")
                    $category_Error.innerHTML = "";
                    break;
            }
            
            /* $category_Error.style.color = "ForestGreen" */
        })

        $precio.addEventListener("blur", ()=>{

            switch (true) {
                
                case $precio.value == "":
                    $price_Error.innerHTML= "Este campo es requerido"
                    break;
            
                case $precio.value < 1:
                    $price_Error.innerHTML= "Debe ser un valor mayor a 1"
                    $precio.classList.add("is-invalid")
                    break;
            
                default:
                    $precio.classList.remove("is-invalid")
                    $precio.classList.add("is-valid")
                    $price_Error.innerHTML = ""
                    break;
            }
    
        })

        $discount.addEventListener("blur", ()=>{
      
            switch (true) {
    
                case $discount.value == "":
                    $discount_Error.innerHTML= ""
                    break;
            
    
                case $discount.value < 1:
                    $discount_Error.innerHTML= "Debe ser un valor mayor a 1"
                    $discount.classList.add("is-invalid")
                    break;

                case $discount.value >= 100:
                    $discountError.innerHTML= "Debe ser un valor menor a 100"
                    $discount.classList.add("is-invalid")
                break;
            
                default:
                    $discount_Error.innerHTML = ""
                    break;
            }
        })

        $promo.addEventListener("blur", ()=>{
    
            switch (true) { /* este no se si es tan necesario */
                case $promo.value == "Ninguno":
                    $promo_Error.innerHTML= ""
                    break;
                case $promo.value == "Oferta" || $promo.value == "Destacado":
                    $promo_Error.innerHTML= ""
            
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
                $description.classList.remove("is-invalid")
                $description.classList.add("is-valid")
                $descriptionError.innerHTML = ""
                break;
            }
        })

        $forms.addEventListener("submit", function(event) {

            event.preventDefault()
            let elements_Form = this.elements;
            let errors = false;
        
            for (let index = 0; index < elements_Form.length - 2; index++) {
                if(elements_Form[index].value == ""
                && elements_Form[index].name !== "promo"
                && elementsForm[index].type !== "file"
                && elements_Form[index].type !== "number"
                || elements_Form[index].classList.contains("is-invalid")){
                    elements_Form[index].classList.add("is-invalid");
                    $submit_Error.innerHTML = "Hay errores en el formulario"
                    errors = true;
                }
            }
    
            if(!errors){
                alert("Creaste un nuevo producto!")
                $forms.submit()
            }
        })

   
             
   

})