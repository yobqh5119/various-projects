const form = document.querySelector('#registrar');
const input = document.querySelector('input');
const ul = document.querySelector('#invitedList')

const mainDiv = document.querySelector('.main');
const div = document.createElement('div');
const filterLabel = document.createElement('label');
const filterCheckbox = document.createElement('input')


// Hiding Non-Responding Invitees
filterLabel.textContent = "Hide those who haven't responded yet";
filterCheckbox.type='checkbox';
div.appendChild(filterLabel);
div.appendChild(filterCheckbox);
mainDiv.insertBefore(div, ul);


filterCheckbox.addEventListener('change', ()=> {
  let lis = ul.children;
  let isChecked = event.target.checked;

  if(isChecked){
    for(let i = 0; i<lis.length; i++){
      let lisItems = lis[i];
      if(lisItems.className ==="responded"){
        lisItems.style.display='';
      }else{
        lisItems.style.display='none';
      }
    }
  }
  else{
    for(let i = 0; i<lis.length; i++){
      let listItems = lis[i];
      listItems.style.display='';
    }
  }
})




function createLI(text){
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = text;
  li.appendChild(span);

  const label = document.createElement('label');
  label.textContent = 'Confirmed';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  label.appendChild(checkbox);
  li.appendChild(label);

  const removeButton = document.createElement('button');
  removeButton.textContent="remove"
  li.appendChild(removeButton);

  const editButton = document.createElement('button');
  editButton.textContent="edit"
  li.appendChild(editButton);

  return li;
}

form.addEventListener('submit', (e)=> {
  e.preventDefault();
  let text = input.value;
  input.value = '';
  const li = createLI(text);
  ul.appendChild(li);
})

ul.addEventListener('change', ()=> {
  const checkbox = event.target
  const checked = checkbox.checked;
  const li = checkbox.parentNode.parentNode;

  if(checked){
    li.className='responded';
  }else{
    li.className='';
  }
})

ul.addEventListener('click', ()=>{
  const button = event.target;
  const li = button.parentNode;
  if(button.tagName=='BUTTON'){
      if(button.textContent === 'remove'){
      ul.removeChild(li);
    }

      else if(button.textContent === 'edit'){
        const span = li.firstElementChild;
        const input = document.createElement('input');
        input.type='text';
        input.value=span.textContent;
        li.insertBefore(input, span);
        li.removeChild(span);

        button.textContent = 'save';
      }
      else if(button.textContent === 'save'){
        const input = li.firstElementChild;
        const span = document.createElement('span');
        span.textContent = input.value;
        li.insertBefore(span, input);
        li.removeChild(input);
        button.textContent = 'edit'
      }
  }
})
