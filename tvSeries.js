const image_SeriesTV = document.querySelector(".image_SeriesTV")
const name_SeriesTV = document.querySelector(".name_SeriesTV")
const overview_SeriesTV = document.querySelector(".overview_SeriesTV")
const voteAverage_SeriesTV = document.querySelector(".voteAverage_SeriesTV")
const voteCount_SeriesTV = document.querySelector(".voteCount_SeriesTV")
const id = window.location.search.substring(4,10)

const form_Season = document.querySelector(".form_Season")
const numSeason = document.querySelector(".numSeason")
const btnSend = document.querySelector(".btnSend")


//const url_TVSeries = "https://api.themoviedb.org/3/tv/popular?api_key=735bb0297a3005a4acf5d01890f3249f&language=it"
const url_TVSeries = `https://api.themoviedb.org/3/tv/${id}/season/1?api_key=735bb0297a3005a4acf5d01890f3249f&language=it`
console.log(url_TVSeries)

fetch(url_TVSeries)
.then((res) => res.json())
.then((res) => seriesTV(res))

const seriesTV = (data) =>{

    let nEp = [data.episodes][0]

    for(let i=0; i<nEp.length; i++){

        const info_SeriesTV = document.querySelector(".info_SeriesTV")
        const cardEpisodes = document.createElement("div")
        const container_InfoEpisodes = document.createElement("div")
        const image_SeriesTV = document.createElement("img")
        const name_SeriesTV = document.createElement("h2")
        const overview_SeriesTV = document.createElement("p")
        const voteAverage_SeriesTV = document.createElement("p")
        const voteCount_SeriesTV = document.createElement("p")
        const separatorCard = document.createElement("hr")

        cardEpisodes.className = "cardEpisodes"
        container_InfoEpisodes.className = "container_InfoEpisodes"
        image_SeriesTV.className = "image_SeriesTV"
        name_SeriesTV.className = "name_SeriesTV"
        overview_SeriesTV.className = "overview_SeriesTV"
        voteAverage_SeriesTV.className = "voteAverage_SeriesTV"
        voteCount_SeriesTV.className = "voteCount_SeriesTV"
        separatorCard.className = "separatorCard"

        image_SeriesTV.src = "https://image.tmdb.org/t/p/original/" + data.episodes[i].still_path
        image_SeriesTV.setAttribute("alt", "Locandina non aggiornata")
        name_SeriesTV.innerHTML = data.episodes[i].name
        overview_SeriesTV.innerHTML = data.episodes[i].overview
        voteAverage_SeriesTV.innerHTML =  "Valutazione media: " + data.episodes[i].vote_average.toFixed(1) + "/10"
        voteCount_SeriesTV.innerHTML = "Valtuazioni totali: " + data.episodes[i].vote_count

        container_InfoEpisodes.append(overview_SeriesTV, voteAverage_SeriesTV, voteCount_SeriesTV, separatorCard)
        cardEpisodes.append(image_SeriesTV, name_SeriesTV, container_InfoEpisodes)
        info_SeriesTV.append(cardEpisodes)
    }

}
