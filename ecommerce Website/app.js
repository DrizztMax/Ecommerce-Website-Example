const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Custom Shirts",
        price: 40,
        colors: [
            {
                code: "white",
                img: "./img/shirt.jpg",
            },
            {
                code: "black",
                img: "./img/shirt2.jpg",
            },
        ],
    },
    {
        id: 2,
        title: "Custom Hats",
        price: 30,
        colors: [
            {
                code: "red",
                img: "./img/hat.jpg",
            },
            {
                code: "green",
                img: "./img/hat2.jpg",
            },
        ],
    },
    {
        id: 3,
        title: "Custom Mugs",
        price: 25,
        colors: [
            {
                code: "white",
                img: "./img/mug.jpg",
            },
            {
                code: "black",
                img: "./img/mug2.jpg",
            },
        ],
    },
    {
        id: 4,
        title: "Custom Mousepads",
        price: 70,
        colors: [
            {
                code: "white",
                img: "./img/mousepad.jpg",
            },
            {
                code: "black",
                img: "./img/mousepad2.jpg",
            },
        ],
    },
];

let chosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item,index)=>{
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the chosen product
        chosenProduct = products[index];

        //change texts of currentProduct
        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = "$" + chosenProduct.price;
        currentProductImg.src = chosenProduct.colors[0].img;

        //Passing new colours
        currentProductColors.forEach((color,index) => {
            color.style.backgroundColor = chosenProduct.colors[index].code;
        });
    });
});



currentProductColors.forEach((color,index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = chosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor= "white"
            size.style.color= "black"
        });
        size.style.backgroundColor= "black"
        size.style.color= "white"
    });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
});

close.addEventListener("click",()=>{
    payment.style.display="none"
});

