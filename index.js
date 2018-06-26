
const button = document.querySelector('#press')
const changeHeading = function() {
     const h = document.querySelector('h1')
     h.textContent = document.querySelector('#xtern').value
     event.preventDefault()
    }


button.addEventListener('click',changeHeading)












