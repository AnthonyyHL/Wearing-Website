document.addEventListener("DOMContentLoaded", function() {
    function delay(n) {
        n = n || 2000;
        return new Promise((done) => {
            setTimeout(() => {
                done();
            }, n);
        });
    }

    function pageTransition() {
        var tl = gsap.timeline();
        tl.to(".loading-screen", {
            duration: 0.9,
            width: "100%",
            left: "0%",
            ease: "Expo.easeInOut",
        });

        tl.to(".loading-screen", {
            duration: 0.7,
            width: "100%",
            left: "100%",
            ease: "Expo.easeInOut",
            delay: 0.3,
        });
        tl.set(".loading-screen", { left: "-100%" });
    }

    function contentAnimation() {
        var tl = gsap.timeline();
        tl.from(".animate-this", { duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 0.2 });
    }

    barba.init({
        sync: true,

        transitions: [
            {
                async leave(data) {
                    const done = this.async();

                    pageTransition();
                    await delay(1000);
                    done();
                },

                async enter(data) {
                    contentAnimation();
                },

                async once(data) {
                    contentAnimation();
                },
            },
        ],
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let riSearchLine = document.querySelector('.ri-search-line');
    let search = document.querySelector('.search');

    riSearchLine.addEventListener('click', function () {
        search.classList.toggle('active');
    });

    // Agregar un manejador de eventos de clic en todo el documento
    document.addEventListener('click', function (event) {
        // Verificar si el clic no ocurrió en riSearchLine o en search
        if (!riSearchLine.contains(event.target) && !search.contains(event.target)) {
            // Si el clic fue en otro lugar, quitar la clase active de search
            search.classList.remove('active');
        }
    });
});


/*--------------------- NAVBAR SCROLL EFFECT -------------------*/
window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    var scrollDirection;
    let transparentBg = document.querySelector('.transparent-bg');
    let containerM = document.querySelector('.CONTAINER-MAN');
    let containerW = document.querySelector('.CONTAINER-WOMAN');

    if (window.scrollY > 20) {
        scrollDirection = 'abajo';
        transparentBg.classList.remove('active');
        containerM.classList.remove('category-selected');
        containerW.classList.remove('category-selected');
    } else {
        scrollDirection = '';
    }



    if (window.scrollY < 0) {
      scrollDirection = 'arriba';
    }

    header.classList.remove('arriba', 'abajo');
    if (scrollDirection) {
      header.classList.add(scrollDirection);
    }
});


/*--------------------- PC DASHBOARD (NAV BAR) -------------------*/
document.addEventListener("DOMContentLoaded", function() {
    let transparentBg = document.querySelector('.transparent-bg');

    let categoryLinkM = document.querySelector('.M-category-link');
    let categoryLinkW = document.querySelector('.W-category-link');
    let categoryLinkAc = document.querySelector('.Accesorios-category-link');
    let categoryLinkMaq = document.querySelector('.Maquillaje-category-link');

    let containerM = document.querySelector('.CONTAINER-MAN');
    let containerW = document.querySelector('.CONTAINER-WOMAN');

    let header = document.querySelector('.header');

    categoryLinkAc.addEventListener('mouseover', function () {
        containerM.classList.remove('category-selected');
        containerW.classList.remove('category-selected');
        transparentBg.classList.remove('active');
    });

    categoryLinkMaq.addEventListener('mouseover', function () {
        containerM.classList.remove('category-selected');
        containerW.classList.remove('category-selected');
        transparentBg.classList.remove('active');
    });

    categoryLinkM.addEventListener('mouseover', function () {
        containerM.classList.add('category-selected');
        containerW.classList.remove('category-selected');
        transparentBg.classList.add('active');
    });

    document.addEventListener('mouseover', function (event) {
        if (!categoryLinkM.contains(event.target) && !containerM.contains(event.target) && !header.contains(event.target)){
            containerM.classList.remove('category-selected');
            transparentBg.classList.remove('active');
        };
    });



    categoryLinkW.addEventListener('mouseover', function () {
        containerW.classList.add('category-selected');
        containerM.classList.remove('category-selected');
        transparentBg.classList.add('active');
    });

    document.addEventListener('mouseover', function (event) {
        if (!categoryLinkW.contains(event.target) && !containerW.contains(event.target) && !header.contains(event.target)){
            containerW.classList.remove('category-selected');
            transparentBg.classList.remove('active');
        };
    });
});




