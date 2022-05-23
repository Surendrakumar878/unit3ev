var Products = JSON.parse(localStorage.getItem("Products"))
displayData(Products);

function displayData(data) {
    data.forEach(function(elem, index) {
        var box = document.createElement("div");
        var img = document.createElement("img");
        img.src = elem.image
        var h = document.createElement("h3");
        h.innerHTML = elem.type;

        var p1 = document.createElement("p");
        p1.innerHTML = elem.desc;

        var p2 = document.createElement("p");
        p2.innerHTML = elem.price;



        var btn = document.createElement("button");
        btn.innerHTML = "remove ";
        btn.setAttribute("id", "remove_product");
        btn.addEventListener("click", function() {
            removeItem(elem, index);
        });

        box.append(img, h, p1, p2, btn);
        document.querySelector("#all_products").append(box);
    })
}

function removeItem(elem, index) {
    Products.splice(index, 1);
    localStorage.setItem('Products', JSON.stringify(Products))
    window.location.reload();
    var updatedData = JSON.parse(localStorage.getItem("Products"));
    displayData(updatedData);
}