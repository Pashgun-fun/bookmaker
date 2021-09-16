let num = document.querySelectorAll('.bookmaker__number');
let rev = document.querySelectorAll('.bookmaker__review');
let bookmakerList = document.querySelector('.bookmakers__list');
let bookmakers = document.querySelectorAll('.bookmakers__item');
let marginBottom = parseInt(getComputedStyle(bookmakers[0], true).marginBottom);
let max = (bookmakers[0].offsetHeight + marginBottom) * 6;
let more = document.querySelector('.bookmakers__more');

function rand(min, max){
    return Math.floor(Math.random()*(max - min))
}

function hide(max) {
    if(bookmakerList.offsetHeight > max){
        bookmakerList.style.height = max + 'px';
        bookmakerList.style.overflow = 'hidden';
    }
}

hide(max)

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

more.addEventListener('click', e => {
    e.preventDefault();
    if (parseInt(getComputedStyle(bookmakerList, true).height) >= (bookmakers[0].offsetHeight + marginBottom) * bookmakers.length){
        bookmakerList.style.height = bookmakerList.offsetHeigth + 'px';
    }else {
        bookmakerList.style.height = parseInt(getComputedStyle(bookmakerList, true).height) + (max / 2) + 'px';
    }
})