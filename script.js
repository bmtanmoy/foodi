let styelcss = document.getElementById("styelcss")
let darkmode = document.getElementById("darkmode")


darkmode.addEventListener("click", function(){
    if(styelcss.getAttribute("href") == "./css/styel.css"){
        styelcss.setAttribute("href", "./css/dark.css")
    }else{
        styelcss.setAttribute("href", "./css/styel.css")
    }
})