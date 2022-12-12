const body = document.querySelector("body")

//MENU RESPONSIVE
const header = document.querySelector(".header");
const container_Header = document.querySelector(".container_Header");
const esplora_Btn = document.querySelector(".esplora_Btn");
const menu_Container = document.querySelector(".menu_Container");
const category_Btn = document.querySelector(".category_Btn");
const subMenu_Category = document.querySelector(".subMenu_Category")
const arrowDown_Btn_Category = document.querySelector(".arrowDown_Btn_Category")
const arrowUp_Btn_Category = document.querySelector(".arrowUp_Btn_Category")
const btn_Close_Menu = document.querySelector(".btn_Close_Menu");
const btn_Search = document.querySelector(".btn_Search");
const btn_Close_Search = document.querySelector(".btn_Close_Search");
const search_Bar = document.querySelector(".search_Bar");
const btn_Account = document.querySelector(".btn_Account");
const menu_Account = document.querySelector(".menu_Account")
const btn_Close_Menu_Account = document.querySelector(".btn_Close_Menu_Account")

esplora_Btn.addEventListener("click", () => {
    esplora_Btn.style = "display: none";
    btn_Search.style = "display: none";
    menu_Container.style = "display: flex";
    header.append(menu_Container);
})

btn_Close_Menu.addEventListener("click", () =>{
    esplora_Btn.style = "display: flex";
    btn_Search.style = "display: flex";
    menu_Container.style = "display: none";
})

category_Btn.addEventListener("click", () => {
    subMenu_Category.style = "display: flex";
    arrowUp_Btn_Category.style = "display: block";
    arrowDown_Btn_Category.style = "display: none";
})

arrowUp_Btn_Category.addEventListener("click", () => {
    subMenu_Category.style = "display: none";
    arrowUp_Btn_Category.style = "display: none";
    arrowDown_Btn_Category.style = "display: block";
})

btn_Search.addEventListener("click", () => {
    search_Bar.style = "display: block";
    btn_Close_Search.style = "display: block";
    btn_Search.style = "display: none";
    esplora_Btn.style = "display: none";
    btn_Account.style = "display: none";
})

btn_Close_Search.addEventListener("click", () => {
    search_Bar.style = "display: none";
    btn_Close_Search.style = "display: none";
    btn_Search.style = "display: flex";
    esplora_Btn.style = "display: flex";
    btn_Account.style = "display: flex";
})

btn_Account.addEventListener("click", () => {
    menu_Account.style = "display: flex";
    esplora_Btn.style = "display: flex";
    btn_Search.style = "display: flex"
    menu_Container.style = "display: none";
    header.append(menu_Account);
})

btn_Close_Menu_Account.addEventListener("click", () => {
    menu_Account.style = "display: none";
    esplora_Btn.style = "display: flex";
    btn_Search.style = "display: flex"
})
//FINE MENU RESPONSIVE

//HERO
const url_popularSeries = "https://api.themoviedb.org/3/tv/popular?api_key=735bb0297a3005a4acf5d01890f3249f&language=it"
const container_Hero = document.querySelector(".container_Hero")

const modal_PopularSeries = document.createElement("div")
const btnModal_PopularSeries = document.createElement("button")
const btnCloseModal_PopularSeries = document.createElement("button")
const iconModalBtn = document.createElement("i")
const iconCloseModalBtn = document.createElement("i")

modal_PopularSeries.className = "modal_PopularSeries"
btnModal_PopularSeries.className = "btnModal_PopularSeries"
iconModalBtn.className = "fa-solid fa-play"
iconCloseModalBtn.className = "fa-solid fa-circle-xmark iconCloseModalBtn"

btnModal_PopularSeries.append(iconModalBtn)
btnCloseModal_PopularSeries.append(iconCloseModalBtn)
modal_PopularSeries.append(btnCloseModal_PopularSeries)

btnModal_PopularSeries.addEventListener("click", () => {
    modal_PopularSeries.style = "display: flex";
    btnCloseModal_PopularSeries = "display: block";
})

btnCloseModal_PopularSeries.addEventListener("click", () => {
    modal_PopularSeries.style = "display: none";
})

