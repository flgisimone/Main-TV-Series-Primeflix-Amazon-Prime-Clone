const body = document.querySelector("body")
const menu_Account = document.querySelector(".menu_Account");
const btn_Account = document.querySelector(".btn_Account");
const hero_Season = document.querySelector(".hero_Season")
const info_SeriesTV = document.querySelector(".info_SeriesTV")
const image_SeriesTV = document.querySelector(".image_SeriesTV")
const name_SeriesTV = document.querySelector(".name_SeriesTV")
const overview_SeriesTV = document.querySelector(".overview_SeriesTV")
const voteAverage_SeriesTV = document.querySelector(".voteAverage_SeriesTV")
const voteCount_SeriesTV = document.querySelector(".voteCount_SeriesTV")

//LOGIN
const container_modalLogin = document.querySelector(".container_modalLogin")
const btn_Login = document.querySelector(".btn_Login");
const modal_Login = document.querySelector(".modal_Login");
const form_Login = document.querySelector(".form_Login");
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const send_Login = document.querySelector(".send_Login");
const btn_Close_Login = document.querySelector(".btn_Close_Login");

btn_Login.addEventListener("click", () => {
    modal_Login.style = "display: flex";
    menu_Account.style = "display: none";
    container_modalLogin.style = "display: block";
    container_modalLogin.append(modal_Login)
    body.style = "overflow-y: hidden";

})

btn_Close_Login.addEventListener("click", () => {
    modal_Login.style = "display: none";
    container_modalLogin.style = "display: none";
    body.style = "overflow-y: none";
})

send_Login.addEventListener("submit", () => {
    container_modalLogin.style = "display: none";
})

const login_Form = document.forms.form_Login ;
const element_login = login_Form.elements;
const img_profile = document.createElement("img");
const btn_Logout = document.querySelector(".btn_Logout");

img_profile.setAttribute("src", "./assets/userIcon.png");
img_profile.className = "img_profile";

login_Form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
        user: element_login.username.value,
        pass: element_login.password.value
    }

    if(data.user === "edgemony" && data.pass === "codeweek"){
        localStorage.setItem('loginData', JSON.stringify(data));
        JSON.parse(localStorage.getItem('loginData'));
        window.onload = JSON.parse(localStorage.getItem('loginData'));
        btn_Account.replaceChildren(img_profile);
        btn_Login.replaceWith(btn_Logout);
        btn_Logout.style = "display: block";
        modal_Login.style = "display: none";
        container_modalLogin.style = "display: none";
        body.style = "overflox-y: none";
    } else {
        const user_Notfound = document.createElement("span");
        user_Notfound.className = "user_Notfound";
        user_Notfound.textContent = "Utente / Password errati";
        modal_Login.append(user_Notfound);
    }

})

const idSeries = window.location.search.substring(4,10)
let idSeason = 1;

const btn_Prev = document.querySelector(".btn_Prev")
const btn_Next = document.querySelector(".btn_Next")

if (idSeason === 1) {
    document.getElementById("btn_Prev").style = "display: none"
    document.getElementById("btn_Next").style = "display: block"
} else {
    document.getElementById("btn_Prev").style = "display: block"
    document.getElementById("btn_Next").style = "display: block"
}

  btn_Prev.addEventListener("click", () =>{
    idSeason--
    hero_Season.replaceChildren()
    info_SeriesTV.replaceChildren()
    const url_TVSeries = `https://api.themoviedb.org/3/tv/${idSeries}/season/${idSeason}?api_key=735bb0297a3005a4acf5d01890f3249f&language=it`

    fetch(url_TVSeries)
    .then((res) => res.json())
    .then((res) => hero_seriesTV(res))
    .catch((e) => console.log("Error:" + e));  

    fetch(url_TVSeries_Video)
    .then((res) => res.json())
    .then((res) => video_Hero(res))
    .catch((e) => console.log("Error:" + e));  

    fetch(url_TVSeries)
    .then((res) => res.json())
    .then((res) => seriesTV(res))
    .catch((e) => console.log("Error:" + e));  

    if (idSeason === 1) {
        document.getElementById("btn_Prev").style = "display: none"
        document.getElementById("btn_Next").style = "display: block"
    } else {
        document.getElementById("btn_Prev").style = "display: block"
        document.getElementById("btn_Next").style = "display: block"
    }
        
  })

  btn_Next.addEventListener("click", () =>{
    idSeason++
    hero_Season.replaceChildren()
    info_SeriesTV.replaceChildren()
    const url_TVSeries = `https://api.themoviedb.org/3/tv/${idSeries}/season/${idSeason}?api_key=735bb0297a3005a4acf5d01890f3249f&language=it`

    const url_infoSeries = `https://api.themoviedb.org/3/tv/${idSeries}?api_key=735bb0297a3005a4acf5d01890f3249f&language=it`
    fetch(url_infoSeries)
    .then((res) => res.json())
    .then((res) => {
        if(idSeason >= res.number_of_seasons) 
        document.getElementById("btn_Next").style = "display: none"; 
    })
    .catch((e) => console.log("Error:" + e));  

    fetch(url_TVSeries)
    .then((res) => res.json())
    .then((res) =>  hero_seriesTV(res))
    .catch((e) => console.log("Error:" + e));  

    fetch(url_TVSeries_Video)
    .then((res) => res.json())
    .then((res) => video_Hero(res))
    .catch((e) => console.log("Error:" + e));  

    fetch(url_TVSeries)
    .then((res) => res.json())
    .then((res) => seriesTV(res))
    .catch((e) => console.log("Error:" + e));  

    if (idSeason === 1) {
        document.getElementById("btn_Prev").style = "display: none"
        document.getElementById("btn_Next").style = "display: block"
    } else {
        document.getElementById("btn_Next").style = "display: block"
        document.getElementById("btn_Prev").style = "display: block"

    }
    })

