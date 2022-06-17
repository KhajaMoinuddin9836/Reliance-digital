



let check = JSON.parse(localStorage.getItem("selected_product"))

let res = await fetch(`http://127.0.0.1:3000/api/products/${check}`);
let temp = await res.json();

var prodData={
    name:temp.name,
    image: temp.image,
    price:temp.price
}

document.getElementById("addtoCart").addEventListener("click", function() {
    console.log("Yes");
    
    localStorage.setItem("relianceCart",JSON.stringify(prodData));
    
    
  });


document.title = 'Buy'+" "+temp.name

//----------->



let scbrand = document.getElementById('brandNamesc')
scbrand.innerText = temp.brand
let scname = document.getElementById('deviceNamesc')
scname.innerText = temp.name

document.getElementById('myimage').src= temp.image

//k---------->
let name = document.getElementById('deviceName')
name.innerText = temp.name
let price = document.getElementById('mainPrice')
price.innerText = temp.price
let display = document.getElementById('display')
display.innerText = temp.display
let camera = document.getElementById('camera')
camera.innerText = temp.camera
let processor = document.getElementById('processor')
processor.innerText = temp.processor
let ossystem = document.getElementById('ossystem')
ossystem.innerText = temp.ossystem 

//----------->
let processors = document.getElementById('processors')
processors.innerText = temp.processor
let ossystems = document.getElementById('ossystems')
ossystems.innerText = temp.ossystem 
let cameras = document.getElementById('cameras')
cameras.innerText = temp.camera

//------------>
let color = document.getElementById('color')
color.innerText = temp.color
let brand = document.getElementById('brand')
brand.innerText = temp.brand
let memory = document.getElementById('memory')
memory.innerText = temp.memory
let processordet = document.getElementById('processordet')
processordet.innerText = temp.processor
let osdet = document.getElementById('osdet')
osdet.innerText = temp.ossystem 
let ram = document.getElementById('ram')
ram.innerText = temp.ram 


const allImage = document.querySelectorAll('.smallimgDiv div img')

const imgContain = document.querySelector('.deviceimage');

window.addEventListener('DOMContentLoaded', () => {
    allImage[0].parentElement.classList.add('active');
})

allImage.forEach((image) => {
    image.addEventListener('click', () =>{
        console.log(image.src)
        imgContain.querySelector('img').src = image.src;
    });
});


    

