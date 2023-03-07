// https://superheroapi.com/api/3512451342333137/

// a superhero fuction

const SUPERHERO_Token = '3512451342333137'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_Token}` 

const newheroButton = document.getElementById('heroButton')

const getSuperhero  = (id, name) => {
    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        document.querySelector('body').innerHTML += `<img src= "${json.image.url}" height="200" width="200"/>`
    })

    }

getSuperhero(60)
