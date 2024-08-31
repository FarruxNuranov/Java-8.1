// document.querySelector('') - подключается к указаному элементу
// innerHTML - берет содержимое указанного элемента
// style - добавляет любые css свойство
// classList.add() - добавляет указанный класс
// classList.remove() - удаляет указанный класс

// const h1 = document.querySelector('h1')

// h1.addEventListener('click',() => {
//     if(h1.innerHTML == 'html') {
//         h1.innerHTML = 'css'
//         h1.style.background = 'purple'
//         h1.classList.add('active')
//     }else {
//         h1.innerHTML = 'html'
//         h1.style.background = 'orange'
//         h1.classList.remove('active')
//     }
// })


// const items = document.querySelectorAll('.item')
// console.log(items);

// items.forEach((el) => {
//     el.addEventListener('click', () => {
//         el.classList.toggle('active')
//     })
// })


// const button = document.querySelector('button')
// const body = document.body


// button.addEventListener('click', () => {
//     body.classList.toggle('dark')
// })

// const button = document.querySelector('button')
// const input  = document.querySelector('input')

// button.addEventListener('click', () => {
//     if(input.type == 'password') {
//         input.type = 'text'
//         button.innerHTML = "cкрыть"
//     }else {
//         input.type = 'password'
//         button.innerHTML = "показать"
//     }
// })

const colorone = document.querySelector(".color__one")
const colortwo = document.querySelector(".color__two")
const colorthree = document.querySelector(".color__three")
const colorfour = document.querySelector(".color__four")
const colorfive = document.querySelector(".color__five")
const body = document.body



colorone.addEventListener("click", () => {
   
    if(body !== "red") {
        
        body.classList.remove("yellow")
        body.classList.remove("blue")
        body.classList.remove("black")
        body.classList.add("red")
       
       
    } else {
        
    }
        
   
    
})


colortwo.addEventListener("click", () => {
    if( body !== "yellow") {

        body.classList.remove("red")
        body.classList.remove("blue")
        body.classList.remove("black")
        body.classList.add("yellow")
    }else {
        
    }
    

})


colorthree.addEventListener("click", () => {
    if( body !== "blue") {

        body.classList.remove("red")
        body.classList.remove("yellow")
        body.classList.remove("black")
        body.classList.add("blue")
    }else {
        
    }

})


colorfour.addEventListener("click", () => {
    if( body !== "black") {

        body.classList.remove("red")
        body.classList.remove("yellow")
        body.classList.remove("blue")
        body.classList.add("black")
    }else {
        
    }



})



colorfive.addEventListener("click", () => {
    if(body !== "" ) {

        body.classList.remove("red")
        body.classList.remove("yellow")
        body.classList.remove("blue")
        body.classList.remove("black")
    }


})


const itemone = document.querySelector(".background__one")
const itemtwo = document.querySelector(".background__two")
const itemthree = document.querySelector(".background__three")
const itemfour = document.querySelector(".background__four")
const itemfive = document.querySelector(".background__five")
const itembox = document.querySelectorAll(".item")



itembox.forEach((el) => {
    itemone.addEventListener("click", () => {
        if (el !== "red") {

         
            el.classList.remove("yellow")
            el.classList.remove("blue")
            el.classList.remove("black")
            el.classList.add("red")
        }
    })

    itemtwo.addEventListener("click", () => {
        if (el !== "yellow") {

            el.classList.remove("red")
            el.classList.remove("blue")
            el.classList.remove("black")
            el.classList.add("yellow")

        }
    })
    itemthree.addEventListener("click", () => {
        if (el !== "blue") {

            el.classList.remove("red")
            el.classList.remove("yellow")
            el.classList.remove("black")
            el.classList.add("blue")

        }
    })

    itemfour.addEventListener("click", () => {
        if (el !== "black") {

            el.classList.remove("red")
            el.classList.remove("yellow")
            el.classList.remove("blue")
            el.classList.add("black")

        }
    })
    itemfive.addEventListener("click", () => {
        if (el !== "") {

            el.classList.remove("red")
            el.classList.remove("yellow")
            el.classList.remove("blue")
            el.classList.remove("black")

        }
    })
    


})


    
    






  
    

