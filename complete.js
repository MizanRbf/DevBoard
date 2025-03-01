const completeButton = document.querySelectorAll('.complete');
const taskNumber = document.getElementById('task-number');
const navCheckBox = document.getElementById('nav-checkbox');
console.log(taskNumber);
for(let i = 0; i < completeButton.length; i++){
  let completed = completeButton[i];
  completed.addEventListener('click',function(){
    alert('Board Updated Successfully');
  let currentTaskNumber = parseInt(taskNumber.innerText);
  currentTaskNumber--;
  taskNumber.innerText = currentTaskNumber;
  let currentNavCheckBox = parseInt(navCheckBox.innerText);
   currentNavCheckBox++;
   navCheckBox.innerText = currentNavCheckBox;
   completed.disabled = true;

   // History Make
   const history = document.getElementById('history');
   const cardTitle = document.querySelectorAll('.card-title').innerText;
   console.log(cardTitle);
   const div = document.createElement('div');
   div.innerText = 'You have completed the task ${cardTitle} at ${}';
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