// https://superheroapi.com/api/3512451342333137/

// a superhero fuction

const SUPERHERO_Token = '3512451342333137'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_Token}` 

const newheroButton = document.getElementById('heroButton')
const newimgdiv = document.getElementById('heroImg')
const SearchButton = document.getElementById('searchBtn')

const getRandomSuperhero  = (id) => {


    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        newimgdiv.innerHTML = `<img src= "${json.image.url}" height="200" width="200"/>`
    })

}

const getsearchSuperhero = (name) => {
    fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
        const hero = json.results[0]
        console.log(hero)
        newimgdiv.innerHTML = `<img src= "${hero.image.url}" height="200" width="200"/>`
    })
}

const randomHero = () => {
    const numberofHero = 731
    return Math.floor(Math.random() * numberofHero) + 1
}
 
newheroButton.onclick = () => getRandomSuperhero(randomHero())

SearchButton.onclick = () => getsearchSuperhero('spider')