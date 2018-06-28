class App {
  constructor() {
    this.flicks = []
    this.list = document.querySelector('#flicks')

    const form = document.querySelector('form#flickForm')
    form.addEventListener('submit', (ev) => {
      ev.preventDefault()
      this.handleSubmit(ev)
    })
  }

  renderProperty(name, value) {
    const span = document.createElement('span')
    span.classList.add(name)
    span.textContent = value
    return span
  }

  renderItem(flick) {
    const item = document.createElement('li')
    item.classList.add('flick')

 
    const properties = Object.keys(flick)

    
    properties.forEach((propertyName) => {
      
      const span = this.renderProperty(propertyName, flick[propertyName])
      item.appendChild(span)
    })

   
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'delete'
    deleteButton
      .addEventListener(
        'click',
        (_ev) => this.removeFlick(flick, item)
      )
    item.appendChild(deleteButton)

    const favButton = document.createElement('button')
    favButton.textContent = 'favorite'
    favButton
      .addEventListener(
        'click',
        (_ev) => this.toggleFavorite(flick, item)
      )
    item.appendChild(favButton)

    return item
  }

  toggleFavorite(flick, item) {
    
    flick.favorite = item.classList.toggle('fav')
  }

  removeFlick(flick, item) {
    
    this.list.removeChild(item)

    
    const i = this.flicks.indexOf(flick)
    this.flicks.splice(i, 1)
  }

  handleSubmit(ev) {
    const f = ev.target

    const flick = {
      name: f.flickName.value,
      chris: f.chrisName.value,
      favorite: false,
    }

    this.flicks.push(flick)

    const item = this.renderItem(flick)
    this.list.appendChild(item)

    f.reset()
    f.flickName.focus()
  }
}

const app = new App()