const url_TVSeries = `https://api.themoviedb.org/3/tv/${idSeries}/season/${idSeason}?api_key=735bb0297a3005a4acf5d01890f3249f&language=it`

fetch(url_TVSeries)
.then((res) => res.json())
.then((res) => hero_seriesTV(res))
.catch((e) => console.log("Error:" + e));  

const hero_seriesTV = (data) => {

    const hero_Season = document.querySelector(".hero_Season");
    const container_Hero = document.createElement("div");
    const img_Hero = document.createElement("img");
    const info_Hero = document.createElement("div");
    const name_Season = document.createElement("h3");
    const air_date = document.createElement("span");
    const overview_Season = document.createElement("p");
    const container_linkEpisode = document.createElement("div")

    hero_Season.className = "hero_Season";
    container_Hero.className = "container_Hero";
    img_Hero.className = "img_Hero";
    info_Hero.className = "info_Hero";
    name_Season.className = "name_Season";
    air_date.className = "air_date";
    overview_Season.className = "overview_Season";
    container_linkEpisode.className = "container_linkEpisode"

    img_Hero.setAttribute("src", "https://image.tmdb.org/t/p/original/" + data.poster_path);
    name_Season.textContent = data.name;
    air_date.textContent ="MESSA IN ONDA: " + data.air_date.split("-").reverse().join("-");
    overview_Season.textContent = "TRAMA: " + data.overview;

    let nEp = [data.episodes][0];
    for(let i=0; i<nEp.length; i++){
        const link_Episode = document.createElement("a");
        link_Episode.className = "link_Episode";
        link_Episode.setAttribute("href", ("#ep"+JSON.stringify(data.episodes[i].episode_number)))
        link_Episode.textContent = "Episodio " + JSON.stringify(data.episodes[i].episode_number) + " - " + data.episodes[i].name;
        container_linkEpisode.append(link_Episode)
        info_Hero.append(name_Season, air_date, overview_Season, container_linkEpisode)
    }

        container_Hero.append(img_Hero, info_Hero);
    hero_Season.append(container_Hero);
}

const url_TVSeries_Video = `https://api.themoviedb.org/3/tv/${idSeries}/season/${idSeason}/videos?api_key=735bb0297a3005a4acf5d01890f3249f&language=en-US`

fetch(url_TVSeries_Video)
.then((res) => res.json())
.then((resVideo) => video_Hero(resVideo))
.catch((e) => console.log("Error:" + e));  

const video_Hero = (data) =>{
    const container_Hero = document.querySelector(".container_Hero")
    const trailer_Season = document.createElement("iframe");

    trailer_Season.className = "trailer_Season";

    trailer_Season.src = `https://www.youtube.com/embed/${data.results[0].key}`
    container_Hero.append(trailer_Season)
}

fetch(url_TVSeries)
.then((res) => res.json())
.then((res) => seriesTV(res))
.catch((e) => console.log("Error:" + e));  

