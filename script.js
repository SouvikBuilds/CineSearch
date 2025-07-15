document.addEventListener("DOMContentLoaded", function () {
    const showBtn = document.getElementById("show-movie")

    async function showMovieDetails() {
        const movieName = document.getElementById("search-movie").value.trim()

        if (movieName === '') {
            alert("Please Enter A Movie Name")
            return
        }

        const apikey = "41986ec8"
        const apiUrl = `https://www.omdbapi.com/?t=${movieName}&apikey=${apikey}`

        const response = await fetch(apiUrl)
        const data = await response.json()
        console.log(data);

        if (data.Response === "True") {
            document.getElementById("movie-name").innerText = data.Title
            if (data.Poster !== "N/A") {
                document.getElementById("movie-poster").src = data.Poster;
            } else {
                document.getElementById("movie-poster").src = "https://via.placeholder.com/300x450?text=No+Image";
            }

            document.getElementById("movie-released").innerText = "Released: " + data.Released
            document.getElementById("movie-genre").innerText = "Genre: " + data.Genre
            document.getElementById("imdb-movie-rating").innerText = "IMDB: " + data.imdbRating
            document.getElementById("metacritic-movie-rating").innerText = "Metacritic: " + data.Metascore + "/100"
            document.getElementById("movie-plot").innerText = "plot: " + data.Plot
            document.getElementById("box-office-collection").innerText = "Box Office Collection: " + data.BoxOffice



            document.querySelector(".movie-rating").style.display = "flex"
        } else {
            alert("Movie Not Found")
        }
    }
    showBtn.addEventListener("click", showMovieDetails)
})
