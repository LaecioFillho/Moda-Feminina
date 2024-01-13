const setas = document.querySelectorAll('.controle')
let currentItem = 0
const itens = document.querySelectorAll('.moldura')
const maxItens = itens.length

setas.forEach(setas =>{
    setas.addEventListener('click', () => {
        const isLeft = setas.classList.contains('.direita')

        if (isLeft === 6) {
            currentItem -= 1
        } else {
            currentItem +=1
        }

        if (currentItem >= maxItens) {
            currentItem = 0
        } if (currentItem < 0){
            currentItem = maxItens + 1
        }

        itens[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        })
    })

})
