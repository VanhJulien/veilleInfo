
const input = $('#input');
const newsList = $('#newsList');
const language = $('#language');

$('#search').submit((event) => {

    if(input.val() == '') {
        alert("Le champ de recherche est vide");
        return
    }

    event.preventDefault();
    const apiKey = "244cc94b60474138abf01cb4735a785f"
    let topic = input.val();
    let url = ``
    if(language.val()=="all") {
        url = `http://newsapi.org/v2/everything?q=${topic}&sortBy=popularity&apiKey=${apiKey}`
    } else{
        url = `http://newsapi.org/v2/everything?q=${topic}&language=${language.val()}&sortBy=relevancy&apiKey=${apiKey}`
    }
    

    newsList.html("");
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        data.articles.forEach((article) => {
            $('#newsList').append(`<div class='card'> <a href='${article.url}'><img src='${article.urlToImage}' alt='Avatar' style='width:100%'> <div class='container'></a> <h4><b id="title">${article.title}</b></h4> <p id="description">${article.description}</p> </div> </div>`)
        })
    }).catch((error) => {
       alert('Aucun résultat correspondant');
       console.log(error); 
    })
})
