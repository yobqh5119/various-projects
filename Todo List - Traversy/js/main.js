const listForm = document.querySelector('#task-form');
const userInput = document.querySelector('input#task');
const inputBtn = document.querySelector('input.btn');

const filterForm = document.querySelector('input#filter')
const ul = document.querySelector('ul.collection')
const clearBtn = document.querySelector('a.clear-tasks')




//global function
loadEventListener();


//Load all event listeners
function loadEventListener(){
  //event listener for the list form Button to Add Tasks
  listForm.addEventListener('submit', addTasks)

  //remove clicked list items
  ul.addEventListener('click', removeItems)

  //clear tasks button
  clearBtn.addEventListener('click', clearList)

  //filter through the list
  filterForm.addEventListener('keyup', filterList)
}

//All of the individual Functions for the Event Listener

//function to addTasks
function addTasks(e){
  //check if the form is empty
  if(userInput.value === ''){
    alert('Please type in your task')
  }

  //creating the lists from the user Input
  const li = document.createElement('li');
  li.className = "collection-item";
  li.appendChild(document.createTextNode(userInput.value));

  //creating the x mark
  const icon = document.createElement('a');
  icon.className = "delete-item secondary-content";
  icon.innerHTML = '<i class= "fa fa-remove"></i>';

  //append elements
  li.appendChild(icon)
  ul.appendChild(li);

  //Store in Local Storage
  storeTasks(userInput.value);

  //Reset on the form
  userInput.value = "";

  e.preventDefault();
}

//Adding the list in local storage
function storeTasks(task){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else{
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Remove Task Items in the To-Do List
function removeItems(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure you want to delete?')){
      e.target.parentElement.parentElement.remove();
    }
  }
}

//Clear list function
function clearList(e){
  while(ul.firstChild){
    ul.firstChild.remove();
  }
}

//filter thorugh the array
function filterList(e){
  const search = e.target.value.toLowerCase();
  ul.childNodes.forEach(function(list){
    const existing = list.textContent.toLowerCase();
    if(existing.indexOf(search) != -1){
      list.style.display = "block"
    }else{
      list.style.display = "none"
    }
  })
}
