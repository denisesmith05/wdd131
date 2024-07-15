document.addEventListener('DOMContentLoaded', function() {
    function switchEmoticon() {
      const weatherIcon = document.getElementById('.icon');
      if (window.innerWidth >= 1200) {
        weatherIcon.src = 'images/emoticon.png';
      } else {
        weatherIcon.src = 'images/weather-icon.svg';
      }
    }
  
    // Run the function on load
    switchEmoticon();
  
    // Run the function on window resize
    window.addEventListener('resize', switchEmoticon);
  });
  