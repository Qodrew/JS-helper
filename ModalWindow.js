window.addEventListener("DOMContentLoaded", () => {
    // ищем кнопки вызывающие модальное окно и указываем в инлайне html 'data-modal'
    // а так же указываем модальному окну data-close чтобы могли его закрыть
    const modal = document.querySelector(".modal"),
        modalCloseBtn = modal.querySelector("[data-close]"),
        modalActiveBtn = document.querySelectorAll("[data-modal]");

    //т.к. это массив и сразу навесить на массив слушателя нельзя
    modalActiveBtn.forEach((btn) => {
        btn.addEventListener("click", openModal);
    });

    function openModal() {
        modal.classList.add("show");
        modal.classList.remove("hide");
        // чтобы страница не прокручивалась
        document.body.style.overflow = "hidden";
        // провека на самостоятельное открытие модлаьного окна, чтобы если открыли раньше, то по таймеру снова не появлялось
        clearInterval(modalTimerId);
    }

    function closeModal() {
        modal.classList.add("hide");
        modal.classList.remove("show");
        document.body.style.overflow = "";
    }

    modalCloseBtn.addEventListener("click", closeModal);

    // добавляем скрытие модального окна при клике на области вокруг модального окна, называемой подложкой
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // добавляем закрытие на клавишу esc

    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape" && modal.classList.contains("show")) {
            closeModal();
        }
    });

    // открытие модального окна через определенное время
    const modalTimerId = setTimeout(openModal, 5000);

    function showModalByScroll() {
        //кол-во пикселей в данный момент + высота клиентского окна >= вся высота скролла
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll); // если долистали до конца, то показывается модальное окно
        }
    }

   
    window.addEventListener('scroll', showModalByScroll);
});

// чтобы работать через toggle необходимо сначала добавить модальному окну класс show

// modalActiveBtn.addEventListener("click", () => {
//     modal.classList.toggle('show');
//     // чтобы страница не прокручивалась
//     document.body.style.overflow = 'hidden';
// });

// modalCloseBtn.addEventListener("click", () => {
//     modal.classList.toggle('show');
//     document.body.style.overflow = '';
// });
