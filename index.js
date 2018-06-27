



const form = document.querySelector('form#athleteForm')
const form2 =document.querySelector('form#artistForm')
const athletesList = function(ev) {
  ev.preventDefault()
  const f = ev.target

  const athleteName = f.athleteName.value;
  const item = document.createElement('li')
  item.textContent = athleteName

  const list = document.querySelector('#athlete')
  list.appendChild(item)


  f.reset()
}


const artistList = function(ev) {
  ev.preventDefault()
  const a = ev.target

  const artistName = a.artistName.value

  const item2 = document.createElement('li')

  item2.textContent = artistName
  console.log(item2)
 
 
  const list = document.querySelector('#artist')
  list.appendChild(item2)


  a.reset()
}




form.addEventListener('submit', athletesList)
form2.addEventListener('submit', artistList)













