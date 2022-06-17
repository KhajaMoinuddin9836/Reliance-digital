let div2image = ["https://www.reliancedigital.in/medias/Samsung-Days-Carousel-Banner-08-06-2022.jpg?context=bWFzdGVyfGltYWdlc3w3NTYyNXxpbWFnZS9qcGVnfGltYWdlcy9oZjYvaDI4Lzk4NDUwMjQ2MjA1NzQuanBnfDAwOGNkZjFhNDg2ZDJmYTZhNDI4ZWI4YThhYjk5NGU3NWNjNDRmNDQ1ZWEwOTZmODA0NTUzMWRjOTBlYTBmN2E",
"https://www.reliancedigital.in/medias/Citi-Bank-Offer-Carousel-Banner-15-06-2022.jpg?context=bWFzdGVyfGltYWdlc3w3ODYzNnxpbWFnZS9qcGVnfGltYWdlcy9oY2MvaDRlLzk4NDU2NTI4ODE0MzguanBnfGM4M2EwOTJkNDFhMThmZjdmNGIyMzM0YTgyNzM5MWIwMzFiMmM4OWY1ODM1M2RlNjBhNWQ0NjM4ZTQzNTVkZWM",
"https://www.reliancedigital.in/medias/Zest-10-Cashback-CLP-Banner-Desktop.jpg?context=bWFzdGVyfGltYWdlc3wxMDAyNjh8aW1hZ2UvanBlZ3xpbWFnZXMvaGU3L2g3YS85ODQ0NjY0MTA3MDM4LmpwZ3wzZGVkMGQ4ZmU5ZjI0ZTlmYTJhNDk1OGYyYzczZGZiZWVmN2YyOTIzYzVkYzdlNDYzMjdkOGE5YmFkMmQxMDAx",
"https://www.reliancedigital.in/medias/OnePlus-Smart-Led-TVs-Desktop-31.05.jpg?context=bWFzdGVyfGltYWdlc3wxNDYyNTF8aW1hZ2UvanBlZ3xpbWFnZXMvaGQ1L2g1My85ODQyMjIxNjEzMDg2LmpwZ3w0MDY1NDUyMzMzYzYwM2JkYjhlNWE2NjU1ZjFjYmRjNTE3MzEzZTY4MjIyMzAwZGQ0YzI1NWVhZWFmZjg3ZTdi",
"https://www.reliancedigital.in/medias/Father-s-day-Desktop.jpg?context=bWFzdGVyfGltYWdlc3w5NzQwM3xpbWFnZS9qcGVnfGltYWdlcy9oZDUvaDg2Lzk4NDQ4NjQ5NDIxMTAuanBnfDY4NDYxMzRjNGU0NWM0ZDdiZjNiMjE3MzhlMzRmN2E5OTQ5Yzc5ZWI5MDJmYzk1NDdkNjMxNGU4NTlkOTgyMTM",
"https://www.reliancedigital.in/medias/DIS-SDA-Carousel-Banner-12-01-2022-D.jpg?context=bWFzdGVyfGltYWdlc3wxNDg4Nzh8aW1hZ2UvanBlZ3xpbWFnZXMvaDgwL2gwZC85NzU2ODg3Mzg0MDk0LmpwZ3xiZTllZGFiYjYyODUwMzU5NmEzZmZiNDQ1NzY2ZTVmY2Y5NTM4YWVhNWE4MDRlNzhhZWNiMDI2Njk1ZGRiODli",
"https://www.reliancedigital.in/medias/Air-Conditioners-Double-Price-Desktop-03.06.jpg?context=bWFzdGVyfGltYWdlc3wxNjEzNDd8aW1hZ2UvanBlZ3xpbWFnZXMvaDJkL2hiMS85ODQzMzczMTQ2MTQyLmpwZ3xhZWIxYmFiZGVkZDdiOGY5NDhkYmQyYTUwNjhkOWJmMzBmYzA3YjA3NDRkYzczMjdkMzVlZGRmMTNhY2FhOTY1",
"vhttps://www.reliancedigital.in/medias/OnePlus-Smart-Led-TVs-Desktop-31.05.jpg?context=bWFzdGVyfGltYWdlc3wxNDYyNTF8aW1hZ2UvanBlZ3xpbWFnZXMvaGQ1L2g1My85ODQyMjIxNjEzMDg2LmpwZ3w0MDY1NDUyMzMzYzYwM2JkYjhlNWE2NjU1ZjFjYmRjNTE3MzEzZTY4MjIyMzAwZGQ0YzI1NWVhZWFmZjg3ZTdi",
"https://www.reliancedigital.in/medias/Accessories-Fiesta-Carousel-Banner-15-06-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDM0MTF8aW1hZ2UvanBlZ3xpbWFnZXMvaGFkL2hiYS85ODQ1MDI0NzUxNjQ2LmpwZ3xmYWM5NmVhMmVkNmM1OGE5NzRmMzZhNWU1NWEzMTIwNTBjZWEwMDhiZjVmZjAzYWM3MTkyYjMzOTAwMDIwMGQ3"];

let div2img = document.getElementById("div2img");
div2img.src = div2image[0];
let div2i = 1;
setInterval(function(){
    if(div2i == div2image.length){
        div2i = 0;
    }
    div2img.src = div2image[div2i];
    div2i++;
},1000);

