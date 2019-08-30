var containerType = document.querySelector(".containerTypeRadio");
var flavourType = document.querySelector(".flavourTypeRadio");
var topFlavour = document.querySelector(".topFlavour");
var priceButton = document.querySelector(".priceButton");
var totals = document.querySelector(".totals");
var iceCreamTemplate = document.querySelector(".ice-creamTemplate");

var iceInstances = IceCream();

priceButton.addEventListener("click", function () {

    let selectedValue = document.querySelector("input[name = containerType]:checked").value;
    iceInstances.cone(selectedValue)

   
    let selectedFavour = document.querySelector("input[name = flavourType]:checked").value;
    iceInstances.flavours(selectedFavour)
    
  
    let selectedTopping = document.querySelectorAll(".topFlavour:checked");
    // console.log(selectedTopping)
    selectedTopping.forEach(element => {
        console.log(element)
    });
    iceInstances.topping(selectedTopping)

    totals.innerHTML = "IceCream Price" + iceInstances.getTotal()

});