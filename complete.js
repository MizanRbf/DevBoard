const completeButton = document.querySelectorAll('.complete');
const taskNumber = document.getElementById('task-number');
const navCheckBox = document.getElementById('nav-checkbox');

let clickedBtns = new Set();
for(let i = 0; i < completeButton.length; i++){
  let completed = completeButton[i];
  completed.addEventListener('click',function(){
    alert('Board Updated Successfully');
  
    clickedBtns.add(i);

    if(clickedBtns.size === completeButton.length){
      alert('congrates!!! You have completed all the current task')
    }

  // Task number less
  let currentTaskNumber = parseInt(taskNumber.innerText);
  currentTaskNumber--;
  taskNumber.innerText = currentTaskNumber;

  // Navbar CheckBox update
  let currentNavCheckBox = parseInt(navCheckBox.innerText);
   currentNavCheckBox++;
   navCheckBox.innerText = currentNavCheckBox;


   completed.disabled = true;
   // History Make
   weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
   const currentDate = new Date();
   const currentTime = currentDate.toLocaleTimeString();
   const currentDay = currentDate.getDay();
   const finalCurrentDay = weekDays[currentDay];

   const history = document.getElementById('history');
   const currentCard = this.closest('.cards');
   
   const cardTitle = currentCard.querySelector('.card-title').innerText;
   
    
  // New history item  
    const div = document.createElement('div');
    div.innerText = `You have completed the task ${cardTitle} at ${currentTime}`;
    div.classList.add('bg-slate-100');
    div.classList.add('p-[10px]');
    div.classList.add('rounded-lg');
    history.appendChild(div);


  //  Button disabled
   if(completed.disabled == true){
    completed.style.background = 'gray';
    completed.style.color = 'lightgray';
   }
   
  })
}