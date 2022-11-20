// Header

const barsContainer = document.querySelector(".bar")
const nav = document.querySelector("nav")


barsContainer.addEventListener('click', () => {
    barsContainer.classList.toggle("activeBars")
    nav.classList.toggle('activeNav')
})



const quests = document.querySelectorAll('.quest')


quests.forEach((quest) => {

    const answer = quest.nextElementSibling

    quest.addEventListener('click', () => {
        answer.classList.toggle('ActiveAnswer')
    })
})




const mainBtn = document.querySelectorAll('.mainBtn')
const wrapper = document.querySelector('.popupWrapper')
const closer = document.querySelector('.closer')

mainBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        wrapper.style.display = 'flex'
    })
})


closer.addEventListener('click', () => {
    wrapper.style.display = 'none'
})




const submitButton = document.querySelector('.sib-form-block__button')
const sucess = document.querySelector('#success-message')

submitButton.addEventListener('click', () => {

    setTimeout(()=>{
        if (sucess.classList.contains('sib-form-message-panel--active')) {
            window.open('https://api.whatsapp.com/send?phone=5511985871507&amp;text=Ol%C3%A1,%20gostaria%20de%20adquirir%20meu%20Mapa%20Start!')
        } else {
            console.log('error')
        }
    }, 3000)


})