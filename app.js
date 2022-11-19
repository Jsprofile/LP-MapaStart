// Header

const barsContainer = document.querySelector(".bar")
const nav = document.querySelector("nav")


barsContainer.addEventListener('click', ()=>{
    barsContainer.classList.toggle("activeBars")
    nav.classList.toggle('activeNav')
})



const quests = document.querySelectorAll('.quest')


quests.forEach((quest)=>{
    
    const answer = quest.nextElementSibling
    
    quest.addEventListener('click', ()=>{
        answer.classList.toggle('ActiveAnswer')
    })
})