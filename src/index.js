document.addEventListener('DOMContentLoaded', () => {
  const nameElement = document.getElementById('name');

  anime({
    targets: nameElement,
    translateY: [-50, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 1500,
    delay: 100,
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const squareContainer = document.querySelector('.square-container');
  
  const numSquares = 100; // 设置方块的数量
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  
  for (let i = 0; i < numSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    squareContainer.appendChild(square);
    
    // 随机生成方块的初始位置和大小，以填满整个画面
    const startX = Math.random() * windowWidth;
    const startY = Math.random() * windowHeight;
    const size = Math.random() * 50 + 20;
    
    anime({
      targets: square,
      translateX: [startX, `${startX + Math.random() * 200 - 100}px`], // 随机水平移动
      translateY: [startY, `${startY + Math.random() * 200 - 100}px`], // 随机垂直移动
      scale: [0, 1],
      opacity: [0, 1],
      duration: 2000 + Math.random() * 3000, // 随机持续时间
      easing: 'easeInOutQuad',
      loop: true,
      direction: 'alternate',
    });
  }
});

