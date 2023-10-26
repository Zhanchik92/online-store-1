

window.addEventListener('DOMContentLoaded', () => {

// Modal window message
    const modalWindow = document.querySelector('.modal__window'),
        buttonOpenModal = document.querySelector('.button__open__modal'),
        imgClose = document.querySelector('img.close');

    buttonOpenModal.addEventListener('click', () => {
        modalWindow.style.display = 'block';
        buttonOpenModal.style.display = 'none';
    });

    imgClose.addEventListener('click', () => {
        modalWindow.style.display = 'none';
        buttonOpenModal.style.display = 'flex';
    });
});

// Menu
class Menu {
    constructor(parentSelector, parentSelector2, items, links) {
        this.parent = document.querySelector(parentSelector);
        this.parent2 = document.querySelector(parentSelector2);
        this.items = items;
        this.links = links;
    }

    renderItemMenu() {
        this.items.forEach(item => {
            const element = document.createElement('a');
            element.append(item);
            element.classList.add('item__style');
            this.parent.append(element); 

            if(window.innerWidth <= 920){
                const iconArrow =document.createElement('div');
                iconArrow.classList.add('icon__arrow');

                const spanArrow =document.createElement('span');
                iconArrow.append(spanArrow);

                element.append(iconArrow);                
            } 
        });

        this.links.forEach(link => {
            const elem = document.createElement('a');
            elem.classList.add('link__style');
            elem.append(link);
            this.parent2.append(elem);   
        });
 
    };
    
};
let menu = new Menu(
    '.menu__items',
    '.menu__links',
    ['ЖЕНЩИНАМ','МУЖЧИНАМ','АКСЕССУАРЫ'],
    ['СКИДКИ','ДОСТАВКА','КОНТАКТЫ'],
    ).renderItemMenu();

const menuItems = document.querySelector('.menu__items');
const containerSubmenu = document.querySelector('.container__submenu');
const tabsContent = document.querySelectorAll('.tabs__content');

if(window.innerWidth >= 920){
    menuItems.addEventListener('click', openSubmenu);

    function openSubmenu(event){
        
        const target = event.target;
        if(target && target.classList.contains('item__style')){
            
            const items = document.querySelectorAll('.item__style');
            items.forEach((item, i) => {
                if(target == item) {
                    hideCategories();
                    showСategories(i);
                };
            });
        };
    };
    function showСategories (i){
        containerSubmenu.style.display = 'flex';
        tabsContent[i].style.display = 'block';
    };
    function hideCategories(){
        tabsContent.forEach(tab => {

            tab.style.display = 'none';
        });
    };

    function closeSubmenu(event){
        const body = document.querySelector('body');
        body.addEventListener('click', (e) => {
            if(e.target.className !== 'item__style'){
                containerSubmenu.style.display = 'none';
            }
        })
    }
    closeSubmenu();

} 
    
// menu max-width:920px
if(window.innerWidth <= 920){
    const menuIcon = document.querySelector('.menu__icon'),
            menuBody = document.querySelector('.menu__body'),
            menuBodyList = document.querySelector('.menu__body_list');


    menuIcon.addEventListener('click', () => {
        menuBody.classList.toggle('_active');
        document.body.classList.toggle('_lock');
        menuBodyList.classList.toggle('_active');
    });
    menuItems.addEventListener('click', (event) => {
        const items = document.querySelectorAll('.item__style'),
            list = document.createElement('div'),
            tabsContent = document.querySelectorAll('.tabs__content'),
            arrows = document.querySelectorAll('.icon__arrow');

        tabsContent.forEach(tab => {
            tab.style.display = 'none';
        })

        items.forEach((item,i) => {
            const target = event.target;
            if(target == item){
                list.classList.add('list__submenu');
                list.append(tabsContent[i]);
                tabsContent[i].style.display = 'block';
                item.insertAdjacentElement("afterend",list);
                
            }
            
        });
        
        arrows.forEach((arrow,i) => {
            const target = event.target;
            
            if(target == arrow){
                list.classList.add('list__submenu');
                list.append(tabsContent[i]);
                tabsContent[i].style.display = 'block';
                arrow.insertAdjacentElement("afterend",list);
                arrow.style.transform = 'rotate(-90deg)'; 
            }
            
        });
        
    });

    menuBody.addEventListener('click', (e)=> {
        if(e.target && e.target.classList.contains('menu__body','_active')){
            menuBodyList.classList.remove('_active');
            menuBody.classList.remove('_active');
        }
        
    })
    const tabsLinks = document.querySelector('.tabs__links');
    menuBodyList.addEventListener('click', (e) => {
        if(e.target.className !== 'item__style'){
            tabsLinks.style.display = 'none';
        }
    })

};

