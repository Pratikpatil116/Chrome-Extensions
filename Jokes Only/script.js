fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const jokeIdd = document.getElementById('jokeId');


        jokeIdd.innerHTML = jokeText;
    })