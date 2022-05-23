var form = document.querySelector("form")
form.addEventListener("submit", myFunction);

function myFunction(data) {
    event.preventDefault();

    var data = {
        type: form.type.value,
        desc: form.desc.value,
        image: form.image.value,
        price: form.price.value,


    }
    var Products = JSON.parse(localStorage.getItem("Products")) || []
    Products.push(data)
    localStorage.setItem('Products', JSON.stringify(Products))
}