// Popup__account
const bodyPopupAccount = document.querySelector('.body__popup__account'),
      iconAccount = document.querySelector('#icon__account'),
      buttonRegistration = document.querySelector('#button__registration'),
      canselIcons = document.querySelectorAll('.cansel__icon');

iconAccount.addEventListener('click', ()=> {
    bodyPopupAccount.classList.toggle('_active');
});

// Modal__registration

const popupAccount = document.querySelector('.popup__account'),
      modalRegistration = document.querySelector('.modal__registration'),
      btn_1 = document.querySelector('#btn_1');

buttonRegistration.addEventListener('click',() =>{
    popupAccount.style.display = 'none';
    modalRegistration.style.display = 'block';
})
canselIcons.forEach(canselIcon => {
    canselIcon.addEventListener('click', () => {
        bodyPopupAccount.classList.remove('_active');
    });
});


// Modal modal__login

const modalLogin = document.querySelector('.modal__login'),
      btn_3 = document.querySelector('#btn_3');

btn_1.addEventListener('click', ()=>{
    modalRegistration.style.display = 'none';
    modalLogin.classList.add('_active');
});
btn_3.addEventListener('click', ()=> {
    modalLogin.classList.remove('_active');
    modalRegistration.style.display = 'block';
})


// Product__cards

class MenuCard {
    constructor(id, src, alt, title, price, colors, size, parentSelector3,date ) {
        this.id = id;
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.price = price;
        this.colors = colors;
        this.size = size;
        this.transfer = 3.36;
        this.changeToBYN();
        this.parent = document.querySelector(parentSelector3);
        this.date = date;
        
    }

    changeToBYN() {
        this.price = Math.ceil(this.price * this.transfer);
    }

    render() {
        const card = document.createElement('div');
        card.classList.add('product__card-card')
        card.innerHTML =`
            <div class="card__item">
                <div class="card__img">
                    <img src=${this.src} alt=${this.alt}>
                </div>
                <h3 class="card__item-title">${this.title}</h3>
                <div class="card__item-price">${this.price + ' BYN'}</div>

            </div>
        `;
        this.parent.append(card);
        
        // Render filter color
        const cardItemColor = document.createElement('div');
        cardItemColor.classList.add('card__item-color');

        this.colors.forEach(elem => {
            const containerColor = document.createElement('div');
            containerColor.classList.add('container__color');
            containerColor.style.backgroundColor = `${elem}`;
            cardItemColor.append(containerColor);

        })
        card.append(cardItemColor);
        
        // Render filter size
        const cardItemSize = document.createElement('div');
        cardItemSize.classList.add('card__item-size');

        this.size.forEach(elem => {
            const containerSize = document.createElement('div');
            containerSize.classList.add('container__size');
            containerSize.innerText = `${elem}`;
            cardItemSize.append(containerSize);
        })
        
        card.append(cardItemSize);
        
        // Render btns
        const btns = document.createElement('button');
        btns.classList.add('btns');
        card.append(btns);

        const btnsAddBasket = document.createElement('button');
        btnsAddBasket.classList.add('btn__addBasket');
        btnsAddBasket.innerText = 'В корзину';
        btns.append(btnsAddBasket);

        const iconFav = document.createElement('button');
        iconFav.classList.add('icon__fav');
        iconFav.innerHTML = '<img src="/img/svg/favorite.svg" alt="">';
        btns.append(iconFav);
        
    };
    createDatabase(){
        let obj = {};
        obj.id = `${this.id}`;
        obj.price = `${this.price}`;
        obj.date = `${this.date}`;
        database.push(obj);
    }
};
    
