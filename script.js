const bigText = document.getElementById('bigText');

bigText.addEventListener('mousemove', (event) => {
  const { clientX, clientY } = event;
  const { offsetWidth, offsetHeight } = bigText;
  const centerX = offsetWidth / 2;
  const centerY = offsetHeight / 2;
  const deltaX = clientX - (bigText.offsetLeft + centerX);
  const deltaY = clientY - (bigText.offsetTop + centerY);
  const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

  const maxRadius = Math.max(centerX, centerY);
  const normalizedDistance = Math.min(distance / maxRadius, 1);

  const circle = document.createElement('div');
  circle.classList.add('circle');
  circle.style.width = circle.style.height = `${maxRadius * 2}px`;
  circle.style.transform = `translate(-50%, -50%) scale(${normalizedDistance})`;

  // Remove any existing circles
  const existingCircle = bigText.querySelector('.circle');
  if (existingCircle) {
    existingCircle.remove();
  }

  bigText.appendChild(circle);
});

bigText.addEventListener('mouseleave', () => {
  const existingCircle = bigText.querySelector('.circle');
  if (existingCircle) {
    existingCircle.remove();
  }
});


