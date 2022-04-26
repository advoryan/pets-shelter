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
alert (`Большое спасибо, что выделили время проверке моей работе!
На текущий момент есть только слайдер, страницы на pets и бургер-меню.
Буду очень благодарен за замечания и предложения по ним, а также за возможность что-то исправить!!!
Очень прошу дать мне ещё пару дней для реализации!!!`)

// Burger Menu
var menuIcon = document.querySelector(".toggle-menu-icon");
var menuDrawer = document.querySelector(".menu-drawer");
var logo = document.querySelector(".logo__title");
var blackout = document.querySelector(".blackout");
var noScroll = document.querySelector(".noScroll");

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle("active");
    menuDrawer.classList.toggle("open");
    logo.classList.toggle("display-none");
    blackout.classList.toggle("open");
    noScroll.classList.toggle('noScroll-active');
})

var drawerLinks = document.querySelectorAll(".nav-link");
drawerLinks.forEach(item => {
    item.addEventListener('click', () => {
        menuIcon.classList.toggle("active");
        menuDrawer.classList.toggle("open");
        blackout.classList.remove("open");
        noScroll.classList.toggle('noScroll-active');
    })
});

blackout.addEventListener('click', () => {
    menuIcon.classList.toggle("active");
    menuDrawer.classList.toggle("open");
    blackout.classList.remove("open");
    noScroll.classList.toggle('noScroll-active');
});


// CAROUSEL 1280+ 768+ 320+
const BTN_LEFT = document.querySelector(".btn-slider--left");
const BTN_RIGHT = document.querySelector(".btn-slider--right");
const CAROUSEL = document.querySelector('.slider__items');

const moveLeft = () => {
    CAROUSEL.classList.add("transition-left");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
  };
  
 const moveRight = () => {
    CAROUSEL.classList.add("transition-right");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
};

/*-------------------------*/

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

CAROUSEL.addEventListener("animationend", (animationEvent) => {

    if (animationEvent.animationName === "move-left" ||
        animationEvent.animationName === "move-left768" || 
        animationEvent.animationName === "move-left320") {

        CAROUSEL.classList.remove("transition-left");
        showItems(slide('left')[0]);
    } else {

        CAROUSEL.classList.remove("transition-right");
        showItems(slide('right')[0]);
    }

    BTN_LEFT.addEventListener("click", moveLeft);
    BTN_RIGHT.addEventListener("click", moveRight);
});

//Стартовая расстановка карточек
function sructureBuilder() {
    switch (petsPerPage()) {
        case 3:
            return petsStructure = [7,1,5,4,0,2,5,1,3];
            break;
        case 2:
            return petsStructure = [1,5,4,0,2,5];
            break;
        case 1:
            return petsStructure = [4,0,2];
            break;
    }
};
sructureBuilder();


// ОТРИСОВЫВАЕМ
function showItems(pattern) {
    let slider__block__HTML = '';
    let template = '';
    CAROUSEL.innerHTML = "";
        
        for (let i=0; i < pattern.length; i++) {

            template += 
                `<div class="slider__item">
                    <div class="card slider__card">
                        <img class="card__img" src="${PETS[pattern[i]].img}" alt="pets-katrine"/>
                        <h3 class="card__name">${PETS[pattern[i]].name}</h3>
                        <button class="btn card__btn btn--card btn--background">Learn more</button>
                    </div>
                </div>`;
        }
    CAROUSEL.insertAdjacentHTML('afterbegin', template);
}
// ПЕРВИЧНАЯ ОТРИСОВКА БЛОКОВ ПО СТАРТОВОМУ ШАБЛОНУ

showItems(petsStructure);


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
            showItems(sructureBuilder());
    } else if (
        (bodyWidth < 1280 && bodyWidth >= 768) &&
        (currentBodySize >= 1280 || currentBodySize < 768) ) {
            currentBodySize = bodyWidth;
            console.log(`768 resize reload ${bodyWidth} ${currentBodySize}`)
            showItems(sructureBuilder());
            
    } else if (
        bodyWidth >= 1280 &&
        currentBodySize < 1280) {
            currentBodySize = bodyWidth;
            console.log(`1280 resize reload ${bodyWidth} ${currentBodySize}`);
            showItems(sructureBuilder());
    }
};