let database = [];
const id_1 = new MenuCard(
    "id_1",
    "/img/women/TZ943Sh_belyi_1.webp",
    "Свитер женский",
    "Джемпер Romgil Т3943Ш",
    23.2,
    ['#FFFFE0'],
    ['42/44','46/48','50/52'],
    ".product__cards",
    "23.09.2023",
);
id_1.createDatabase();


const id_2 = new MenuCard(
    "id_2",
    "/img/women/320P_zhemchuzhnyi_seryi_1.webp",
    "Свитер женский",
    "Джемпер Romgil Т3320П",
    17.8,
    ['#C0C0C0','#DAA520','#B0E0E6'],
    ['42/44','46/48','50/52'],
    ".product__cards",
    "22.09.2023",
);
id_2.createDatabase();

const id_3 = new MenuCard(
    "id_3",
    "/img/women/515_bledno-zheltyi_1.webp",
    "Свитер женский",
    "Джемпер Romgil Т3415",
    18.3,
    ['#F0E68C','#D8BFD8'],
    ['42/44','46/48','50/52'],
    ".product__cards",
    "21.09.2023",
);
id_3.createDatabase();

const id_4 = new MenuCard(
    "id_4",
    "/img/women/TZ559_bezhevyi_5.webp",
    "Свитер женский",
    "Джемпер Romgil",
    15,
    ['#FFE4B5','#BDB76B','#FFC0CB','#8B4513'],
    ['42/44','46/48','50/52'],
    ".product__cards",
    "20.09.2023",
);
id_4.createDatabase();

const id_5 = new MenuCard(
    "id_5",
    "/img/women/photo_2_2023-09-27_16-26-40.jpg",
    "Свитер женский",
    "Свитер 0927-б2",
    36.5,
    ['#000000'],
    ['Универсальный'],
    ".product__cards",
    "18.09.2023",
);
id_5.createDatabase();

const id_6 = new MenuCard(
    "id_6",
    "/img/women/shopping.webp",
    "Свитер женский",
    "Джемпер (кофта) Reshilie",
    22.5,
    ['#FFF8DC','#FFB6C1'],
    ['42/44','46/48'],
    ".product__cards",
    "15.09.2023",
);
id_6.createDatabase();

const id_7 = new MenuCard(
    "id_7",
    "/img/women/515_bledno-zheltyi_1.webp",
    "Свитер женский",
    "Джемпер Romgil Т3415",
    18.3,
    ['#F0E68C','#D8BFD8'],
    ['42/44','46/48','50/52'],
    ".product__cards",
    "13.09.2023",
);
id_7.createDatabase();

const id_8 = new MenuCard(
    "id_8",
    "/img/women/75bfe517b9f544fa0c26d639e82f1705.jpg",
    "Свитер женский",
    "Вязаный свитер HALFISIN с высоким воротом",
    39,
    ['#90EE90'],
    ['42/44','46/48'],
    ".product__cards",
    "10.09.2023",
);
id_8.createDatabase();

const id_9 = new MenuCard(
    "id_9",
    "/img/women/TZ943Sh_belyi_1.webp",
    "Свитер женский",
    "Джемпер Romgil Т3943Ш",
    23.2,
    ['#FFFFE0'],
    ['42/44','46/48','50/52'],
    ".product__cards",
    "08.09.2023",
);
id_9.createDatabase();

const id_10 = new MenuCard(
    "id_10",
    "/img/women/320P_zhemchuzhnyi_seryi_1.webp",
    "Свитер женский",
    "Джемпер Romgil Т3320П",
    17.8,
    ['#C0C0C0','#DAA520','#B0E0E6'],
    ['42/44','46/48','50/52'],
    ".product__cards",
    "06.09.2023",
);
id_10.createDatabase();

const id_11 = new MenuCard(
    "id_11",
    "/img/women/515_bledno-zheltyi_1.webp",
    "Свитер женский",
    "Джемпер Romgil Т3415",
    18.3,
    ['#F0E68C','#D8BFD8'],
    ['42/44','46/48','50/52'],
    ".product__cards",
    "01.09.2023",
);
id_11.createDatabase();

