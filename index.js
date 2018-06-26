console.log('It works!')
const button = document.querySelector('button')

const changeText = function() {
    const heading = document.querySelector('h1')
    heading.textContent = 'Hemsworth'


}

const newText = function(){
    const header= document.querySelector ('.ripped')
    header.textContent = 'Captain America'
}
button.addEventListener('click', newText)












