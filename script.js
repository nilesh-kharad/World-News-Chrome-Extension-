
let query = "maharashtra";
let i = 0;
let jokeimgg = "";
let jokeText = "";
let jokeElement = "";
let jokeimg = "";
function myFunction() {
    query = document.getElementById("search").value;
    console.log(query);
    fetch(`https://gnews.io/api/v4/search?q=${query}&token=5b57dc555f9f31ce07d034724bae7abf`)
        .then(data => data.json())
        .then(jokeData => {
            jokeText = jokeData.articles[i].content
            if (jokeText !== null) {
                jokeimgg = jokeData.articles[i].image;
                i++;
                console.log(i);
            } else {
                jokeText = jokeData.errors;
                console.log("Errors");
            }
            jokeElement = document.getElementById("jokeelement");
            jokeElement.innerHTML = jokeText;
            jokeimg = document.getElementsByTagName("img").src = jokeimgg;

        })

}

console.log(query);
fetch(`https://gnews.io/api/v4/search?q=${query}&token=5b57dc555f9f31ce07d034724bae7abf`)
    .then(data => data.json())
    .then(jokeData => {
        // jokeText = jokeData.errors;
        try {
            jokeText = jokeData.articles[i].content;
                jokeimgg = jokeData.articles[i].image;
                jokeElement = document.getElementById("jokeelement");
                jokeElement.innerHTML = jokeText;
                jokeimg = document.getElementsByTagName("img").src = jokeimgg;            
        } catch (e) {
            jokeText = jokeData.errors;
            document.write(jokeText);
        }
       
    })