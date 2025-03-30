const users = [
    { user: 'MadeM', pass: '3091#' },
    { user: 'JoseM', pass: '2990#' },
    ];

    const validation = (user, pass) => users.find( ( person ) => (person.user === user) && (person.pass === pass));

    const login = () => {
    const user = document.getElementById( 'Username' ).value;
    const pass = document.getElementById( 'Password' ).value;
    if ( validation(user, pass) !== undefined ) {
    
    window.open('PANTALLAS/indexP.html');
    window.close('index.html');
    
    }
    else {
    alert( 'Usuario o contraseña incorrectos' );
    }
    }

var swiper = new Swiper(".slide-content", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
    });

var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        grid: {
        rows: 2,
        },
        spaceBetween: 20,
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
    });
