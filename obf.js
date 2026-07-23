// 1. 우클릭(컨텍스트 메뉴) 방지
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});

// 2. F12 및 주요 개발자 도구 단축키 방지
document.addEventListener('keydown', (e) => {
  // F12 키
  if (e.keyCode === 123) {
    e.preventDefault();
  }
  
  // Ctrl + Shift + I (개발자 도구) / Ctrl + Shift + J (콘솔) / Ctrl + Shift + C (요소 검사)
  if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
    e.preventDefault();
  }
  
  // Ctrl + U (페이지 소스 보기)
  if (e.ctrlKey && e.keyCode === 85) {
    e.preventDefault();
  }
});