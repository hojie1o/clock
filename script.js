function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
  
    document.getElementById("hour1").textContent = hours[0];
    document.getElementById("hour2").textContent = hours[1];
    document.getElementById("minute1").textContent = minutes[0];
    document.getElementById("minute2").textContent = minutes[1];
  }
  
  setInterval(updateClock, 1000);
  updateClock();
  