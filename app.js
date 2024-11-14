function moviedata ()
{
let title=document.getElementById('Title').value;
const API_KEY='9b97a8a0';
const apiUrl = `https://cors-anywhere.herokuapp.com/https://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`;
fetch(apiUrl)
.then(response=>response.json())
.then(data=>{
document.getElementById('movieDetails').innerHTML=`
<div class="container">
<div id="imgalign"><img src='${data.Poster}'></div>
<div id="data">
<table>
<tr id="title"><th>Title: </th><td>${data.Title}</td> </tr><br>
<tr id="rating"><th>IMDB Rating: </th><td>${data.imdbRating}</td></tr><br>
<tr id="plot"><th>Plot: </th><td>${data.Plot}</td></tr><br>
<tr id="releasedate"><th>ReleasedOn: </th><td>${data.Released}</td></tr><br>
<tr id="director"><th>Director: </th><td>${data.Director}</td></tr><br>
<tr id="writer"><th>Writer: </th><td>${data.Writer}</td></tr><br>
<tr id="actors"><th>Actors: </th><td>${data.Actors}</td></tr> 
</table>
</div>
</div>`;
})
.catch(error=>{console.log('error',error)})
}
