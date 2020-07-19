const p = document.getElementById('text');

    // タイピングする文字列を用意しておく
    const textLists = [
      'good morning',
      'hello',
      'good night',
      'java script',
      'Ruby',
      'html',
      'css'
    ];

  let checkTexts = [];

  createText();

  function createText() {
    const rnd = Math.floor(Math.random() * textLists.length);

    p.textContent = '';
    checkTexts = textLists[rnd].split('').map(function(value) {
      const span = document.createElement('span');
      span.textContent = value;
      p.appendChild(span);

      return span;
    });
  }
  document.addEventListener('keydown', keyDown);

  function keyDown(e) {
    // キーボードからの入力は「e.key」に格納されている
    if(e.key === checkTexts[0].textContent) {
      checkTexts[0].className = 'add-blue';

      checkTexts.shift();
      if(!checkTexts.length) createText();
    }
  }
  
  // 30秒後にゲームオーバーと表示される
const gameover = function(){
  window.location.href = 'file:///Users/eiki/projects/typgame/gameover/gameover.html'
};
setTimeout(gameover, 10000);
