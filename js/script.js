let swiper = new Swiper(".swiper-s1", {
    slidesPerView: 3,
    navigation: {
        nextEl: '.guy__right',
        prevEl: '.guy__left',
      },
      pagination: {
        el: '.swiper-pagination',
      },
    breakpoints: {
        992: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2
        },
        100: {
            slidesPerView: 1
        }
    }
})

let swiper2 = new Swiper(".swiper-s2", {
    slidesPerView: 4.3,
    navigation: {
        nextEl: '.guy__right_second',
      },
    breakpoints: {
        1200: {
            slidesPerView: 4.3,
        },
        992: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2
        },
        571: {
            slidesPerView: 1.8
        },
        100: {
            slidesPerView: 1.1
        }
    }
})


let type = document.querySelectorAll(".about__item_image")

type.forEach(function(e) {
    e.addEventListener("click", function(){
        let prev = e.previousElementSibling
        let test = prev.childNodes
        console.log(test)
        let content = test[3]
        console.log(content)
        if (content.style.maxHeight) {
            document.querySelectorAll(".about__item_text_descr").forEach(function(el){
                el.style.maxHeight = null
            })
        } else {
            document.querySelectorAll(".about__item_text_descr").forEach(function(el){
                el.style.maxHeight = null
            })
            content.style.maxHeight = content.scrollHeight + 'px'
    }
})
})

let burger = document.querySelector('.promo__header_burger')

let burgerMenu = document.querySelector(".promo__header_burger_list")

burger.addEventListener("click", function(){
    burger.classList.toggle("promo__header_burger_active")
    burgerMenu.classList.toggle("promo__header_burger_list_active")
})

window.addEventListener("scroll", function(){
    if (scrollY >= 1) {
        document.querySelector(".promo__header").classList.add("promo__header_active")
    } else {
        document.querySelector(".promo__header").classList.remove("promo__header_active")
    }
})


let logo = document.querySelector(".promo__header_item_logo")

logo.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})