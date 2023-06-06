(function () {
    "use strict";
    const root = document.documentElement;
    const navToggle = document.querySelector("#js-navToggle");
    navToggle.addEventListener("click", function () {
        root.classList.toggle("show-nav");
        console.log(1);
    });


    const eventPP = document.querySelector("#js-eventPP");
    if (eventPP) {
        const eventOpen = document.querySelectorAll(".js-eventOpen");
        const closeEventPP = function (event) {
            function close() {
                document.removeEventListener("keyup", closeEventPP);
                eventPP.removeEventListener("click", closeEventPP);
                root.classList.remove("show-event-popup");
            }

            switch (event.type) {
                case "keyup":
                    if (event.key === "Escape" || event.keyCode === 27) close();
                    break;
                case "click":
                    if (
                        event.target === this ||
                        event.target.classList.contains("js-ppCloseBtn")
                    )
                        close();
                    break;
            }
        };

        eventOpen.forEach(item => {
            item.addEventListener("click", function () {
                console.log("js-eventOpenBtn")
                root.classList.add("show-event-popup");
                document.addEventListener("keyup", closeEventPP);
                eventPP.addEventListener("click", closeEventPP);
            });
        })
    }

    const swipers = document.querySelectorAll(".js-swiper");
    swipers.forEach(function (swpr) {
        new Swiper(swpr, {
            updateOnWindowResize: true,
            slidesPerView: "auto",
            freeMode: true,
            spaceBetween: 0,
            speed: 500,
            grabCursor: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            navigation: {
                nextEl: ".swiper-arrow-next",
                prevEl: ".swiper-arrow-prev",
                disabledClass: "arrow--disabled"
            }
        });
    });
    $().ready(function () {
        $(".feedback").validate({
            rules: {
                email: {
                    required: true,
                    email: true
                },
                agree: "required"
            },
            messages: {
                email: "Введите корректный адрес электронной почты",
                agree: "Необходимо подтвердить согласие на обработку данных"
            }
        });

        $(".form").validate({
            rules: {
                email: {
                    required: true,
                    email: true
                },
                name: "required",
                last_name: "required",
                phone: "required",
                agree: "required"
            },
            messages: {
                name: "Укажите имя",
                last_name: "Укажите фамилию",
                phone: "Введите номер телефона",
                email: "Введите корректный адрес электронной почты",
                agree: "Необходимо подтвердить согласие на обработку данных"
            }
        });
    });

    const mobileMask = $('.js-mobileMask');
    if (mobileMask.length) {
        mobileMask.mask('+7 (000) 000 00 00', { placeholder: "+7 (___) ___ __ __" });
    }

    const dateField = $(".js-dateField");
    if (dateField.length) {
        const pickerInit = function (pick) {
            const dateInput = pick.find(".js-dateInput");
            const dateDay = pick.find(".js-dateDay");
            const dateMonth = pick.find(".js-dateMonth");
            const dateYear = pick.find(".js-dateYear");
            const dateConfig = {
                autoClose: true,
                minDate: new Date(),
                navTitles: {
                    days: "MMMM <i>yyyy</i>"
                },
                onSelect: function ({ date }) {
                    dateDay.val(date ? ("0" + date.getDate()).slice(-2) : "");
                    dateMonth.val(date ? ("0" + (date.getMonth() + 1)).slice(-2) : "");
                    dateYear.val(date ? date.getFullYear() : "");
                }
            };        new AirDatepicker(dateInput[0], dateConfig);
        };
        $.each(dateField, function (i) {
            pickerInit($(this));
        });}
})();
