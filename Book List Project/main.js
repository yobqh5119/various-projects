// book constructor
function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor
function UI(){

};

// UI prototype

// 1. Adding list
UI.prototype.addBookToLIst = function(book){
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

// 2.Clearing form
UI.prototype.clearList = function(){
  document.getElementById('title').value = "";
  document.getElementById('author').value = "";
  document.getElementById('isbn').value = "";
}

// 3. sendMsg function
UI.prototype.sendMsg = function(msg, className){
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

// 4. remove Items function
UI.prototype.removeItems = function(target,ui,msg,className){
  if(target.className === "delete"){
    target.parentElement.parentElement.remove();
    ui.sendMsg(msg,className);
  }
}


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
    ui.addBookToLIst(book);
    ui.sendMsg('Item have been added successfully','success')
    ui.clearList();
  }
  e.preventDefault();
})

// Event listener for removing Items
document.querySelector('#book-list').addEventListener('click', function(e){
  const ui = new UI();
  ui.removeItems(e.target, ui, 'Item has been removed!', 'success');
  e.preventDefault();
})
