
let num = document.querySelectorAll('.bookmaker__number');
let rev = document.querySelectorAll('.bookmaker__review');
let bookmakers = document.querySelectorAll('.bookmakers__item');

function rand(min, max){
    return Math.floor(Math.random()*(max - min))
}

rev.forEach(item => {
    item.querySelector('span').innerHTML = `(${rand(1,99)})`
})


num.forEach((item, index) => {
    if(item < 10){
        item.textContent = "0" + index + 1;
    }else{
        item.textContent = index + 1;
    }
})

bookmakers.forEach((item) => {
    item.addEventListener('mouseover', e => {
        let stars = item.querySelectorAll('.rating__item');
        stars.forEach((element, index) => {
            element.addEventListener('mouseover', e => {
                for(let i = 0; i < stars.length; i++){
                    stars[i].classList.remove('active-star');
                }
                let indexEl = index;
                for (let j = 0; j <= indexEl; j++){
                    stars[j].classList.add('active-star');
                }
            })
        })
    })
})
