const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('confirm');


form.addEventListener('submit', function(e){
    if(username.value === ''){
        document.querySelector('.form-control> small').textContent='';
    }
});