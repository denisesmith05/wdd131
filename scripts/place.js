function calculateWindChill(temperature, windSpeed) {
    // Check if conditions for windchill calculation are met
    if (temperature <= 10 && windSpeed > 4.8) {
      // Formula for Celsius (°C)
      return Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
    } else if (temperature <= 50 && windSpeed > 3) {
      // Formula for Fahrenheit (°F)
      return Math.round(35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16));
    } else {
      // N/A if conditions not met
      return "N/A";
    }
  }
  
  const temperature = document.getElementById("temperature").textContent;
  const temperatureValue = parseFloat(temperature.slice(0, temperature.length - 1)); // Extract numeric value
  
  const windSpeed = document.getElementById("wind-speed").textContent;
  const windSpeedValue = parseFloat(windSpeed.slice(0, windSpeed.length - 3)); // Extract numeric value (assuming ' km/h' format)
  
  const windchillElement = document.getElementById("windchill");
  windchillElement.textContent = calculateWindChill(temperatureValue, windSpeedValue);
  
  // Get current year and last modified date
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const lastModified = document.lastModified;
  
  document.getElementById("current-year").textContent = currentYear;
  document.getElementById("last-modified").textContent = lastModified;
