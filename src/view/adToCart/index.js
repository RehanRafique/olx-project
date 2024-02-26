import { useState } from "react";
import rootReducer from "../../store/rootReducer";


function AdToCart() {

    //     const [cart,useCart]= useState()
    //    cart = localStorage.getItem("cartReducer")
    const x = JSON.parse(localStorage.getItem('cartReducer'))
    console.log("x", x)
    // console.log("cart", useCart)
    return (<div>
        {/* {cart} */}

    </div>)
}

export default AdToCart;