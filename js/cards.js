if(document.location.href=="http://127.0.0.1:5500/partials/in_stock.html"||document.location.href=="file:///D:/%D0%91%D0%93%D0%A2%D0%A3/%D0%94%D0%AD%D0%B8%D0%92%D0%98/%D0%9A%D0%9F/%D0%B2%D0%B5%D1%80%D1%81%D1%82%D0%BA%D0%B0/partials/in_stock.html"){
    let cards={
        "0":{
            "brand":"Hyundai",
            "model":"Santa Fe",
            "year":"2016",
            "run":"320050",
            "engine":"Дизель",
            "body":"Кроссовер",
            "price":"900",
            "img":"../img/EDSC05733.jpg",
            "id":0
        },
        "1":{
            "brand":"Opel",
            "model":"Vectra",
            "year":"2001",
            "run":"320070",
            "engine":"Дизель",
            "body":"Седан",
            "price":"9000",
            "img":"../img/EDSC05741.jpg",
            "id":1
        },
        "2":{
            "brand":"Opel",
            "model":"Signum",
            "year":"1995",
            "run":"45632",
            "engine":"Дизель",
            "body":"Седан",
            "price":"250",
            "img":"../img/EDSC05845.jpg",
            "id":2
        },
        "3":{
            "brand":"Audi",
            "model":"e-tron",
            "year":"2015",
            "run":"3200",
            "engine":"Электро",
            "body":"Лифтбек",
            "price":"15560",
            "img":"../img/EDSC05645.jpg",
            "id":3
        },
        "4":{
            "brand":"ГАЗ",
            "model":"21",
            "year":"1959",
            "run":"24000",
            "engine":"Бензин",
            "body":"Седан",
            "price":"95552",
            "img":"../img/EDSC00493.jpg",
            "id":4
        },
        "5":{
            "brand":"Opel",
            "model":"Vectra",
            "year":"2010",
            "run":"45000",
            "engine":"Дизель",
            "body":"Седан",
            "price":"8596",
            "img":"../img/vectra_card.png",
            "id":5
        },
        "6":{
            "brand":"Opel",
            "model":"Vectra",
            "year":"1998",
            "run":"85690",
            "engine":"Дизель",
            "body":"Седан",
            "price":"1256",
            "img":"../img/vectra_card.png",
            "id":6
        },
        "7":{
            "brand":"Opel",
            "model":"Vectra",
            "year":"1989",
            "run":"32000",
            "engine":"Дизель",
            "body":"Седан",
            "price":"9633",
            "img":"../img/vectra_card.png",
            "id":7
        },
        "8":{
            "brand":"Opel",
            "model":"Vectra",
            "year":"2011",
            "run":"320008",
            "engine":"Дизель",
            "body":"Седан",
            "price":"8500",
            "img":"../img/vectra_card.png",
            "id":8
        }
    };

    let wrapper=document.querySelector('.card-wrapper');

    let heading=document.querySelector('.head');
    heading.innerHTML+=Object.keys(cards).length+' автомобилей в наличии';
    
    let toArray = Object.values(cards);
    let sortedByYearAsc = [...toArray].sort((a, b) => a.year - b.year);
    let sortedByPriceAsc = [...toArray].sort((a, b) => a.price - b.price);
    let sortedByRunAsc = [...toArray].sort((a, b) => a.run - b.run);
    
    let sortedByYearDesc = [...toArray].sort((a, b) => a.year - b.year).reverse();
    let sortedByPriceDesc = [...toArray].sort((a, b) => a.price - b.price).reverse();
    let sortedByRunDesc = [...toArray].sort((a, b) => a.run - b.run).reverse();
    
    let cardsSortedByYearAsc = {
        ...sortedByYearAsc
    }
    let cardsSortedByPriceAsc = {
        ...sortedByPriceAsc
    }
    let cardsSortedByRunAsc = {
        ...sortedByRunAsc
    }
    let cardsSortedByYearDesc = {
        ...sortedByYearDesc
    }
    let cardsSortedByPriceDesc = {
        ...sortedByPriceDesc
    }
    let cardsSortedByRunDesc = {
        ...sortedByRunDesc
    }
    
    function createCards(){
        wrapper.innerHTML= "";
    
        for(let key in elems){
            elems[key].id=key;
            let content = '<div class="card" id="'+elems[key].id+'"><img src="'+elems[key].img+'"><div class="info-block"><div class="row"><div class="name-model"><p>'+elems[key].brand+'</p><p>'+elems[key].model+'</p></div><p>'+elems[key].year+'</p></div><div class="row"><p>'+elems[key].run+' км</p><p>'+elems[key].engine+'</p><p>'+elems[key].body+'</p></div></div><div class="bottom-row"><p>'+elems[key].price+' р.</p><a href="post.html"><p>Просмотр автомобиля</p></a></div></div>';
            wrapper.innerHTML+= content;

            let card=document.querySelectorAll('.card');
    
            for (i = 0; i < card.length; i++) {
                card[i].addEventListener('click', function () {
                    let id=this.id;
                    localStorage.setItem('id', id);
                });
            }
        }
    }
    
    let elems={};
    
    elems=cardsSortedByPriceAsc;
    createCards();
    
    function getValue(selectObject) {
        value = selectObject.value;
        if(value=="price_asc"){
            elems=cardsSortedByPriceAsc;
            createCards();
            localStorage.setItem('card',  JSON.stringify(elems));
            console.log(elems);
        }
        if(value=="price_desc"){
            elems=cardsSortedByPriceDesc;
            createCards();
            localStorage.setItem('card',  JSON.stringify(elems));
            console.log(elems);
        }
        if(value=="run_asc"){
            elems=cardsSortedByRunAsc;
            createCards();
            localStorage.setItem('card',  JSON.stringify(elems));
            console.log(elems);
        }
        if(value=="run_desc"){
            elems=cardsSortedByRunDesc;
            createCards();
            localStorage.setItem('card',  JSON.stringify(elems));
            console.log(elems);
        }
        if(value=="year_asc"){
            elems=cardsSortedByYearAsc;
            createCards();
            localStorage.setItem('card',  JSON.stringify(elems));
            console.log(elems);
        }
        if(value=="year_desc"){
            elems=cardsSortedByYearDesc;
            createCards();
            localStorage.setItem('card',  JSON.stringify(elems));
            console.log(elems);
        }
    };

    // let card=document.querySelectorAll('.card');
    
    // for (i = 0; i < card.length; i++) {
    //     card[i].addEventListener('click', function () {
    //         let id=this.id;
    //         localStorage.setItem('id', id);
    //     });
    // }
}else if(document.location.href=="file:///D:/%D0%91%D0%93%D0%A2%D0%A3/%D0%94%D0%AD%D0%B8%D0%92%D0%98/%D0%9A%D0%9F/%D0%B2%D0%B5%D1%80%D1%81%D1%82%D0%BA%D0%B0/partials/in_stock_specials.html"||document.location.href=="http://127.0.0.1:5500/partials/in_stock_specials.html"){
    let cards={
        "0":{
            "brand":"Hyundai",
            "model":"Santa Fe",
            "year":"2016",
            "run":"320050",
            "engine":"Дизель",
            "body":"Кроссовер",
            "price":"900",
            "img":"../img/EDSC05733.jpg",
            "id":0,
            "discount":"0.5"
        },
        "1":{
            "brand":"Opel",
            "model":"Vectra",
            "year":"2001",
            "run":"320070",
            "engine":"Дизель",
            "body":"Седан",
            "price":"9000",
            "img":"../img/EDSC05741.jpg",
            "id":1,
            "discount":"0.33"
        },
        "2":{
            "brand":"Opel",
            "model":"Signum",
            "year":"1995",
            "run":"45632",
            "engine":"Дизель",
            "body":"Седан",
            "price":"250",
            "img":"../img/EDSC05845.jpg",
            "id":2,
            "discount":0.12
        },
        "3":{
            "brand":"Audi",
            "model":"e-tron",
            "year":"2015",
            "run":"3200",
            "engine":"Электро",
            "body":"Лифтбек",
            "price":"15560",
            "img":"../img/EDSC05645.jpg",
            "id":3,
            "discount":0.7
        },
        "4":{
            "brand":"ГАЗ",
            "model":"21",
            "year":"1959",
            "run":"24000",
            "engine":"Бензин",
            "body":"Седан",
            "price":"95552",
            "img":"../img/EDSC00493.jpg",
            "id":4,
            "discount":"0.1"
        },
        "5":{
            "brand":"Opel",
            "model":"Vectra",
            "year":"2002",
            "run":"45000",
            "engine":"Дизель",
            "body":"Седан",
            "price":"8596",
            "img":"../img/vectra_card.png",
            "id":5,
            "discount":"0.1"
        },
        "6":{
            "brand":"Opel",
            "model":"Vectra",
            "year":"2002",
            "run":"85690",
            "engine":"Дизель",
            "body":"Седан",
            "price":"1256",
            "img":"../img/vectra_card.png",
            "id":6,
            "discount":"0.13"
        },
        "7":{
            "brand":"Opel",
            "model":"Vectra",
            "year":"2002",
            "run":"32000",
            "engine":"Дизель",
            "body":"Седан",
            "price":"9633",
            "img":"../img/vectra_card.png",
            "id":7,
            "discount":"0.41"
        },
        "8":{
            "brand":"Opel",
            "model":"Vectra",
            "year":"2002",
            "run":"320008",
            "engine":"Дизель",
            "body":"Седан",
            "price":"8500",
            "img":"../img/vectra_card.png",
            "id":8,
            "discount":"0.14"
        }
    };
    let wrapper=document.querySelector('.card-wrapper');

    let heading=document.querySelector('.head');
    heading.innerHTML+=Object.keys(cards).length+' автомобилей в наличии';
    
    let toArray = Object.values(cards);
    let sortedByYearAsc = [...toArray].sort((a, b) => a.year - b.year);
    let sortedByPriceAsc = [...toArray].sort((a, b) => a.price - b.price);
    let sortedByRunAsc = [...toArray].sort((a, b) => a.run - b.run);
    
    let sortedByYearDesc = [...toArray].sort((a, b) => a.year - b.year).reverse();
    let sortedByPriceDesc = [...toArray].sort((a, b) => a.price - b.price).reverse();
    let sortedByRunDesc = [...toArray].sort((a, b) => a.run - b.run).reverse();
    let sortedByDiscountDesc = [...toArray].sort((a, b) => a.discount - b.discount).reverse();
    
    let cardsSortedByYearAsc = {
        ...sortedByYearAsc
    }
    let cardsSortedByPriceAsc = {
        ...sortedByPriceAsc
    }
    let cardsSortedByRunAsc = {
        ...sortedByRunAsc
    }
    let cardsSortedByYearDesc = {
        ...sortedByYearDesc
    }
    let cardsSortedByPriceDesc = {
        ...sortedByPriceDesc
    }
    let cardsSortedByRunDesc = {
        ...sortedByRunDesc
    }
    let cardsSortedByDiscountDesc = {
        ...sortedByDiscountDesc
    }
    
    function createCards(){
        wrapper.innerHTML= "";
    
        for(let key in elems){
            let content = '<div class="card" id="'+elems[key].id+'"><img src="'+elems[key].img+'"><div class="discount"><p class="discount-amount">-'+parseInt(parseFloat((elems)[key].discount)*100)+'%</p></div><div class="info-block"><div class="row"><div class="name-model"><p>'+elems[key].brand+'</p><p>'+elems[key].model+'</p></div><p>'+elems[key].year+'</p></div><div class="row"><p>'+elems[key].run+' км</p><p>'+elems[key].engine+'</p><p>'+elems[key].body+'</p></div></div><div class="bottom-row"><p>'+parseInt(parseFloat(elems[key].price)*parseFloat(elems[key].discount))+' р.</p><a href="#"><p>Просмотр автомобиля</p></a></div></div>';
            wrapper.innerHTML+= content;
        }
    }
    
    let elems={};
    
    elems=cardsSortedByDiscountDesc;
    createCards();
    
    function getValue(selectObject) {
        value = selectObject.value;
        if(value=="price_asc"){
            elems=cardsSortedByPriceAsc;
            createCards();
            console.log(elems);
        }
        if(value=="price_desc"){
            elems=cardsSortedByPriceDesc;
            createCards();
            console.log(elems);
        }
        if(value=="run_asc"){
            elems=cardsSortedByRunAsc;
            createCards();
            console.log(elems);
        }
        if(value=="run_desc"){
            elems=cardsSortedByRunDesc;
            createCards();
            console.log(elems);
        }
        if(value=="year_asc"){
            elems=cardsSortedByYearAsc;
            createCards();
            console.log(elems);
        }
        if(value=="year_desc"){
            elems=cardsSortedByYearDesc;
            createCards();
            console.log(elems);
        }
        if(value=="discount"){
            elems=cardsSortedByDiscountDesc;
            createCards();
            console.log(elems);
        }
    };
}