/*--------------------- MOBILE DASHBOARD (NAV BAR) -------------------*/
document.addEventListener("DOMContentLoaded", function() {
    let hamburger_icon = document.querySelector(".hamburger_icon");
    let dashboard = document.querySelector(".dashboard_container");
    const body = document.body;

    hamburger_icon.addEventListener("click", function() {
        dashboard.classList.toggle("active");
        hamburger_icon.classList.toggle("active");

        if (dashboard.classList.contains('active')) {
            // Agrega la propiedad overflow-y: hidden al body
            body.style.overflowY = 'hidden';
            let hamburgerIconThree = document.querySelector(".hamburger_icon .three");
            hamburgerIconThree.style.transform = "rotate(-45deg) translate(2px, 0px)";
        } else {
            // Elimina la propiedad overflow-y del body
            body.style.overflowY = 'auto';
            let hamburgerIconThree = document.querySelector(".hamburger_icon .three");
            hamburgerIconThree.style.transform = "none";
        }

    });

});

/*--------------------- MOBILE DASHBOARD (NAV BAR) | MAIN FUNCIONALITY -------------------*/
document.addEventListener("DOMContentLoaded", function() {
    let manOption = document.querySelector(".dashboard-options_list_man");
    let womanOption = document.querySelector(".dashboard-options_list_woman");

    let dash = document.querySelector(".dashboard-options_list");
    let categoriesMan = document.querySelector(".categories_man");
    let categoriesWoman = document.querySelector(".categories_woman");
    let exitMan = document.querySelector(".a_man");
    let exitWoman = document.querySelector(".a_woman");

    let hombre = document.querySelector(".hombre");
    let mujer = document.querySelector(".mujer");

    function dashDesactive(event) {
        if ((event.target === manOption) || (event.target === hombre)) {
            categoriesMan.classList.add("active");
            categoriesWoman.classList.remove("active");

            let hamburgerIconActiveThree = document.querySelector(".hamburger_icon.active .three");
            hamburgerIconActiveThree.style.transform = "rotate(-45deg) translate(-4px, -6px)";
        } else if ((event.target === womanOption) || (event.target === mujer)) {
            categoriesWoman.classList.add("active");
            categoriesMan.classList.remove("active");

            let hamburgerIconActiveThree = document.querySelector(".hamburger_icon.active .three");
            hamburgerIconActiveThree.style.transform = "rotate(-45deg) translate(-4px, -6px)";
        }

        /*logIn.classList.add("desactivate");*/
    }

    manOption.addEventListener("click", dashDesactive);
    womanOption.addEventListener("click", dashDesactive);
    exitMan.addEventListener("click", function() {
        categoriesMan.classList.remove("active");
        categoriesWoman.classList.remove("active");
        /*logIn.classList.add("active");*/
    });
    exitWoman.addEventListener("click", function() {
        categoriesMan.classList.remove("active");
        categoriesWoman.classList.remove("active");
        /*logIn.classList.remove("desactivate");*/
    });
});


