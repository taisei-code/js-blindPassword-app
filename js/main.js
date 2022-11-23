'use strict';

let visible  = document.getElementById('visible');
let password = document.getElementById('password');

document.getElementById('visible').addEventListener('click', e => {
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
})

/* 

  やりたいこと
  ・パスワードの目アイコンを切り替えたい

  初期：目を閉じてる（eye-close.png）

  アプローチ
  ・要素を取得
  - input要素、入力された値（id=password)
  - button要素、目アイコン（id=visible)

  ・目のアイコンをクリック時にイベントを設定
  - id = visibleをクリックした時にaddEventListener

  ・どういう条件で処理を実行する
  - id = password と type= passwordで一致する

  ・処理内容
  - 初期：目を閉じてる（eye-close.png）から目が空いてる（eye-open.png）に切り替わる
  

*/
