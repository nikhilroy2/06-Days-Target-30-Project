let countDownDate = new Date('01 January, 2020 00:00:00').getTime();
let setTime = setInterval(function(){
    let timeNow = new Date().getTime();
    let distance = countDownDate - timeNow;
    //day count
    let day = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hour = Math.floor((distance % (1000  * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // output
    let countdown = document.querySelector('#countdown');
    countdown.innerHTML = day +  'd ' + hour + 'h <br>' + minutes + 'm ' + seconds + 's';
    let comming = document.querySelector('#comming_2020');
    if (distance < 0) {
        clearInterval(setTime);
        countdown.innerHTML = 'Happy New Year 2020';
        comming.innerHTML = 'Welcome To 2020 Year'
    }
}, 1000)

// about me toggle 

function btn_About() {
    let contact_social = document.querySelector('.contact_social');
    contact_social.classList.toggle('add_contact_wrapper')
}