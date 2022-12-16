const body = document.querySelector("body")
const menu_Account = document.querySelector(".menu_Account");
const btn_Account = document.querySelector(".btn_Account");
const image_SeriesTV = document.querySelector(".image_SeriesTV")
const name_SeriesTV = document.querySelector(".name_SeriesTV")
const overview_SeriesTV = document.querySelector(".overview_SeriesTV")
const voteAverage_SeriesTV = document.querySelector(".voteAverage_SeriesTV")
const voteCount_SeriesTV = document.querySelector(".voteCount_SeriesTV")
const id = window.location.search.substring(4,10)

const form_Season = document.querySelector(".form_Season")
const numSeason = document.querySelector(".numSeason")
const btnSend = document.querySelector(".btnSend")

//const link_Season = document.createElement("a")

//link_Season.setAttribute("href", `http://127.0.0.1:5500/tv-series.html?id=${idSeries}`)
//link_Season.className = "link_Season"

const url_TVSeries = `https://api.themoviedb.org/3/tv/${id}/season/1?api_key=735bb0297a3005a4acf5d01890f3249f&language=it`
//const url_Season_TVSeries = `https://api.themoviedb.org/3/tv/${id}/season/${idseason}?api_key=735bb0297a3005a4acf5d01890f3249f&language=it`


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
        voteAverage_SeriesTV.innerHTML =  "Valutazione media: " + data.episodes[i].vote_average + "/10"
        voteCount_SeriesTV.innerHTML = "Valutazioni totali: " + data.episodes[i].vote_count

        container_InfoEpisodes.append(overview_SeriesTV, voteAverage_SeriesTV, voteCount_SeriesTV, separatorCard)
        cardEpisodes.append(image_SeriesTV, name_SeriesTV, container_InfoEpisodes)
        info_SeriesTV.append(cardEpisodes)

        if(overview_SeriesTV.outerHTML === "<p class=\"overview_SeriesTV\"></p>"){
            overview_SeriesTV.style = "height: 50px";
            overview_SeriesTV.innerHTML = "DESCRIZIONE NON AGGIORNATA";
        }
    }

}

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
        rateSeries.style = "display: block";
        btn_Rated.style = "display: block";
    } else {
        const user_Notfound = document.createElement("span");
        user_Notfound.className = "user_Notfound";
        user_Notfound.textContent = "Utente / Password errati";
        modal_Login.append(user_Notfound);
    }

})

btn_Logout.addEventListener("click", () => {
    localStorage.removeItem('loginData');
    location.reload();
})