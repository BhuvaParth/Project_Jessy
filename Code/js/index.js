
// ------------ sticky header ----
window.addEventListener('scroll', function () {

    let navbar = document.getElementById('st-nav');

    if (window.pageYOffset >= 1) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// -------------------- Testimonials-slider ----

$('.stage-inner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1500,
}); 

// -------------------- form-validation ----

let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let message = document.getElementById('message');
let flag = true;

function validateinfo() {

    // Name validation

    if (name.value == "") {
        document.getElementById('nameError').innerHTML = "*Please Enter Username";
        flag = false;
    } else if (name.value.length < 3) {
        document.getElementById('nameError').innerHTML = "*Please Enter Mini 3 Char";
        flag = false;
    } else {
        document.getElementById('nameError').innerHTML = "";
        flag = true;
    }

    // Email validation

    if (email.value == "") {
        document.getElementById('emailError').innerHTML = "*Please Enter Email Address";
        flag = false;
    } else if (email.value.length < 10) {
        document.getElementById('emailError').innerHTML = "*Please Enter Mini 10 Char";
        flag = false;
    } else if (email.value.length > 30) {
        document.getElementById('emailError').innerHTML = "*Please Enter Max 30 Char";
        flag = false;
    } else {
        document.getElementById('emailError').innerHTML = "";
        flag = true;
    }

    // Phone validation

    if (phone.value == "") {
        document.getElementById('phoneError').innerHTML = "*Please Enter Phone Number";
        flag = false;
    } else if (isNaN(phone.value)) {
        document.getElementById('phoneError').innerHTML = "*Please Enter Number Only";
        flag = false;
    } else {
        document.getElementById('phoneError').innerHTML = "";
        flag = true;
        if (phone.value.length < 10) {
            document.getElementById('phoneError').innerHTML = "*Please Enter Mini 10 Number";
            flag = false;
        } else if (phone.value.length > 10) {
            document.getElementById('phoneError').innerHTML = "*Please Enter Max 10 Number";
            flag = false;
        }
    }

    // Message validation

    if (message.value == "") {
        document.getElementById('messageError').innerHTML = "*Please Enter Message";
        flag = false;
    } else if (message.value.length < 5) {
        document.getElementById('messageError').innerHTML = "*Please Enter Mini 5 Char";
        flag = false;
    } else {
        document.getElementById('messageError').innerHTML = "";
        flag = true;
    }

    if (flag == true) {
        alert("Your Message Is Successfully Submited");
    }

    return flag;
}
