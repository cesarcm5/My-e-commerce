
let minus = document.querySelector('#minus')
let plusBtn = document.querySelector('#plus')
let NumberProducts = document.querySelector('#NumberOfProducts')

let CartProducts = document.querySelector('#Cart')

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


CartProducts.addEventListener('click', () => {
    CartProducts.value = NumberProducts.value
})



