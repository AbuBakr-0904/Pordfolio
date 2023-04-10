
let btn = document.getElementById('btn');
let login = document.querySelector('.login');
let login__btn = document.querySelector('.login__btn');

btn.onclick = function(){
  login.classList.add('open')
}

login__btn.onclick = function(){
  login.classList.remove('open')
}
