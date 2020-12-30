const MY_COLOR_CHECKED = 'my-color-checked'
let selectedItemIndex = null

class Color{
    id;
    name;
    hex;
    price;
    inCart;
    count;
    constructor(id, name, hex){
        this.id = id;
        this.name = name;
        this.hex = hex;
        this.inCart = false;
        this.price = 1;
        this.count = 0;
    }

    check = () => {
        document.getElementById(this.id).classList.add(MY_COLOR_CHECKED)
    }

    uncheck = () => {
        document.getElementById(this.id).classList.remove(MY_COLOR_CHECKED)
    }
}

let item = {
    name: 'HICKIES Originals',
    rating: 5,
    reviews: 1293,
    sellingPrice: 17.99,
    discuntPercentage: 25,
    colorIndex: null,
    count: 0,
    cart: []
}

// initialize a array of colors to use on the website
let colors = [
    new Color(0, 'Sun Burst Orange', '#f5841a'),
    new Color(1, 'Midnight Blue', '#2717b1'),
    new Color(2, 'Sun tan', '#c26129'),
    new Color(3, 'Highlight Yellow', '#d0ff00'),
    new Color(4, 'Soft Green', '#42df90'),
    new Color(5, 'Bubble Gum Purple', '#c92f9a'),
    new Color(6, 'Holo Red', '#ff0000'),
    new Color(7, 'Mint Green', '#0db315'),
    new Color(8, 'Ashe Gray', '#a3a2a2'),
    new Color(9, 'Neon Green', '#2df72d'),
    new Color(10, 'Mat Purple', '#7076c9'),
    new Color(11, 'Holo Blue', '#00a2ff'),
    new Color(12, 'Solid Black', '#000000'),
    new Color(13, 'Sky Blue', '#73ecfc'),
    new Color(14, 'Dawn Sun Orange', '#ffa600'),
    new Color(15, 'Sherbet Purple', '#b69eee'),
    new Color(16, 'Mustard Yellow', '#ffd900'),
    new Color(17, 'Olive Red', '#c92843'),
]



// ----------------Worker methods--------------------
let updateUi = () => {
    document.getElementById('color').innerHTML = colors[selectedItemIndex].name

    document.getElementById('count').innerHTML = countEach(item.cart)
    document.getElementById('price').innerHTML = getPrice(item.sellingPrice, item.cart).toFixed(2)

    let sellingPrice = getPrice(item.sellingPrice, item.cart) * (100 - item.discuntPercentage) / 100
    document.getElementById('discounted-price').innerHTML = sellingPrice.toFixed(2)

    if (selectedItemIndex && colors[selectedItemIndex].inCart){
        document.getElementById('btn-add-cart').hidden = true
        document.getElementById('btn-checkout').hidden = false
    } else {
        document.getElementById('btn-add-cart').hidden = false
        document.getElementById('btn-checkout').hidden = true
    }
}

