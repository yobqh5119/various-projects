class Book{
  constructor(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book){
    const tbody = document.getElementById('book-list')
    const list = document.createElement('tr');
    list.innerHTML = `
      <th>${book.title}</th>
      <th>${book.author}</th>
      <th>${book.isbn}</th>
      <th><a href = "#" class = "delete"> X </a></th>
    `;
    tbody.appendChild(list)
  }

  clearList(){
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('isbn').value = "";
  }

  sendMsg(msg,className){
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(msg));

    //select the parent element
    const container = document.querySelector('.container');
    //select the reference element
    const form = document.getElementById('book-form');

    //insert
    container.insertBefore(div,form);

    //setTimeout
    setTimeout(function(){
      document.querySelector('.alert').remove();
    }, 2000)
  }

  removeItems(target,ui,msg,className){
    if(target.className === "delete"){
      target.parentElement.parentElement.remove();
      ui.sendMsg(msg,className);
    }
  }
}

// Local Storage Class
class Storage {
  // Get Data
  static getContent(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    }else{
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
  }

  // add
  static addToStorage(book){
    let tasks = Storage.getContent();

    tasks.push(book);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  //display
  static displayContent(){
    let tasks = Storage.getContent();
    let ui = new UI();

    tasks.forEach(function(task){
      ui.addBookToList(task);
    })
  }

  //remove
  static removeContent(isbn){
    let tasks = Storage.getContent();

    tasks.forEach(function(task,index){
      if(task.isbn === isbn){
        tasks.splice(index,1)
      }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

}
// Event Listener for the DOM loading
document.addEventListener('DOMContentLoaded', Storage.displayContent());

// Event Listener for submit

document.getElementById('book-form').addEventListener('submit', function(e){
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  const book = new Book(title,author,isbn);

  //instantiate UI
  const ui = new UI();

  //validate if the inputs are valid
  if(title === "" || author === "" || isbn === ""){
    ui.sendMsg('Please make sure the form is complete', 'error')
  }else{
    // add items to the list
    ui.addBookToList(book);
    // add to LS
    Storage.addToStorage(book);

    ui.sendMsg('Item have been added successfully','success')
    ui.clearList();
  }
  e.preventDefault();
})

// Event listener for removing Items
document.querySelector('#book-list').addEventListener('click', function(e){
  const ui = new UI();
  ui.removeItems(e.target, ui, 'Item has been removed!', 'success');

  //Remove from local storage
  Storage.removeContent(e.target.parentElement.previousElementSibling.textContent);
  e.preventDefault();
})