let div7image = ["https://www.reliancedigital.in/medias/iPhone-13-NPI-Banner-03-01-2022.jpg?context=bWFzdGVyfGltYWdlc3w1NjAyNXxpbWFnZS9qcGVnfGltYWdlcy9oMGYvaDBhLzk3NDkxNjIzMjgwOTQuanBnfGFjOGY2NTRmY2Y1Y2RkZTJhNTM2YThjZmU1ZTdmODhiYzIzNjBkY2I0ZGI0OTUxZDY3ZDk4ZjQ5NzQwOGVmNzk",
"https://www.reliancedigital.in/medias/Apple-Watch-Series-7-D-NPI.jpg?context=bWFzdGVyfGltYWdlc3wxMDc1MDV8aW1hZ2UvanBlZ3xpbWFnZXMvaDJkL2hkNS85NzUwMzAzMDE0OTQyLmpwZ3xiZjIxZDMxYTY0NDE3YTYxYmYxYTlmMDQ1NjkzNDI1YmVlNzFmNzVjMjY1M2M5ZDA1Mjk3YTRiNDM4ZmFmMWNi",
"https://www.reliancedigital.in/medias/AirPods-D-NPI.jpg?context=bWFzdGVyfGltYWdlc3wxMDQ1NTl8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2hkNi85NzUwMzI3MDk5NDIyLmpwZ3w0ZGVmNzAyZWJiN2Y5M2ExNGE4OTNjODJmZDdiNWI4MjdhMzgwYWE1NDFhNWUyMWRjZjhiMTkzYTlkMmNjNGFh",
"https://www.reliancedigital.in/medias/HomePod-D-NPI.jpg?context=bWFzdGVyfGltYWdlc3wxMzkxODR8aW1hZ2UvanBlZ3xpbWFnZXMvaDkyL2g3ZS85NzUwMzI3MjMwNDk0LmpwZ3xlMDU3MGUxMzNmZjMyYTM2MDc2ZTYxOGNmYWYyNTM4ZTc3ZTBlMWQ2ZDY0MDc4OWQ1MTlmNTY1N2M3ZGU2N2Y5",
"https://www.reliancedigital.in/medias/MacBook-Pro-D-NPI.jpg?context=bWFzdGVyfGltYWdlc3wxMTEzNjF8aW1hZ2UvanBlZ3xpbWFnZXMvaDgzL2hkMS85NzUxNjgwNTgxNjYyLmpwZ3xiOTRjYzIzMTU4MmFjZDJmZjcwMjdkNGJjNGQwOThiOGM4NWFjZThmNmQ1MjZlMjcxMDc2YWFkMThiOGFkMWJj",
"https://www.reliancedigital.in/medias/2-ONIDA-FIRE-TV-Banner-Desktop-NPI.jpg?context=bWFzdGVyfGltYWdlc3wxNTEyMjh8aW1hZ2UvanBlZ3xpbWFnZXMvaDkzL2g3NC85NzU1MzcwMDYxODU0LmpwZ3w0YzY2OTI5ZjEyNzgyOGY2MmJjMTg1ZTFmNTBiZjJmMTlkZDE2MWY0ODRhYzU4M2U1YWIwNjFjNzI5ZDE4MDQ3",
"https://www.reliancedigital.in/medias/Tab-Yoga11-NPI-Banner-13-01-2022.jpg?context=bWFzdGVyfGltYWdlc3wxNDkwMjN8aW1hZ2UvanBlZ3xpbWFnZXMvaDgxL2hmYS85NzU2MDU5MzY5NTAyLmpwZ3wyMjM4ZWRkMzc3Mzk2MjYzNmU4NzJkZTEzNGM3MWIyYjZlOWM3MmEzYjI2NTQ5OWYyMTlkZWIyZGE3NzQxMWIy",
"https://www.reliancedigital.in/medias/Vivo-V23-Pro-5G-NPI-Banner-11-01-2022.jpg?context=bWFzdGVyfGltYWdlc3w2ODAwN3xpbWFnZS9qcGVnfGltYWdlcy9oZjkvaDhiLzk3NTU0NDUyMzE2NDYuanBnfGQ3Mzg3ZGVkMDIxNDdmOWJiZTQzZjdhZmI5YTViMDNmMmFkY2MxY2IxOGJhM2RiM2EzOWZlYzM2NmNlNzQzMzc",
"https://www.reliancedigital.in/medias/Samsung-Galaxy-Tab-A8-Desktop.jpg-NPI.jpg?context=bWFzdGVyfGltYWdlc3wxMzE4NTZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDQwL2hiZi85NzU3MTQ5MjMzMTgyLmpwZ3wwY2IyZDNjNTRiZGJjOThhNDIyN2NhMGZhMzZmZTkwMGMyMWZiMzYxNTczNWRmM2FjYjFjYThlZDE0ODhkMDlk"];


let div7img = document.getElementById("div7img");
div7img.src = div7image[0];
let div7i = 1;
setInterval(function(){
    if(div7i == div2image.length){
        div7i = 0;
    }
    div7img.src = div7image[div7i];
    div7i++;
},1000);

