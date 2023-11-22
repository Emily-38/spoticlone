let menu = document.querySelector('.left-menu')
let btn = document.querySelector('.burger')
let main = document.querySelector('.catalog')
let leftbtn = document.querySelector('.left-burger')

btn.addEventListener('click', function () {
    /* sur la variable btn ecoute l'evenement click */ menu.classList.add(
        'left-menu-active'
    )
})

btn.addEventListener('click', function () {
    main.classList.add('catalog-active')
})

leftbtn.addEventListener('click', function () {
    main.classList.remove('catalog-active')
})
btn.addEventListener('click', function () {
    main.classList.add('catalog-active')
})

leftbtn.addEventListener('click', function () {
    menu.classList.remove('left-menu-active')
})
