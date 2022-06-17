
function headerFunctionality(){
    
document.querySelector("#popupdiv").addEventListener("mouseover",()=>{
    document.querySelector("#popupdiv").style.display = "block"
})


function div(id,popwinid){
    
    document.getElementById(id).addEventListener("mouseover",()=>{
        let tg = document.getElementsByClassName("toggledisp");
        for(let i =0; i<tg.length; i++){
            tg[i].style.display = "none";
            console.log(`display none`)
        }
        document.querySelector("#popupdiv").style.display = "block"
        document.getElementById(popwinid).style.display = "block"
    })
}
div("mt","toggle1")
div("ta","toggle2")
div("ha","toggle3")
div("co","toggle4")
div("ca","toggle5")
div("ka","toggle6")
div("pc","toggle7")
div("ac","toggle8")

//Closing pop up div
document.querySelector("#popupdiv").addEventListener("mouseleave",()=>{
    document.querySelector("#popupdiv").style.display = "none"
    let tg = document.getElementsByClassName("toggledisp");
    for(let i =0; i<tg.length; i++){
        tg[i].style.display = "none";
    }
})



document.querySelector("#searchbtn").addEventListener("click",()=>{
    let terms = ["phone","smartphone","mobile","vivo","oppo","iphone","samsung","realme","redmi","apple","oneplus"]
    let searched_term = document.querySelector("#q").value;
    searched_term = searched_term.toLowerCase()
    let term_found = false;
    for(let i =0; i<terms.length;i++){
        if(searched_term===terms[i]){
            term_found = true;
            
        }
    }
    if(term_found === false){
        alert(" Only Mobile Products Available")
    }
})
}

export default headerFunctionality