fetch(url_popularSeries)
.then((res) => res.json())
.then((res) => latest_SerieTv(res))

const latest_SerieTv = (data) =>{
    
    const container_latest_Series = document.createElement("div");
    const img_latest_Series = document.createElement("img");
    const container_InfoModal = document.createElement("div")

    container_latest_Series.className = "container_latest_Series";
    container_InfoModal.className = "container_InfoModal";
    img_latest_Series.className = "img_latest_Series";

    img_latest_Series.setAttribute("src", "https://image.tmdb.org/t/p/original/" + data.results[0].poster_path)
    img_latest_Series.setAttribute("alt", data.results[0].name)

    container_latest_Series.append(img_latest_Series, btnModal_PopularSeries, modal_PopularSeries)
    container_Hero.append(container_latest_Series)

    //CARD MODALE
    const name_PopularSeries = document.createElement("h2")
    const overview_PopularSeries = document.createElement("p")
    const img_PopularSeries = document.createElement("img")
    const voteAverage_PopularSeries = document.createElement("span")
    const voteCount_PopularSeries = document.createElement("span")
    const container_Play = document.createElement("div")
    const text_Play = document.createElement("a")
    const btn_Play = document.createElement("i")

    name_PopularSeries.className = "name_PopularSeries"
    overview_PopularSeries.className = "overview_PopularSeries"
    img_PopularSeries.className = "img_PopularSeries"
    voteAverage_PopularSeries.className =  "voteAverage_PopularSeries"
    voteCount_PopularSeries.className =  "voteCount_PopularSeries"
    container_Play.className = "container_Play"
    text_Play.className = "text_Play"
    btn_Play.className = "fa-solid fa-play btn_Play"

    name_PopularSeries.textContent = data.results[0].name
    overview_PopularSeries.textContent = data.results[0].overview
    voteAverage_PopularSeries.textContent = "Valutazione media: " + data.results[0].vote_average + "/10"
    voteCount_PopularSeries.textContent = "Totale valutazioni: " + data.results[0].vote_count
    text_Play.textContent = "Riproduci"

    text_Play.append(btn_Play)
    container_Play.append(text_Play)
    container_InfoModal.append(name_PopularSeries, overview_PopularSeries, voteAverage_PopularSeries, voteCount_PopularSeries, container_Play)
    modal_PopularSeries.append(container_InfoModal)
}
//FINE HERO

//SEZIONE SERIE TV POPOLARI
const url_popular_TVSeries = "https://api.themoviedb.org/3/tv/popular?api_key=735bb0297a3005a4acf5d01890f3249f&language=it"
const serieTV_Popular = document.querySelector(".serieTV_Popular");
const container_SerieTV_Popular = document.querySelector(".container_SerieTV_Popular")
const container_modal_InfoSeries = document.querySelector(".container_modal_InfoSeries")

const subContainer_SerieTV_Popular = document.createElement("div");
const modal_InfoSeries = document.createElement("div")
const btnClose_ModalInfo = document.createElement("button")

subContainer_SerieTV_Popular.className = "subContainer_SerieTV_Popular";
modal_InfoSeries.className = "modal_InfoSeries";
btnClose_ModalInfo.className = "fa-solid fa-circle-xmark btnClose_ModalInfo"

serieTV_Popular.append(subContainer_SerieTV_Popular);

fetch(url_popular_TVSeries)
.then((res) => res.json())
.then((res) => popular_TVSeries(res))

