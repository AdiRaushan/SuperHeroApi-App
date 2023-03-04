// https://superheroapi.com/api/3512451342333137/

// a superhero fuction

const SUPERHERO_Token = '3512451342333137'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_Token}`

const getSuperhero  = (id, name) => {
    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => console.log(json.image.url))
}


getSuperhero(25)

const img = "https://www.superherodb.com/pictures2/portraits/10/100/10405.jpg"

document.querySelector('body').innerHTML += `<img src= "${img}"/>`