/*--------------------- MOBILE DASHBOARD (NAV BAR) | MAIN FUNCIONALITY -------------------*/
document.addEventListener("DOMContentLoaded", function() {
    let manFootwearCategory = document.querySelector(".f_man");
    let manClothingCategory = document.querySelector(".c_man");
    let manBrandsCategory = document.querySelector(".b_man");

    let womanFootwearCategory = document.querySelector(".f_woman");
    let womanClothingCategory = document.querySelector(".c_woman");
    let womanBrandsCategory = document.querySelector(".b_woman");

    let containerFootwearMan = document.querySelector(".c_category_footwear_options_man");
    let containerClothingMan = document.querySelector(".c_category_clothing_options_man");
    let containerBrandsMan = document.querySelector(".c_category_brands_options_man");

    let containerFootwearWoman = document.querySelector(".c_category_footwear_options_woman");
    let containerClothingWoman = document.querySelector(".c_category_clothing_options_woman");
    let containerBrandsWoman = document.querySelector(".c_category_brands_options_woman");

    let manFootwear = document.querySelector(".footwear_m");
    let manClothing = document.querySelector(".clothing_m");
    let manBrands = document.querySelector(".brands_m");

    let womanFootwear = document.querySelector(".footwear_w");
    let womanClothing = document.querySelector(".clothing_w");
    let womanBrands = document.querySelector(".brands_w");

    let arrowManFootwear = document.querySelector(".a_man_footwear");
    let arrowManClothing = document.querySelector(".a_man_clothing");
    let arrowManBrands = document.querySelector(".a_man_brands");

    let arrowWomanFootwear = document.querySelector(".a_woman_footwear");
    let arrowWomanClothing = document.querySelector(".a_woman_clothing");
    let arrowWomanBrands = document.querySelector(".a_woman_brands");


    function dashMenusDesactive(event) {
        if ((event.target === manFootwearCategory) || (event.target === manFootwear)) {
            containerFootwearMan.classList.add("active");
            containerClothingMan.classList.remove("active");
            containerBrandsMan.classList.remove("active");

            containerFootwearWoman.classList.remove("active");
            containerClothingWoman.classList.remove("active");
            containerBrandsWoman.classList.remove("active");

        } else if ((event.target === manClothingCategory) || (event.target === manClothing)) {
            containerFootwearMan.classList.remove("active");
            containerClothingMan.classList.add("active");
            containerBrandsMan.classList.remove("active");

            containerFootwearWoman.classList.remove("active");
            containerClothingWoman.classList.remove("active");
            containerBrandsWoman.classList.remove("active");

        } else if ((event.target === manBrandsCategory) || (event.target === manBrands)) {
            containerFootwearMan.classList.remove("active");
            containerClothingMan.classList.remove("active");
            containerBrandsMan.classList.add("active");

            containerFootwearWoman.classList.remove("active");
            containerClothingWoman.classList.remove("active");
            containerBrandsWoman.classList.remove("active");
        } else if ((event.target === womanFootwearCategory) || (event.target === womanFootwear)) {
            containerFootwearMan.classList.remove("active");
            containerClothingMan.classList.remove("active");
            containerBrandsMan.classList.remove("active");

            containerFootwearWoman.classList.add("active");
            containerClothingWoman.classList.remove("active");
            containerBrandsWoman.classList.remove("active");
        } else if ((event.target === womanClothingCategory) || (event.target === womanClothing)) {
            containerFootwearMan.classList.remove("active");
            containerClothingMan.classList.remove("active");
            containerBrandsMan.classList.remove("active");

            containerFootwearWoman.classList.remove("active");
            containerClothingWoman.classList.add("active");
            containerBrandsWoman.classList.remove("active");
        } else if ((event.target === womanBrandsCategory) || (event.target === womanBrands)) {
            containerFootwearMan.classList.remove("active");
            containerClothingMan.classList.remove("active");
            containerBrandsMan.classList.remove("active");

            containerFootwearWoman.classList.remove("active");
            containerClothingWoman.classList.remove("active");
            containerBrandsWoman.classList.add("active");
        }

        /*logIn.classList.add("desactivate");*/
    }

    manFootwearCategory.addEventListener("click", dashMenusDesactive);
    manClothingCategory.addEventListener("click", dashMenusDesactive);
    manBrandsCategory.addEventListener("click", dashMenusDesactive);

    womanFootwearCategory.addEventListener("click", dashMenusDesactive);
    womanClothingCategory.addEventListener("click", dashMenusDesactive);
    womanBrandsCategory.addEventListener("click", dashMenusDesactive);

    arrowManFootwear.addEventListener("click", function() {
        containerFootwearMan.classList.remove("active");
        containerClothingMan.classList.remove("active");
        containerBrandsMan.classList.remove("active");

        containerFootwearWoman.classList.remove("active");
        containerClothingWoman.classList.remove("active");
        containerBrandsWoman.classList.remove("active");
    });
    arrowManClothing.addEventListener("click", function() {
        containerFootwearMan.classList.remove("active");
        containerClothingMan.classList.remove("active");
        containerBrandsMan.classList.remove("active");

        containerFootwearWoman.classList.remove("active");
        containerClothingWoman.classList.remove("active");
        containerBrandsWoman.classList.remove("active");
    });
    arrowManBrands.addEventListener("click", function() {
        containerFootwearMan.classList.remove("active");
        containerClothingMan.classList.remove("active");
        containerBrandsMan.classList.remove("active");

        containerFootwearWoman.classList.remove("active");
        containerClothingWoman.classList.remove("active");
        containerBrandsWoman.classList.remove("active");
    });
    arrowWomanFootwear.addEventListener("click", function() {
        containerFootwearMan.classList.remove("active");
        containerClothingMan.classList.remove("active");
        containerBrandsMan.classList.remove("active");

        containerFootwearWoman.classList.remove("active");
        containerClothingWoman.classList.remove("active");
        containerBrandsWoman.classList.remove("active");
    });
    arrowWomanClothing.addEventListener("click", function() {
        containerFootwearMan.classList.remove("active");
        containerClothingMan.classList.remove("active");
        containerBrandsMan.classList.remove("active");

        containerFootwearWoman.classList.remove("active");
        containerClothingWoman.classList.remove("active");
        containerBrandsWoman.classList.remove("active");
    });
    arrowWomanBrands.addEventListener("click", function() {
        containerFootwearMan.classList.remove("active");
        containerClothingMan.classList.remove("active");
        containerBrandsMan.classList.remove("active");

        containerFootwearWoman.classList.remove("active");
        containerClothingWoman.classList.remove("active");
        containerBrandsWoman.classList.remove("active");
    });
});


