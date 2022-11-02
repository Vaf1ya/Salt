window.addEventListener('DOMContentLoaded', function (e) {
    //прокрутка при клике

    const menuLinksStart = document.querySelectorAll('.header__menu[data-goto]');
    const menuLinksEnd = document.querySelectorAll('.footer__menu[data-goto]');
    if (menuLinksStart.length && menuLinksEnd.length > 0) {
        menuLinksStart.forEach((menuLinksStart) => {
            menuLinksStart.addEventListener('click', onMenuLinckStartClick);
        });
        function onMenuLinckStartClick(e) {
            const menuLinkStart = e.target;
            if (menuLinkStart.dataset.goto && document.querySelector(menuLinkStart.dataset.goto)) {
                const gotoBlockStart = document.querySelector(menuLinkStart.dataset.goto);
                const gotoBlockStartValue = gotoBlockStart.getBoundingClientRect().top;
                if (iconMenu.classList.contains('active')) {
                    document.body.classList.remove('lock');
                    iconMenu.classList.remove('active');
                    menuBody.classList.remove('active');
                }

                window.scrollTo({
                    top: gotoBlockStartValue + window.pageYOffset,
                    behavior: 'smooth',
                });
                e.preventDefault();
            }
        }
        menuLinksEnd.forEach((menuLinksEnd) => {
            menuLinksEnd.addEventListener('click', onMenuLinckEndClick);
        });
        function onMenuLinckEndClick(e) {
            const menuLinkEnd = e.target;
            if (menuLinkEnd.dataset.goto && document.querySelector(menuLinkEnd.dataset.goto)) {
                const gotoBlockEnd = document.querySelector(menuLinkEnd.dataset.goto);
                const gotoBlockEndValue = gotoBlockEnd.getBoundingClientRect().top;
                window.scrollTo({
                    top: gotoBlockEndValue + window.pageYOffset,
                    behavior: 'smooth',
                });
                e.preventDefault();
            }
        }
    }    
    
    //изминение меню слайдера

    const navSlider = document.querySelector('.header__slider-nav');
    const img = navSlider.querySelectorAll('img');
    navSlider.addEventListener('click', (e) => {
        
        img.forEach((el) => {
            el.setAttribute('src', './links/img/sliderNavPassiv.svg');
        });
        e.target.setAttribute('src', './links/img/sliderNavActiv.svg');
    });

    //Меню Бургер

    const iconMenu = document.querySelector('.header__menu-icon');
    const menuBody = document.querySelector('.header__menu');
    if (iconMenu) {
        iconMenu.addEventListener('click', function (e) {
            document.body.classList.toggle('lock');
            iconMenu.classList.toggle('active');
            menuBody.classList.toggle('active');
        });
    }

    const outMoreLogoLinck = document.querySelectorAll('.header__outMore-logo-linck[data-goto]');
    if (outMoreLogoLinck.length > 0) {
        outMoreLogoLinck.forEach((outMoreLogoLinck) => {
            outMoreLogoLinck.addEventListener('click', function (e) {
                e.preventDefault();
                const outMoreLogoLinckEl = e.target;
                console.log(e);
                if (outMoreLogoLinckEl.dataset.goto && document.querySelector(outMoreLogoLinckEl.dataset.goto)) {
                    const gotoBlock = document.querySelector(outMoreLogoLinckEl.dataset.goto);
                    const gotoBlockValue = gotoBlock.getBoundingClientRect().top;
                    window.scrollTo({
                        top: gotoBlockValue + window.pageYOffset,
                        behavior: 'smooth',
                    });
                }
            });
        });
    }

    //контроль видео

    let videoStart = document.querySelector('.product__video');
    let video = document.querySelector('.product__video-form');
    videoStart.addEventListener('click', function (e) {
        video.classList.remove('display-none');
        videoStart.classList.add('display-none');
    });
    video.addEventListener('click', function (e) {
        video.classList.add('display-none');
        videoStart.classList.remove('display-none');
    });

    //валидация формы

    const contactForm = document.getElementById('contact__content-form');
    contactForm.addEventListener('submit', funcContactForm);

    function funcContactForm(e) {
        e.preventDefault();

        let FirstName = contactForm.FirstName.value;
        let LastName = contactForm.LastName.value;
        let Email = contactForm.Email.value;
        let Textarea = contactForm.Textarea.value;
        let FirstNameBlock = contactForm.FirstName;
        let LastNameBlock = contactForm.LastName;
        let EmailBlock = contactForm.Email;
        let TextareaBlock = contactForm.Textarea;
        function validateEmail(Email) {
            var pattern =
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(Email);
        }

        if (FirstName === '') {
            FirstNameBlock.classList.add('error_form');
            FirstNameBlock.classList.remove('error_form-pas');
        } else if (/^[\s а-яА-Я]+$/.test(FirstName) === false) {
            FirstNameBlock.classList.remove('error_form-pas');
            FirstNameBlock.classList.add('error_form');
            document.getElementById('errorFirstName').innerHTML = 'First name is not correct';
        } else {
            document.getElementById('errorFirstName').innerHTML = '';
            FirstNameBlock.classList.add('error_form-pas');
        }

        if (LastName === '') {
            LastNameBlock.classList.add('error_form');
            LastNameBlock.classList.remove('error_form-pas');
        } else if (/^[\s а-яА-Я]+$/.test(LastName) === false) {
            LastNameBlock.classList.remove('error_form-pas');
            LastNameBlock.classList.add('error_form');
            document.getElementById('errorLastName').innerHTML = 'Last тame is not correct';
        } else {
            document.getElementById('errorLastName').innerHTML = '';
            LastNameBlock.classList.add('error_form-pas');
        }

        if (Email === '') {
            EmailBlock.classList.add('error_form');
            EmailBlock.classList.remove('error_form-pas');
        } else if (!validateEmail(Email)) {
            EmailBlock.classList.remove('error_form-pas');
            EmailBlock.classList.add('error_form');
            document.getElementById('errorEmail').innerHTML = 'Email address is not correct';
        } else {
            document.getElementById('errorEmail').innerHTML = '';
            EmailBlock.classList.add('error_form-pas');
        }

        if (Textarea === '') {
            TextareaBlock.classList.add('error_form');
            TextareaBlock.classList.remove('error_form-pas');
        } else {
            TextareaBlock.classList.add('error_form-pas');
        }
    }
});
