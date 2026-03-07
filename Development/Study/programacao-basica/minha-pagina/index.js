let button = document.getElementById('button')
let classes = document.getElementsByClassName('red')
//let text = document.getElementById('text-green')

button.addEventListener('click', function(){
    for(let i=0;i<classes.length;i++){
        if(classes[i].tagName === 'H3'){
            classes[i].textContent = "Mudei, sou H3"
        }else if(classes[i].tagName === 'H6'){
            classes[i].textContent = "Mudei, sou H6"
            classes[i].style.color = "purple"
        }else{
            classes[i].textContent = "Mudei"
        }
    }
    //text.textContent = "Texto mudado pelo butão!"

})