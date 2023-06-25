'use strict'
window.addEventListener("load",()=>{
    var comprar = document.getElementById("comprar");
    comprar.addEventListener("click",()=>{
        var area = document.getElementById("area");
        alert("gracis por su compra " + area.value)
    })
});

