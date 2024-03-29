// классы для карточек
window.addEventListener("DOMContentLoaded", () => {
    class MenuCart {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentSelector); // записали ДОМ элемент
            this.classes = classes;
            this.transfer = 27; // курс валюты
            this.changeToUAH();
        }
        changeToUAH() {
            this.price = Math.round(+this.price * this.transfer);
        }
        //формирование верстки
        render() {
            // проверка на наличия дополнительных классов переданных через ...classes
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            // создаем элемент, помещаем верстку, дополняем данными которые приходят и помещаем на страницу
            const element = document.createElement("div");
            
            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>`;
            this.parent.append(element);
        }
    }
    // const div = new MenuCart();
    // div.render(); /
    // используем метод и объект на месте, без ипользования записи в переменну
    new MenuCart(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        8.48,
        ".menu .container", 
        'menu__item',
        'big'
    ).render();
    new MenuCart(
        "img/tabs/elite.jpg",
        "elite",
        "Меню “Премиум”",
        "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
        20.38,
        ".menu .container", 
        'menu__item',
        'big'
    ).render();
    new MenuCart(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
        15.91,
        ".menu .container", 
        'menu__item',
        'big'
    ).render();
});
