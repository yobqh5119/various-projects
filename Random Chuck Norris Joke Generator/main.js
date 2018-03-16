document.querySelector('.get-jokes').addEventListener('click', loadJokes)

//load Jokes
function loadJokes(e){
  //Number of Jokes
  const number = document.querySelector('#number').value

  const xhr = new XMLHttpRequest;

  // open the api
  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true )

  // load the api
  xhr.onload = function(){
    if(xhr.status === 200){
      const output = JSON.parse(this.responseText);
      let jokes = '';

      if(output.type === "success"){
        output.value.forEach(function(joke){
          jokes += `<li>${joke.joke}</li>`;
        })
      }else{
         jokes += `Something went wrong`;
      }

      document.querySelector('.jokes').innerHTML = jokes;
    }
  }

  // send the data
  xhr.send();

  e.preventDefault();
}
