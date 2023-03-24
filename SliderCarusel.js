const slides = document.querySelectorAll('.offer__slide'),
          prev = document.querySelector('.offer__slider-prev'),
          next = document.querySelector('.offer__slider-next'),
          total = document.querySelector('#total'),
          current = document.querySelector('#current'),
          slidesWrapper = document.querySelector('.offer__slider-wrapper'),
          slidesField = document.querySelector('.offer__slider-inner'),
          width = window.getComputedStyle(slidesWrapper).width;// для получения ширины

    // 87 усовершенствованный через обертывание слайдов в offer__slider-inner
    slidesField.style.width = 100 * slides.length +'%'; // помещаем все слайды во внутрь slidesField
    slidesField.style.display = 'flex'; // слайды в линию
    slidesField.style.transition = '0.5s all'; // прокрутка

    slidesWrapper.style.overflow = 'hidden'; // скрываем слайды вылазившие
    let slideIndex = 1;
    let offset = 0; // ориентир отступа

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = `${slideIndex}`;
    }
    
    slides.forEach(slide => {
        slide.style.width = width; // делаем слайды одинаковыми по ширине
    });
    next.addEventListener('click', () => {
        // обрезаем width содержащую строку ('400px') и делаем число без 'px'
        if (offset === +width.slice(0, width.length - 2) * (slides.length - 1)) {
            offset = 0;
        } else { // смещение слайда
            offset += +width.slice(0, width.length -2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    });
    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1); // последний слайд
        } else { // смещение слайда
            offset -= +width.slice(0, width.length -2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    });
    // простой
    // let countSlide = 1;
    // showSlides(countSlide);
    
    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }

    // function showSlides(n) {
    //     if (n < 1) {
    //         countSlide = slides.length;
    //     }
    //     if (n > slides.length) {
    //         countSlide = 1;
    //     }
    //     slides.forEach(item => item.style.display = 'none');
    //     slides[countSlide - 1].style.display = 'block';
    //     if (countSlide < 10) {
    //         current.textContent = `0${countSlide}`;
    //     } else {
    //         current.textContent = countSlide;
    //     }
    // }
    // function plusSlide(n) {
    //     showSlides(countSlide += n);
    // }
    // prev.addEventListener('click', () => {
    //     plusSlide(-1);
    // })
    // next.addEventListener('click', () => {
    //     plusSlide(1);
    // })
    
    // 86 slider (simple)

    // 88 dots_slider
    const offerSlider = document.querySelector(".offer__slider");
    offerSlider.style.position = "relative";
    const caruselIndic = document.createElement("ol"),
        dots = []; // для переключения слайдов
    caruselIndic.classList.add("carosel-indicators");
    caruselIndic.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    offerSlider.append(caruselIndic);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("li");
        dot.setAttribute("data-slide-to", i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        if (i == 0) {
            dot.style.opacity = 1;
        }
        caruselIndic.append(dot);
        dots.push(dot);
    }

    dots.forEach((dot) => {
        dot.addEventListener("click", (e) => {
            const slideTo = e.target.getAttribute("data-slide-to");

            slideIndex = slideTo;
            offset = +width.slice(0, width.length - 2) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;
            
            if (slides.length < 10) {
                current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = slideIndex;
            }

            dots.forEach((dot) => (dot.style.opacity = ".5"));
            dots[slideIndex - 1].style.opacity = 1; // для выделения
        });
    });

    // 88 dots_slider