const id_12 = new MenuCard(
    "id_12",
    "/img/women/TZ559_bezhevyi_5.webp",
    "Свитер женский",
    "Джемпер Romgil",
    15,
    ['#FFE4B5','#BDB76B','#FFC0CB','#8B4513'],
    ['42/44','46/48','50/52'],
    ".product__cards",
    "28.08.2023",
);
id_12.createDatabase();

const id_13 = new MenuCard(
    "id_13",
    "/img/women/photo_2_2023-09-27_16-26-40.jpg",
    "Свитер женский",
    "Свитер 0927-б2",
    36.5,
    ['#000000'],
    ['Универсальный'],
    ".product__cards",
    "26.08.2023",
);
id_13.createDatabase();

const id_14 = new MenuCard(
    "id_14",
    "/img/women/shopping.webp",
    "Свитер женский",
    "Джемпер (кофта) Reshilie",
    22.5,
    ['#FFF8DC','#FFB6C1'],
    ['42/44','46/48'],
    ".product__cards",
    "23.08.2023",
);
id_14.createDatabase();

const id_15 = new MenuCard(
    "id_15",
    "/img/women/515_bledno-zheltyi_1.webp",
    "Свитер женский",
    "Джемпер Romgil Т3415",
    18.3,
    ['#F0E68C','#D8BFD8'],
    ['42/44','46/48','50/52'],
    ".product__cards",
    "21.07.2023",
);
id_15.createDatabase();

const id_16 = new MenuCard(
    "id_16",
    "/img/women/75bfe517b9f544fa0c26d639e82f1705.jpg",
    "Свитер женский",
    "Вязаный свитер HALFISIN с высоким воротом",
    39,
    ['#90EE90'],
    ['42/44','46/48'],
    ".product__cards",
    "20.07.2023",
);
id_16.createDatabase();


let items = [id_1, id_2, id_3, id_4, id_5, id_6, id_7, id_8, 
            id_9, id_10, id_11, id_12,id_13,id_14,id_15,id_16];


// Pagination



let notesOnPage = 4;
let pagination = document.querySelector('.pagination');
let paginationList = document.querySelector('.pagination__list');
let countOfItems = Math.ceil(items.length/notesOnPage);

let itemsLi = [];
for(let i=1; i<=countOfItems; i++){
    let li = document.createElement('li');
    li.innerHTML = i
    paginationList.append(li);
    itemsLi.push(li);
}

function showPage(){
    let pageNum = 1;
    let notes = items.slice(0, notesOnPage);
    notes.forEach(note => {
        note.render();
    })
    itemsLi[0].classList.add('active');
    
}
showPage();

let active;
itemsLi.forEach(btn => {
    btn.addEventListener('click', function() {
        itemsLi[0].classList.remove('active');
        if(active) {
            active.classList.remove('active')
        }
        active = this;
        this.classList.add('active');
        let pageNum = this.innerHTML;      
        let start = (pageNum - 1) * notesOnPage;
        let end = start + notesOnPage;

        let notes = items.slice(start, end);
        
        const productCards = document.querySelector('.product__cards');
        productCards.innerHTML = '';
        notes.forEach(note => {
            note.render();
        })
        
    })
})
// Sort by price
let prices = [];
const productCards = document.querySelector('.product__cards');

function sortPrice(){    
    
    const checkSortSale = document.querySelector('select#filter__price');
    checkSortSale.addEventListener('click', sortByPrice);

    function sortByPrice(){
        const productCards = document.querySelector('.product__cards');

        for(let data of database){
            Object.keys(data).forEach(key =>{
                if(key == 'price'){
                    prices.push(+data[key]);
                    
                }
            })
            function sortAscending(a, b){
                return a > b ? 1 : b > a ? -1 : 0;
            }
            prices.sort(sortAscending);
        }
        
    }

    // replacedNode = productCards.replaceChild(productCards.children[1], productCards.children[0]);
    // productCards.append(replacedNode)

    
}
sortPrice();

