### 機能概要
***
パスワードを入力して、目のアイコンで表示・非表示を切り替えたい  
###  if(password.type === 'password') を条件式にして password.type     = 'text'; をする理由は？
***

type = "password"1つ1つの文字がアスタリスク ("*") やドット ("•") のような記号に置き換えられ、隠される。それを
type = "text" で基本的な単一行のテキスト入力欄にできる。つまり隠されたパスワードを見えるようにする。

