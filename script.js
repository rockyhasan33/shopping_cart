const body = document.body;
const navbar = body.querySelector('.navbar');


window.addEventListener('scroll', (e) => {
    if(body.screenTop > 100) {
        alert('hello...')
    }
})

