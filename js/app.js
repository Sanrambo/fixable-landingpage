
const nav_elements = document.querySelector('.navbar__list');
const navbar = document.querySelector('.nav-bar');


//Helper functions

//function for "setAttribute"
const setAttributes = (el, attrs) => {
    for (const key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}


//Build the nav's logo and menu list
const navv = () => {


    //adding logo
    let logo = document.createElement('a');
    setAttributes(logo, { "href": "#", "id": "logo" });
    navbar.appendChild(logo);

    let logo_img = document.createElement('img');
    setAttributes(logo_img, { 'src': './img/1x/logo.png', 'id': 'logo-img' });
    logo.appendChild(logo_img);

    //adding menu
    for (let i = 0; i < 6; i++) {

        let arr = ["About", "Services", "Devices", "Reviews", "Contact"];
        //Defining and adding the li tag
        let list = document.createElement('li');
        list.classList.add('list_el');
        nav_elements.appendChild(list);

        //Defining and adding the anchor tag and adding class and data-nav

        let link = document.createElement('a');
        link.classList.add('menu__link');
        setAttributes(link, { 'data-nav': 'section' + i });
        link.textContent = arr[i];
        list.appendChild(link);

    };

};


//scroll into view

const scrolling = () => {

    const nav_links = document.querySelectorAll('.menu__link');

    nav_links.forEach((element) => {

        element.addEventListener('click', () => {
            let toElement = document.getElementById(element.getAttribute("data-nav"));
            // toElement.scrollIntoView({ behavior: "smooth", block: "center" });
            toElement.scrollIntoView({ behavior: "smooth", block: "end" });
        })

    });

};

// in view port
const viewed = (element) => {
    const rect = element.getBoundingClientRect();
    let _viewed = (
        rect.top <= 100 &&
        rect.bottom > 100
    );
    return _viewed;
}

//Active in viewport

document.addEventListener('scroll', () => {

    const sec_landing = document.querySelectorAll('.here');
    const menu_item = document.querySelectorAll('.list_el');

    sec_landing.forEach((el, i) => {
        // console.log(menu_item[i]);
        if (viewed(el)) {
            menu_item[i].classList.add('inView');
        } else {

            menu_item[i].classList.remove('inView');
        }

    });
});

// build the button which brings to top of the page
const toUp = () => {

    const to_Top = document.querySelector('.totop_btn');

    window.addEventListener("scroll", () => {

        if (window.pageYOffset > 600) {
            to_Top.classList.add('enable')
        } else {
            to_Top.classList.remove('enable')
        }
    });

    to_Top.onclick = () => {
        window.scrollTo(0, 0)
    };

};


//Nav bar hamburger menu for mobile
const hamburger = () => {

    const nav_burger = document.getElementById('nav-hamburger')
    const navUL = document.getElementById('nav-ul');

    nav_burger.addEventListener('click', () => {

        navUL.classList.toggle('viewed');

    });

};


// Nav background shows when scroll
window.addEventListener('scroll', function () {
    let topNav = document.querySelector('nav');
    let windowPosition = window.scrollY > 50;
    topNav.classList.toggle('nav-scrolling', windowPosition);
});


//functions calls

hamburger();
navv();
toUp();
scrolling();
