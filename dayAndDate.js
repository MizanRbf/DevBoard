weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
   const currentDate = new Date();
   const currentTime = currentDate.toLocaleTimeString();
   const currentDay = currentDate.getDay();
   const finalCurrentDay = weekDays[currentDay];

   const day = document.getElementById('day');
   day.innerText = `${finalCurrentDay}`;

   const date = document.getElementById('date');
   date.innerText = `${currentTime}`;
   
