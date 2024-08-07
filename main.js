// Amount of products

let minus = document.querySelector('#minus')
let plusBtn = document.querySelector('#plus')
let NumberProducts = document.querySelector('#NumberOfProducts')

let CartProducts = document.querySelector('#AddToCart')

let InputNumber = 0;



plusBtn.addEventListener('click', () => {
    InputNumber++;
    if (InputNumber >= 5){
        InputNumber = 5;
    }
    NumberProducts.value = InputNumber;
    console.log(InputNumber);
})

minus.addEventListener('click', () => {
    InputNumber --;
    if (InputNumber <= 0){
        InputNumber = 0;
    }
    NumberProducts.value = InputNumber
    console.log(InputNumber)

})

// Add the amount of products

let MyProducts = document.querySelector('#shoes')

CartProducts.addEventListener('click', () => {
    MyProducts.value = CartProducts.value;
    console.log(MyProducts.value)
})



