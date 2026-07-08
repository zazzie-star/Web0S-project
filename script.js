function updateTime() {
     var WHATNOW = new Date().toLocaleString();
     var timeText = document.querySelector("#timeElement");
     timeText.innerHTML = WHATNOW;
    }

setInterval(updateTime, 1000);
   