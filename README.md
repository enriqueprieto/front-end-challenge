# Foregon Front End Developer

## Tecnologias

* Bootstrap
* Axios
* Webpack
* Http-Server

### Setup

```bash
npm install
```

Após instalar as dependências do projeto, basta rodar o `http-server`

```bash
npm run serve
```

## Módulo Criado

### Retornando os dados a API

```js
import * as CreditCard from './js/credit-card';

let data = await CreditCard.getCardData();

```

### Renderizar dados da api na interface

```js
import * as CreditCard from './js/credit-card';

let response = await CreditCard.getCardData();
CreditCard.renderFrontEnd(response); 

```