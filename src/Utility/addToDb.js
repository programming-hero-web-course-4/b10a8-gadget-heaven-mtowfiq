const getStoredWishlist = () =>{
    const storedWishlist = localStorage.getItem("wishlist")
    if(storedWishlist){
        const storedWishlistArr = JSON.parse(storedWishlist)
        return storedWishlistArr
    }
    else{
        return []
    }
}

const getStoredCart = () => {
    const storedCart = localStorage.getItem('cart')
    if(storedCart){
        const storedCartArr = JSON.parse(storedCart)
        return storedCartArr
    }
    else{
        return []
    }
}

const addToStoredCart = (id) =>{
    const storedCartArr = getStoredCart()
    if(storedCartArr.includes(id)){
        console.log(id, "already exists")
    }
    else{
        storedCartArr.push(id)
        const storedCartStr = JSON.stringify(storedCartArr)
        localStorage.setItem("cart", storedCartStr)
    }
}

const addToStoredWishlist = (id) =>{
    const storedWishlistArr = getStoredWishlist()
    if(storedWishlistArr.includes(id)){
        console.log(id, "Already exists")
    }
    else{
        storedWishlistArr.push(id)
        const storedWishlistStr = JSON.stringify(storedWishlistArr)
        localStorage.setItem("wishlist", storedWishlistStr)
    }
}

export {addToStoredWishlist, getStoredWishlist, getStoredCart, addToStoredCart}