/*--------------------- MOBILE FOOTER FUNTIONALITY -------------------*/
document.addEventListener("DOMContentLoaded", function() {
    let footerOptionSupport = document.querySelector(".mobile_footer_support");
    let footerOptionSupportContainer = document.querySelector(".mobile_support_title");
    let footerOptionSupportTitle = document.querySelector(".mobile_footer_support_title");
    let footerOptionSupportArrow = document.querySelector(".mobile_footer_title_arrow");

    let footerOptionCompany = document.querySelector(".mobile_footer_company");
    let footerOptionCompanyContainer = document.querySelector(".mobile_company_title");
    let footerOptionCompanyTitle = document.querySelector(".mobile_footer_company_title");
    let footerOptionCompanyArrow = document.querySelector(".mobile_company_title_arrow");

    let footerOptionSubscription = document.querySelector(".mobile_footer_subscription");
    let footerOptionSubscriptionContainer = document.querySelector(".mobile_subscription_title");
    let footerOptionSubscriptionTitle = document.querySelector(".mobile_footer_subscription_title");
    let footerOptionSubscriptionArrow = document.querySelector(".mobile_subscription_title_arrow");

    function footerMenusInteraction(event) {
        if ((event.target === footerOptionSupportContainer) || (event.target === footerOptionSupportTitle) || (event.target === footerOptionSupportArrow)) {
            footerOptionSupport.classList.toggle("active");
        } else if ((event.target === footerOptionCompanyContainer) || (event.target === footerOptionCompanyTitle) || (event.target === footerOptionCompanyArrow)) {
            footerOptionCompany.classList.toggle("active");
        } else if ((event.target === footerOptionSubscriptionContainer) || (event.target === footerOptionSubscriptionTitle) || (event.target === footerOptionSubscriptionArrow)) {
            footerOptionSubscription.classList.toggle("active");
        }
    }

    footerOptionSupportContainer.addEventListener("click", footerMenusInteraction);
    footerOptionCompanyContainer.addEventListener("click", footerMenusInteraction);
    footerOptionSubscriptionContainer.addEventListener("click", footerMenusInteraction);
});