let format = (s) => {
    //  adopted from Elias Zamaria,
    // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
    return s.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

let toggleAgreeButton = () => {
    let btn = document.getElementById('btn-agree')
    if (selectedItemIndex && colors[selectedItemIndex].count > 0){
        btn.disabled = false
    } else btn.disabled = true
}

let addDetails = () => {
    let detailsColorContainer = document.getElementById('details-color-container')
    for (let i = 0; i < colors[selectedItemIndex].count; i++){
        let child = `<div class="my-color" style="background-color: ${colors[selectedItemIndex].hex}"></div>`
        detailsColorContainer.innerHTML += child
    }
}

let countEach = (arr) => {
    let count = 0
    
    if (!arr || arr.length < 1) return count
    
    arr.forEach(element => {
       count += element.count 
    })

    return count
}

let getPrice = (base, arr) => {
    let sum = base
    arr.forEach(element => {
        sum += element.price * element.count
    })

    return sum
}



// -------------Render Methods------------------
// add each color to the html parent div
let colorContainer = document.getElementById('color-container')
colors.forEach((element, i, arr) => {
    let child = `<div id="${element.id}"class="my-color" style="background-color: ${element.hex}" onclick="onColorClick(${i})"></div>`
    colorContainer.innerHTML += child
});

// add item rating
let ratingContainer = document.getElementById('rating-container')
for (let i = 0; i < item.rating; i++){
    ratingContainer.innerHTML += `<svg class="rating-icon"xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg>`
}

// add item name
let nameHolder = document.getElementById('item-name')
nameHolder.innerHTML = item.name

// add item original price
let priceHolder = document.getElementById('price')
priceHolder.innerHTML = item.sellingPrice

// add discount percentage
let discountPrecentageHolder = document.getElementById('discount')
discountPrecentageHolder.innerHTML = item.discuntPercentage

// add selling price
let sellingPriceHolder = document.getElementById('discounted-price')
let sellingPrice = item.sellingPrice * (100 - item.discuntPercentage) / 100
sellingPriceHolder.innerHTML = sellingPrice.toFixed(2)

// add reviews
let reviewsHolder = document.getElementById('reviews')
reviewsHolder.innerHTML = format(item.reviews)

// add items count in cart
let countHolder = document.getElementById('count')
countHolder.innerHTML = item.cart.length

// add count to modal 
let modalCountHolder = document.getElementById('modal-count')
modalCountHolder.innerHTML = item.count



// ---------------On Click Listeners-----------------
let onColorClick = (index) => {
    if (selectedItemIndex != null) colors[selectedItemIndex].uncheck()
    
    colors[index].check()
    selectedItemIndex = index
    updateUi()
}

let onAddToCart = () => {
    countHolder.innerHTML = item.count
    colors[selectedItemIndex].inCart = true

    item.cart.push(colors[selectedItemIndex])

    addDetails()
    updateUi()
}

let onAddItemCount = () => {
    colors[selectedItemIndex].count++
    modalCountHolder.innerHTML = colors[selectedItemIndex].count
    toggleAgreeButton()
}

let onRemoveItemCount = () => {
    if (colors[selectedItemIndex].count > 0){
        colors[selectedItemIndex].count--
        modalCountHolder.innerHTML = colors[selectedItemIndex].count
        toggleAgreeButton()
    }
}

document.getElementById('quantityModal').addEventListener('shown.bs.modal', () => {
    colors[selectedItemIndex].count = 0

    document.getElementById('modal-item-name').innerHTML = colors[selectedItemIndex].name
    document.getElementById('modal-count').innerHTML = colors[selectedItemIndex].count
    document.getElementById('btn-agree').disabled = true
})

let reload = () => {
    document.location.reload()
}

document.getElementById('checkoutModal').addEventListener('shown.bs.modal', () => {
    let tableBody = document.getElementById('checkout-table-body')
    tableBody.innerHTML = ''

    item.cart.forEach(color => {
        tableBody.innerHTML += `<tr>
        <td class="gap-2 d-md-flex justify-content-md-start my-min-container">
            <div class="my-color" style="background-color: ${color.hex}"></div>
            <p class="fw-normal my-table-p">${color.name}</p>
        </td>
        <td>${color.count}</td>
        <td>$${(color.price * color.count).toFixed(2)}</td>
      </tr>`
    });

    tableBody.innerHTML += `<tr>
    <td></td>
    <th scope="row">Total</th>
    <td>$${(getPrice(item.sellingPrice, item.cart) - item.sellingPrice ).toFixed(2)}</td>
  </tr>`

    tableBody.innerHTML += `<tr>
    <td></td>
    <th scope="row">Base Price</th>
    <td>$${item.sellingPrice.toFixed(2)}</td>
  </tr>`

  tableBody.innerHTML += `<tr>
    <td></td>
    <th scope="row">Discount</th>
    <td>- $${(getPrice(item.sellingPrice, item.cart) * item.discuntPercentage / 100).toFixed(2)}</td>
  </tr>`

  tableBody.innerHTML += `<tr>
    <td></td>
    <th scope="row">Grand Total</th>
    <td>$${(getPrice(item.sellingPrice, item.cart) * (100 - item.discuntPercentage) / 100 ).toFixed(2)}</td>
  </tr>`
})