const popular_TVSeries = (data) =>{

    for(let i = 0; i < 10; i++){

        const card_popular_Series = document.createElement("div")
        const img_popular_Series = document.createElement("img")
        const btnInfo_popular_TVSeries = document.createElement("button")
        
        card_popular_Series.className = "card_popular_Series"
        img_popular_Series.className = "img_popular_Series"
        btnInfo_popular_TVSeries.className = "btnInfo_popular_TVSeries"

        img_popular_Series.setAttribute("src", "https://image.tmdb.org/t/p/original/" + data.results[i].poster_path)
        img_popular_Series.setAttribute("alt", data.results[i].name)
        btnInfo_popular_TVSeries.textContent = "Maggiori dettagli"

        card_popular_Series.append(img_popular_Series, btnInfo_popular_TVSeries)
        subContainer_SerieTV_Popular.append(card_popular_Series)
        container_SerieTV_Popular.append(subContainer_SerieTV_Popular)

        //CARD MODALE
        const container_InfoSeries = document.createElement("div")
        const name_PopularSeries = document.createElement("h2")
        const overview_PopularSeries = document.createElement("p")
        const voteAverage_PopularSeries = document.createElement("span")
        const voteCount_PopularSeries = document.createElement("span")

        const container_Play = document.createElement("div")
        const text_Play = document.createElement("a")
        const btn_Play = document.createElement("i")

        container_InfoSeries.className = "container_InfoSeries"
        name_PopularSeries.className = "name_PopularSeries"
        overview_PopularSeries.className = "overview_PopularSeries"
        voteAverage_PopularSeries.className =  "voteAverage_PopularSeries"
        voteCount_PopularSeries.className =  "voteCount_PopularSeries"

        container_Play.className = "container_Play"
        text_Play.className = "text_Play"
        btn_Play.className = "fa-solid fa-play btn_Play"

        name_PopularSeries.textContent = data.results[i].name
        overview_PopularSeries.textContent = data.results[i].overview
        voteAverage_PopularSeries.textContent = "Valutazione media: " + data.results[i].vote_average + "/10"
        voteCount_PopularSeries.textContent = "Totale valutazioni: " + data.results[i].vote_count
        text_Play.textContent = "Riproduci"

        text_Play.append(btn_Play)
        container_Play.append(text_Play)

        //img_popular_Series_Modal.setAttribute("src", "https://image.tmdb.org/t/p/original/" + data.results[i].poster_path)
        //img_popular_Series_Modal.setAttribute("alt", data.results[i].name)

        btnInfo_popular_TVSeries.addEventListener("click", () =>{
            body.style = "background-color: black"
            container_modal_InfoSeries.style = "display: block"
            modal_InfoSeries.style = "display: flex"
            container_InfoSeries.append(name_PopularSeries, overview_PopularSeries, voteAverage_PopularSeries, voteCount_PopularSeries,container_Play)
                modal_InfoSeries.append(container_InfoSeries)
        })
    }

    container_modal_InfoSeries.append(modal_InfoSeries)

}

//SEZIONE SERIE TV PIU' VOTATE
const url_TopRated_TVSeries = "https://api.themoviedb.org/3/tv/top_rated?api_key=735bb0297a3005a4acf5d01890f3249f&language=it&page=1"
const serieTV_TopRated = document.querySelector(".serieTV_TopRated");
const container_SerieTV_TopRated = document.querySelector(".container_SerieTV_TopRated")

const subContainer_SerieTV_TopRated = document.createElement("div");
subContainer_SerieTV_TopRated.className = "subContainer_SerieTV_TopRated";

serieTV_TopRated.append(subContainer_SerieTV_TopRated);

fetch(url_TopRated_TVSeries)
.then((res) => res.json())
.then((res) => topRated_TVSeries(res))

const topRated_TVSeries = (data) =>{

    for(let i = 0; i < 10; i++){

        const card_TopRated_TopRated = document.createElement("div")
        const img_topRated_Series = document.createElement("img")
        const btnInfo_topRated_TVSeries = document.createElement("button")

        card_TopRated_TopRated.className = "card_TopRated_TopRated"
        img_topRated_Series.className = "img_topRated_Series"
        btnInfo_topRated_TVSeries.className = "btnInfo_topRated_TVSeries"

        img_topRated_Series.setAttribute("src", "https://image.tmdb.org/t/p/original/" + data.results[i].poster_path)
        img_topRated_Series.setAttribute("alt", data.results[i].name)
        btnInfo_topRated_TVSeries.textContent = "Maggiori dettagli"

        card_TopRated_TopRated.append(img_topRated_Series, btnInfo_topRated_TVSeries)
        subContainer_SerieTV_TopRated.append(card_TopRated_TopRated)
        container_SerieTV_TopRated.append(subContainer_SerieTV_TopRated)

        btnInfo_topRated_TVSeries.addEventListener("click", () =>{
        })
    }

}