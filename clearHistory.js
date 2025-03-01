const clearHistoryBtn = document.getElementById('clear-history');
const history = document.getElementById('history');
clearHistoryBtn.addEventListener('click', function(){
  history.innerHTML = "";
})