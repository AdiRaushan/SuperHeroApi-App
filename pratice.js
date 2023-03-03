// https://superheroapi.com/api/3512451342333137/

// a superhero fuction

const getSuperhero  = () => {
    fetch('https://superheroapi.com/api.php/3512451342333137/245')
    .then(response => response.json())
    .then(json => console.log(json))
}


getSuperhero()