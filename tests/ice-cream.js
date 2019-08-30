function IceCream() {

    var conePrice = 0;
    var flavPrice = 0;
    var topperPrice = 0;
   

    function cone(cupPrice) {


        if (cupPrice === "Plain Cone") {
            conePrice += 2.00;
        }

        else if (cupPrice === "Sugar Cone") {
            conePrice += 3.00;
        }
        else if (cupPrice === "Paper cup") {
            conePrice += 5.00;
        }
       console.log(conePrice)
         return "R" + conePrice.toFixed(2);
    }
    
    function getTotal(){
        return  conePrice  + flavPrice + topperPrice
    }


    function flavours(flavourPrice) {

        if (flavourPrice === "Vanilla") {
            flavPrice += 10.00;
        }
        else if (flavourPrice === "Chocolate") {
            flavPrice += 12.00;
        }
        else if (flavourPrice === "Strawberry") {
            flavPrice += 12.00;
        }

        console.log(flavPrice)
         return "R" + flavPrice.toFixed(2);
    }
    

    function topping(topPrice) {

   
        if (topPrice === "dipp") {
            topperPrice += 5.00;
        }
    
    console.log(topperPrice)
        return "R" + topperPrice.toFixed(2);
    }




    return {
        cone,
        flavours,
        topping,
        getTotal
        


    }
}
