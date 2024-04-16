const container = document.querySelector(".container");
const movieTitle = document.querySelector(".userInputTitle");
const MoviePosterUrl = document.querySelector(".userInputPosterUrl");
const MovieReleaseYear = document.querySelector(".userInputReleaseYear");
const btn = document.querySelector(".button");

const movieTitleToDisplay = document.querySelector(".favoriteMovieTitle");
const movieReleaseYearToDisplay = document.querySelector(".favoriteMovieYear");

//et sisestatud andmed jääks alles, mitte ei kaoks lehekülje värskendamisega ära
let titleInStorage = localStorage.getItem("title");
let imageUrlInStorage = localStorage.getItem("imageUrl");
let releaseYearInStorage = localStorage.getItem("year");

//kontroll, kas on andmeid sisestatud ehk LocalStorage on olemas:
if(titleInStorage && imageUrlInStorage && releaseYearInStorage) { //&& - mõlemad peavad olema täidetud
    movieTitleToDisplay.textContent = titleInStorage;
    movieReleaseYearToDisplay.textContent = releaseYearInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(21, 21, 68, 0.432), rgba(189, 73, 73, 0.349)), url('${imageUrlInStorage}')`;
}

btn.addEventListener("click", () => {  //kui sündmus tuleb, siis 
    let movieTitleInput = movieTitle.value; //uus muutuja, mis võtab sisestatud väärtuse
    let posterUrlInput = MoviePosterUrl.value;
    let releaseYearInput = MovieReleaseYear.value;
    
    //vaja need andmed salvestada Local Storage'isse
    localStorage.setItem("title", movieTitleInput);
    localStorage.setItem("imageUrl", posterUrlInput);
    localStorage.setItem("year", releaseYearInput);
    
    movieTitleToDisplay.textContent = movieTitleInput; //teksti asendamine
    container.style.backgroundImage = `linear-gradient(rgba(21, 21, 68, 0.432), rgba(189, 73, 73, 0.349)),
    url('${posterUrlInput}')`; //selle võtsime container'i css'ist 
    movieReleaseYearToDisplay.textContent = releaseYearInput;

    // pärast väärtuste sisestamist tekstikastidesse, jääksid tekstikastid tühjaks
    movieTitle.value = "";
    MoviePosterUrl.value = "";
    MovieReleaseYear.value = "";

    //console.log(movieTitleInput);
    //console.log(posterUrlInput);

});