const seriesTV = (data) =>{

    let nEp = [data.episodes][0]

    for(let i=0; i<nEp.length; i++){

        const info_SeriesTV = document.querySelector(".info_SeriesTV")
        const cardEpisodes = document.createElement("div")
        const container_InfoEpisodes = document.createElement("div")
        const container_image_SeriesTV = document.createElement("div")
        const image_SeriesTV = document.createElement("img")
        const watch_Episode = document.createElement("a")
        const btn_watch_Episode = document.createElement("i")
        const name_SeriesTV = document.createElement("h2")
        const numberEpisodes_SeriesTV = document.createElement("h3")
        const overview_SeriesTV = document.createElement("p")
        const voteAverage_SeriesTV = document.createElement("p")
        const voteCount_SeriesTV = document.createElement("p")
        const separatorCard = document.createElement("hr")

        cardEpisodes.className = "cardEpisodes"
        container_InfoEpisodes.className = "container_InfoEpisodes"
        container_image_SeriesTV.className = "container_image_SeriesTV"
        image_SeriesTV.className = "image_SeriesTV"
        watch_Episode.className = "watch_Episode"
        btn_watch_Episode.className = "fa-regular fa-circle-play btn_watch_Episode"
        name_SeriesTV.className = "name_SeriesTV"
        numberEpisodes_SeriesTV.className = "numberEpisodes_SeriesTV"
        overview_SeriesTV.className = "overview_SeriesTV"
        voteAverage_SeriesTV.className = "voteAverage_SeriesTV"
        voteCount_SeriesTV.className = "voteCount_SeriesTV"
        separatorCard.className = "separatorCard"

        cardEpisodes.id = "ep"+JSON.stringify(data.episodes[i].episode_number)
        image_SeriesTV.src = "https://image.tmdb.org/t/p/original/" + data.episodes[i].still_path
        image_SeriesTV.setAttribute("alt", "Locandina non aggiornata")
        watch_Episode.setAttribute("href", "#");
        name_SeriesTV.innerHTML = data.episodes[i].name
        numberEpisodes_SeriesTV.innerHTML = "Episodio: " + data.episodes[i].episode_number
        overview_SeriesTV.innerHTML = data.episodes[i].overview
        voteAverage_SeriesTV.innerHTML =  "Valutazione media: " + data.episodes[i].vote_average.toFixed() + "/10"
        voteCount_SeriesTV.innerHTML = "Valutazioni totali: " + data.episodes[i].vote_count

        watch_Episode.append(btn_watch_Episode)
        image_SeriesTV.append(watch_Episode)
        container_image_SeriesTV.append(image_SeriesTV, watch_Episode)
        container_InfoEpisodes.append(overview_SeriesTV, voteAverage_SeriesTV, voteCount_SeriesTV, separatorCard)
        cardEpisodes.append(container_image_SeriesTV, numberEpisodes_SeriesTV, name_SeriesTV, container_InfoEpisodes)
        info_SeriesTV.append(cardEpisodes)

        if(overview_SeriesTV.outerHTML === "<p class=\"overview_SeriesTV\"></p>"){
            overview_SeriesTV.style = "height: 50px";
            overview_SeriesTV.innerHTML = "DESCRIZIONE NON AGGIORNATA";
        }

        if(container_image_SeriesTV.outerHTML == "<div class=\"container_image_SeriesTV\"><img class=\"image_SeriesTV\" src=\"https://image.tmdb.org/t/p/original/null\" alt=\"Locandina non aggiornata\"><a class=\"watch_Episode\" href=\"#\"><i class=\"fa-regular fa-circle-play btn_watch_Episode\"></i></a></div>"){
            container_image_SeriesTV.style = "padding: 153px 0 0 0";
        }
    }

}

btn_Logout.addEventListener("click", () => {
    localStorage.removeItem('loginData');
    location.reload();
})

const btn_Signup = document.querySelector(".btn_Signup")
btn_Signup.addEventListener("click", () => {
    window.alert("Senza soldi non si canta messa")
})

const search_Bar = document.querySelector(".search_Bar")
search_Bar.addEventListener("click", () => {
    window.alert("Senza soldi non si canta messa")
})

const genres_menu = document.querySelectorAll(".genres_menu")

for (let i = 0; i < genres_menu.length; i++) {
    genres_menu[i].addEventListener("click", () => {
        window.alert("Senza soldi non si canta messa")
    })
}

const discover_More = document.querySelectorAll(".discover_More")

for (let i = 0; i < discover_More.length; i++) {
    discover_More[i].addEventListener("click", () => {
        window.alert("Senza soldi non si canta messa")
    })
}


