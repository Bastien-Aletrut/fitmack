var element = document.getElementById("menu3");
var element2 = document.getElementById("menu4");

function menuclick(){
    console.log(element)
    if(element.classList.contains('active')){
        element.classList.remove('active')
        element2.classList.remove('active')
    }else{
        element.classList.add('active')
        element2.classList.add('active')
    }
}

