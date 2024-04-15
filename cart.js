// import products from "./products.js";

// const cart = () => {
// let iconCart = document.querySelector('.icon-cart');
// let body = document.querySelector('body');
// let closeCart = document.querySelector('.cartTab .close');
// let shoppingCart= [];

// // open and close tab
// iconCart.addEventListener('click', () => {
//     body.classList.toggle('activeTabCart');
// })
// closeCart.addEventListener('click', () => {
//     body.classList.toggle('activeTabCart');
// })

// const setProductInCart= (idProduct, quantity, position) =>{
//     if(quantity > 0){
//         if(position < 0){ //product doesn't exist in the shopping cart
//             shoppingCart.push({
//                 product_id: idProduct,
//                 quantity: quantity
//             });
//         }else{
//             shoppingCart[position].quantity=quantity;
//         }
//     }else{
//         shoppingCart.splice(position, 1);
//     }
//     localStorage.setItem('cart', JSON.stringify(shoppingCart));
// refreshCartHTML();
// }

// const refreshCartHTML = () =>{
//     let listHTML = document.querySelector('.listCart'); // to display the list
//     let totalHTML = document.querySelector('.icon-cart span'); // number of products in the list
//     let totalQuantity = 0; // initially totalQuantity is 0
//     listHTML.innerHTML = null;
//     shoppingCart.forEach(item =>{
//         totalQuantity = totalQuantity+ item.quantity;
//         let position= products.findIndex((value) => value.id == item.product_id); // find location of item in the products table 
//         let info = products[position];
//         let newItem = document.createElement('div');
//         newItem.classList.add('item');
//         newItem.innerHTML= 
//         `
//         <div class="image">
//         <img src="${info.image}"/>
//         </div>
//         <div class="name" >Name</div>
//         <div class="totalPrice">$${info.price * item.quantity}</div>
//         <div class="quantity">
//         <span class="minus" data-id="${info.id}">-</span>
//         <span>${item.quantity}</span>
//         <span class="plus" data-id="${info.id}">+</span>
//         </div>


//         `;

//         listHTML.appendChild(newItem);
//     })
//     totalHTML.innerText = totalQuantity;
// }

// // event click
// document.addEventListener('click', (event)=>{
//     let buttonClick = event.target; // this stores the element that was clicked
//     let idProduct = buttonClick.dataset.id;
//     let position = shoppingCart.findIndex((value)=>{
//        return value.product_id == idProduct;
//     })
//     let quantity = position < 0 ? 0 : shoppingCart[position].quantity;
//     if(buttonClick.classList.contains('addCart') || buttonClick.classList.contains('plus')){
//         quantity++;
//         setProductInCart(idProduct, quantity, position);
//     }else if(buttonClick.classList.contains('minus')){
//         quantity--;
//         setProductInCart(idProduct, quantity, position);
//     }
// })
// const initApp = () =>{
//     if(localStorage.getItem('cart')){
//         shoppingCart = JSON.parse(localStorage.getItem('cart'));
//     }
//     refreshCartHTML();
// }
// initApp();


// // ------



// }
// printAddCartItems();
// export default cart;



import products from "./products.js";


// ------

// ------


const cart = () => {
let iconCart = document.querySelector('.icon-cart');
let body = document.querySelector('body');
let closeCart = document.querySelector('.cartTab .close');
let shoppingCart= [];

// open and close tab
iconCart.addEventListener('click', () => {
    body.classList.toggle('activeTabCart');
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('activeTabCart');
})

const setProductInCart= (idProduct, quantity, position) =>{
    if(quantity > 0){
        if(position < 0){ //product doesn't exist in the shopping cart
            shoppingCart.push({
                product_id: idProduct,
                quantity: quantity
            });
        }else{
            shoppingCart[position].quantity=quantity;
        }
    }else{
        shoppingCart.splice(position, 1);
    }
    localStorage.setItem('cart', JSON.stringify(shoppingCart));
refreshCartHTML();
}

const refreshCartHTML = () =>{
    let listHTML = document.querySelector('.listCart'); // to display the list
    let totalHTML = document.querySelector('.icon-cart span'); // number of products in the list
    let totalQuantity = 0; // initially totalQuantity is 0
    listHTML.innerHTML = null;
    shoppingCart.forEach(item =>{
        totalQuantity = totalQuantity+ item.quantity;
        let position= products.findIndex((value) => value.id == item.product_id); // find location of item in the products table 
        let info = products[position];
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML= 
        `
        <div class="image">
        <img src="${info.image}"/>
        </div>
        <div class="name" >Name</div>
        <div class="totalPrice">$${info.price * item.quantity}</div>
        <div class="quantity">
        <span class="minus" data-id="${info.id}">-</span>
        <span>${item.quantity}</span>
        <span class="plus" data-id="${info.id}">+</span>
        </div>


        `;

        listHTML.appendChild(newItem);
    })
    totalHTML.innerText = totalQuantity;
}

// event click
document.addEventListener('click', (event)=>{
    let buttonClick = event.target; // this stores the element that was clicked
    let idProduct = buttonClick.dataset.id;
    let position = shoppingCart.findIndex((value)=>{
       return value.product_id == idProduct;
    })
    let quantity = position < 0 ? 0 : shoppingCart[position].quantity;
    if(buttonClick.classList.contains('addCart') || buttonClick.classList.contains('plus')){
        quantity++;
        setProductInCart(idProduct, quantity, position);
    }else if(buttonClick.classList.contains('minus')){
        quantity--;
        setProductInCart(idProduct, quantity, position);
    }
})
const initApp = () =>{
    if(localStorage.getItem('cart')){
        shoppingCart = JSON.parse(localStorage.getItem('cart'));
    }
    refreshCartHTML();
}
initApp();


// ------



}
export default cart;