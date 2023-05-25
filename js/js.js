const btnlop = document.querySelector('.lop');
const headerlop =  document.querySelector('.header-lop');

btnlop.addEventListener('click', function() {
    headerlop.classList.toggle('active');
    console.log("click")
});
