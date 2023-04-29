'use strict';

let visible  = document.getElementById('visible');
let password = document.getElementById('password');

visible.addEventListener('click', (e) => {
  e.preventDefault();

  if(password.type === 'password') {
		password.type     = 'text';
		document.querySelector('.password-icon').src = './img/eye-open.png';
		document.querySelector('.password-icon').alt = 'パスワードを見る';

	} else {
		password.type     = 'password';
		document.querySelector('.password-icon').src = './img/eye-close.png';
		document.querySelector('.password-icon').alt = 'パスワードを見ない';
	}

});

