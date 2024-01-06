document.addEventListener('DOMContentLoaded', function () {
    const textContainer = document.getElementById('rightText');
    const textToReveal = 'VIGNESH\nARAVINDH B';
  
    function revealText() {
      for (let i = 0; i < textToReveal.length; i++) {
        setTimeout(function () {
          textContainer.textContent += textToReveal[i];
        }, i * 100); // Adjust the delay as needed
      }
    }
  
    revealText();
  });
  