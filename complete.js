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
   if(completed.disabled == true){
    completed.style.background = 'gray';
    completed.style.color = 'darkgray';
   }
  })
}