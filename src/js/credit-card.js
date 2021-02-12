const axios = require('axios').default;

export async function getCardData(){
    let url = "https://run.mocky.io/v3/64c93785-4849-4730-a9cb-d04d6bc38408";
    let response = await axios.get(url);
    return response.data;
}

export function renderFrontEnd(data){
    renderThumbs(data.imageUrl);
    renderNetwork(data.network);
    renderName(data.name);
    renderRating(data.rating);
    renderApply(data.applyUrl);
    renderAnnuity(data.firstAnnuity);
    renderDescription(data.description);
    renderMinimalValue(data.valueOfMinimalIncomeRequired);
}

function renderName(name){
    let cardNameElement = document.getElementById("card-name");
    cardNameElement.innerHTML = name;
}
function renderDescription(description){
    let cardDescriptionElement = document.getElementById("card-description");
    cardDescriptionElement.innerHTML = description;
}
function renderAnnuity(firstAnnuity){
    let firstAnnuityElement = document.getElementById("card-firstAnnuity");
    firstAnnuityElement.innerHTML = firstAnnuity.textFormatted;
}
function renderMinimalValue(value){
    let valueOfMinimalIncomeRequiredElement = document.getElementById("card-valueOfMinimalIncomeRequired");
    let valueFormated = parseInt(value).toLocaleString('pt-br', { maximumFractionDigits: 2 });
    valueOfMinimalIncomeRequiredElement.innerHTML = `R$ ${valueFormated}`;
}

function renderApply(url){
    let applyElement = document.getElementById("card-apply");
    applyElement.setAttribute('href', url);
}

function renderRating(rating){
    let ratingScoreElement = document.getElementById('card-rating-score'),
        ratingReviewsElement = document.getElementById('card-rating-reviews');
    ratingScoreElement.innerHTML = rating.average_score;
    ratingReviewsElement.innerHTML = rating.total_reviews;
}

function renderNetwork(network){
    let networkNameElement = document.getElementById("card-network");
    networkNameElement.innerHTML = network.name;
}

function renderThumbs(imageUrl){
    let thumbDesktopElement = document.getElementById("card-thumb-desktop"),
        thumbDesktopUrl = imageUrl[1],
        thumbMobileElement = document.getElementById("card-thumb-mobile"),
        thumbMobileUrl = imageUrl[0];
    thumbDesktopElement.setAttribute('src', thumbDesktopUrl);
    thumbMobileElement.setAttribute('src', thumbMobileUrl);
}