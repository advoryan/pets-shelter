const PETS = [
    {
      "name": "Jennifer",
      "img": "../../assets/img/pets-jennifer.jpg",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/img/pets-sophia.jpg",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/img/pets-woody.jpg",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/img/pets-scarlet.jpg",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/img/pets-katrine.jpg",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/img/pets-timmy.jpg",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/img/pets-freddie.jpg",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/img/pets-charly.jpg",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
];

// Burger Menu

var menuIcon = document.querySelector(".toggle-menu-icon");
var menuDrawer = document.querySelector(".menu-drawer");
var logo = document.querySelector(".logo__title");
var subtitle = document.querySelector(".logo__subtitle");
var blackout = document.querySelector(".blackout");
let line = document.querySelectorAll("line");
var noScroll = document.querySelector(".noScroll");

const burgerToLight = () => { 
    line.forEach ( item => item.attributes.stroke.value = "#F1CDB3");
}
const burgerToDark = () => { 
    line.forEach ( item => item.attributes.stroke.value = "#000000");
}

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle("active");
    menuDrawer.classList.toggle("open");
    logo.classList.toggle("display-none")
    blackout.classList.toggle("open");
    logo.classList.toggle("logo__title--menu");
    subtitle.classList.toggle("logo__subtitle--menu");
    noScroll.classList.toggle('noScroll-active');        
})

var drawerLinks = document.querySelectorAll(".nav-link")

drawerLinks.forEach(item => {
    item.addEventListener('click', () => {
        menuIcon.classList.toggle("active");
        menuDrawer.classList.toggle("open");
        blackout.classList.remove("open");
        logo.classList.toggle("logo__title--menu");
        subtitle.classList.toggle("logo__subtitle--menu");
        noScroll.classList.toggle('noScroll-active');
    })
})

blackout.addEventListener('click', () => {
    menuIcon.classList.toggle("active");
    menuDrawer.classList.toggle("open");
    blackout.classList.remove("open");
    logo.classList.toggle("logo__title--menu");
    subtitle.classList.toggle("logo__subtitle--menu");
    noScroll.classList.toggle('noScroll-active');
});

// // Pagination ----------------------------------------------------------
// При загрузке Our Pets формируется массив из 48 объектов питомцев. 
// Каждый из 8 приведенных на макете питомцев должен встречаться ровно 6 раз.

// Каждые 8, каждые 6, и каждые 3 карточки питомцев на странице не должны повторяться. 
// ------------------------------------------------------------------------

let cardsCount = 48; // <--- УСЛОВНО-ПОСТОЯННАЯ
let pageN = 1;

const START_BTN = document.querySelector('.btn--start');
const END_BTN = document.querySelector('.btn--end');
const PREV_BTN = document.querySelector('.btn--prev');
const NEXT_BTN = document.querySelector('.btn--next');
const ACTIVE_PAGE = document.querySelector('.btn__active');
const BUTTONS = document.querySelector('.friends__btns');

// КОЛИЧЕСТВО КАРТОЧЕК НА СТРАНИЦЕ
function cardsPerPage() {
    let bodyWidth = +document.body.scrollWidth;
    let perPageCount;
        bodyWidth >=1280 ?  perPageCount = 8 : 
        bodyWidth >=768  ?  perPageCount = 6 :
                            perPageCount = 3 ;
        return perPageCount
    }
    
    
// количество страниц
const pagesCount = () => Math.ceil(cardsCount / cardsPerPage());

// Генерация карточек
let items = [];
for (let i = 0; i < (6); i++) {
    items.push(...PETS.sort(() => Math.random() - 0.5));
};
console.log(items);

// ОТРИСОВЫВАЕМ
const WRAPPER = document.querySelector('.slider__items');

function showItems(pageN) {
    let nPages = pagesCount();
    console.log(nPages);
    console.log(items.length / nPages);
    let end = pageN * (items.length / nPages)-1;
    let start = end+1 - items.length / nPages;
    console.log(start + "-" + end);

    let template = '';
    WRAPPER.innerHTML = "";
        
        for (let i=start; i <= end; i++) {
            console.log(items[i].img);
            template += 
                `<div class="slider__item">
                    <div class="card slider__card">
                    <img class="card__img" src="${items[i].img}" alt="${items[i].name}-pic">
                    <h3 class="card__name">${items[i].name}</h3>
                    <button class="btn card__btn btn--card btn--background">Learn more</button>
                    </div>
                </div>`;
        }
    WRAPPER.insertAdjacentHTML('afterbegin', template);
}
showItems(pageN);


