
const regbtn = document.querySelector('.reg-btn');
const logbtn = document.querySelector('.btn2');
const logbox = document.querySelector('.lr');
const regbox = document.querySelector('.rr');
// regbtn.addEventListener('click', function() {
// regbox.classList.add('active');
// });

regbtn.addEventListener('click', function() {
    console.log("click");
    logbox.classList.add('active');
    regbox.classList.add('active');
    });
    
logbtn.addEventListener('click', function() {
    
    logbox.classList.remove('active');
    regbox.classList.remove('active');
    });
        