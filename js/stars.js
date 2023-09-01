// Function to generate random number within a range
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  // Get the background element
  var background = document.querySelector('.background');
  
  // Calculate the number of stars to be generated based on the window size
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var numberOfStars = Math.round((windowWidth * windowHeight) / 10000); // Adjust the density of stars by changing the division factor
  
  // Generate stars dynamically
  for (var i = 0; i < numberOfStars; i++) {
    var star = document.createElement('li');
    star.style.left = getRandomNumber(0, windowWidth) + 'px';
    star.style.top = getRandomNumber(0, windowHeight) + 'px';
    star.style.animationDelay = getRandomNumber(0, 15) + 's'; // Adjust the range of delay as desired
    background.appendChild(star);
  }
  