// КОЛИЧЕСТВО КАРТОЧЕК НА СТРАНИЦЕ
function petsPerPage() {
    let bodyWidth = document.body.scrollWidth;
    let perPageCount;
        +bodyWidth >=1280 ? perPageCount = 3 : 
        +bodyWidth >=768 ?  perPageCount = 2 :
                            perPageCount = 1 ;
    return perPageCount
}


// рандом от 0 до 7
const random = () => Math.floor(Math.random() * PETS.length);


// НОМЕРА ЭЛЕМЕНТОВ НА ЭКРАНЕ
function elementsOnScreen() {
    let petElems = CAROUSEL.querySelectorAll('.card__name');
    let curElems = []; 

    for (let i=0; i < perPageCount; i++) {
        curElems.push(petElems[perPageCount + i + (3 - perPageCount )].innerHTML)
    }

    let curElemsNum = [];
    //имена в номера PETS
    for (let i=0; i < curElems.length; i++){
        for (let ii=0; i < PETS.length; ii++){
            if (curElems[i] === PETS[ii].name) {
                curElemsNum.push(ii);
                break
            }
        }
    };
    return curElemsNum;
}


// НА ВХОД >>> МАССИВ ИМЕН |PETS| НА ВЫХОДЕ>>> массив с номерами
function PetTransition(arr) {
    let result = [];
    for (let i=0; i <= arr.length; i++) {
        for (let ii=0; ii < PETS.length; ii++) {
            if (arr[i] === PETS[ii].name) {
                result.push(ii);
                break
            }
        }
    };
    return result
}


function slide(side) {
    console.log(`Направление движения в начале функции: ${side}`);
// ОПРЕДЕЛЕНИЕ КОЛИЧЕСТВА НА ЭКРАНЕ
    let perPageCount = petsPerPage();
        console.log(`petsPerPage = ${perPageCount}`);
        
    let petElems = CAROUSEL.querySelectorAll('.card__name');
    let curElems = []; 
    let allElems = [];

    // только на экране как имена
    for (let i=0; i < perPageCount; i++) {
        // console.log(i);
        // console.log(perPageCount + i -1);
        // console.log(petElems[i]);

        // console.log(curElems.push(petElems[i].innerHTML));
        // console.log(curElems.push(petElems[perPageCount + i + (3 - perPageCount)].innerHTML));
        
    }
    // все как имена
    for (let i=0; i < petElems.length; i++) {
        allElems.push(petElems[i].innerHTML)
    }
        
    // ПЕРВОД ИМЕН В НОМЕРА КАРТОЧЕК PETS
    let curElemsNum = PetTransition(curElems);
    let allCurElemsNum = PetTransition(allElems);
    
// СЛЕДУЮЩИЕ ЭЛЕМНЕТЫ В НУЖНОМ КОЛИЧЕСТВЕ
    function indexes() {
        let noDoudle;

        side == "left" ? 
            noDoudle = allCurElemsNum.slice(0, perPageCount) :
            noDoudle = allCurElemsNum.slice(-perPageCount) ;
        console.log(`____идем ${side} не повторять ${noDoudle}`);

        let NextEl = [];
        while (NextEl.length <= perPageCount-1) {
            let item = random();
            if (!noDoudle.includes(item) && !NextEl.includes(item)){
                NextEl.push(item);
            }
        };
        return NextEl
    }
    let nextElems = indexes();

// НОВАЯ СТРУКТУРА
    return side == "left" ? 
        [[...nextElems, ...allCurElemsNum.slice(0, perPageCount * 2)], allCurElemsNum] :
        [[...allCurElemsNum.slice(-perPageCount*2), ...nextElems], allCurElemsNum]

}
// console.log(petsStructure);
// console.log(slide('left')[0]);
// console.log(slide('right')[0]);



console.log("---------------LEARN MORE---------------------")

const CARDS = document.querySelectorAll('.card');
const MODAL_WINDOW_WRAPPER = document.querySelector('.modal-window--wrapper');
const MODAL_WINDOW = document.querySelector('.modal-window');

for (let elem of CARDS) {
    // console.log(elem.querySelector(".card__name").innerText)
    elem.addEventListener('click', event => {
        console.log(event.currentTarget.querySelector(".card__name").innerText);
        MODAL_WINDOW_WRAPPER.classList.add('modal-display');

    MODAL_WINDOW.innerHTML = `${event.currentTarget.querySelector(".card__name").innerText}`

    })
}









 




