const url = 'https://icanhazdadjoke.com/';
const jokeContainer = document.getElementById('jokeContainer');

const getDadJokes = () => {
  const acc = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(url, acc)
    .then(response => response.json()
    .then((json) =>  {
      jokeContainer.innerText = json.joke
      console.log(json.joke)
    }));
}


window.onload = () => getDadJokes();