const disableButtons = () => {
    if (pageN === 1 ) {
        START_BTN.classList.add('btn__disabled');
        PREV_BTN.classList.add('btn__disabled');
    } else {
        START_BTN.classList.remove('btn__disabled'); 
        PREV_BTN.classList.remove('btn__disabled');
    }
    if (pageN === pagesCount()) { 
        NEXT_BTN.classList.add('btn__disabled');
        END_BTN.classList.add('btn__disabled');
    } else {
        NEXT_BTN.classList.remove('btn__disabled');
        END_BTN.classList.remove('btn__disabled');
    }
}


BUTTONS.addEventListener ('click', (event => {
 
    //START
    if (event.target == START_BTN && !START_BTN.classList.contains('btn__disabled')) {
        pageN = 1;
        showItems(pageN);
        ACTIVE_PAGE.innerText = 1;
    };
    //PREV
    if (event.target == PREV_BTN && !PREV_BTN.classList.contains('btn__disabled')) {
        showItems(--pageN);
        ACTIVE_PAGE.innerText = pageN;
    };
    //NEXT
    if (event.target == NEXT_BTN && !NEXT_BTN.classList.contains('btn__disabled')) {
        showItems(++pageN);
        ACTIVE_PAGE.innerText = pageN;
    };
    //END
    if (event.target == END_BTN && !END_BTN.classList.contains('btn__disabled')) {
        pageN = pagesCount();
        showItems(pageN);
        ACTIVE_PAGE.innerText = pageN;
    };
    
    disableButtons();
    
        console.log("кол-во "+pagesCount());
        console.log("текущая "+pageN);
}));



// СЛУШАЕМ ИЗМНЕНИЕ ШИРИНы ОКНА LISTENER
let currentBodySize = +document.body.scrollWidth;
let bodySizeListener = +document.body.scrollWidth;

window.onresize = function(event) {
    bodySizeListener = +document.body.scrollWidth;
    console.log(bodySizeListener);

    let bodyWidth = +document.body.scrollWidth;
    if (
        bodyWidth < 768 &&
        currentBodySize >= 768) {
            currentBodySize = bodyWidth;
            console.log(`320 resize reload ${bodyWidth} ${currentBodySize}`)
            showItems(1);
            disableButtons();
            ACTIVE_PAGE.innerText = '1';
    } else if (
        (bodyWidth < 1280 && bodyWidth >= 768) &&
        (currentBodySize >= 1280 || currentBodySize < 768) ) {
            currentBodySize = bodyWidth;
            console.log(`768 resize reload ${bodyWidth} ${currentBodySize}`)
            showItems(1);
            disableButtons();
            ACTIVE_PAGE.innerText = '1';
    } else if (
        bodyWidth >= 1280 &&
        currentBodySize < 1280) {
            currentBodySize = bodyWidth;
            console.log(`1280 resize reload ${bodyWidth} ${currentBodySize}`);
            showItems(1);
            disableButtons();
            ACTIVE_PAGE.innerText = '1';
    }
};

showItems(1);
ACTIVE_PAGE.innerText = '1';



// рандомная карта от 0 до 7
// const randomCard = () => Math.floor(Math.random() * PETS.length);

// ГЕНЕРАЦИЯ N КАРТОЧЕК
// function screenSizeCardGenerator() {
//     let result = [];
//     while (result.length <= perPageCount-1) {
//         let random = randomCard();
//         if (!result.includes(random)) { 
//             result.push(random) 
//         };
//     }
//     return result
// }



// генерация всех карточек
// function cardGenerator () {
//     let result = [];
//     for (let i=0; i < pagesCount(); i++) {
//         // result.push(screenSizeCardGenerator());
//         result = [...result, ...screenSizeCardGenerator()]
//     }
//     return result
// }

// console.log(cardGenerator());





// количество на странице !!!
// var itemsPerPage = 5;
// reference to keep track of current page
var currentPage = 1;