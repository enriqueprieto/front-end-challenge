import 'bootstrap';
import './scss/app.scss';

import * as CreditCard from './js/credit-card';

async function appInit(){
    try {
        let loading = document.getElementById('card-loading');
        let data = document.getElementById('card-data');
        loading.style.display = "block";
        data.style.display = "none";
        let response = await CreditCard.getCardData();
        loading.style.display = "none";
        data.style.display = "block";
        return CreditCard.renderFrontEnd(response);        
    } catch (error) {
        console.error('Erro ao renderizar:', error.message);
    }
}

document.onload = appInit();