let text=document.querySelector('input')
let ball=document.querySelector('.ball')
let hole=document.querySelector('.ball_hole')
let answer=document.querySelector('.ball_hole__text')
let question=document.querySelector('.text_question')

function getRandomInt(max){
    return Math.floor(Math.random()*max)
}
ball.addEventListener('click',()=>{
    question.value=''
    hole.style.display='none'
    ball.classList.add('anim')
    answer.innerHTML=title[getRandomInt(6)]
    setTimeout(function(){
        hole.style.display='flex'
        ball.classList.remove('anim')
    },1200)
    
})
let title=['Yes',
'No',
'Maybe',
'More likely',
'Not sure',
'Ask later']