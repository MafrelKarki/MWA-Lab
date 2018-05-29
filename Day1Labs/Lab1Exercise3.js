const item = {
    "name" : "Biscuits",
    "type" : "regular",
    "category" : "food",
    "price" : 2.0
}


var applyCoupon = name=>discount=>item=>{ 
    return item.price*(1-discount);
}

var price = applyCoupon("food")(0.2)(item);