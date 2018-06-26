
const button = document.querySelector('#press')
const changeHeading = function() {
     const h = document.querySelector('h1')
     h.textContent = document.querySelector('#xtern').value
     event.preventDefault()
    }

const enter = keyCode = 13


button.addEventListener('click',changeHeading)
enter.addEventListener('keyup')












