let arr = document.querySelectorAll('.rating__item');

function removeClass(array){
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < arguments.length; j++){
            arr[i].classList.remove(arguments[j])
        }
    }
}

arr.forEach((item, index) => {
    item.addEventListener('mouseover', e => {
        for (let i = 0; i < arr.length; i++){
            arr[i].classList.remove('active-star');
        }
        let indexEl = index;
        for (let j = 0; j <= indexEl; j++){
            arr[j].classList.add('active-star');
        }
    })
})