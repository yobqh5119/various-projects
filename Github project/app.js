//Init github
const github = new Github;

const ui = new UI;
// search input
const searchUser = document.querySelector('#searchuser')

// search input event listener
searchUser.addEventListener('keyup', (e)=>{
  // get input text
  const userText = e.target.value;

  if(userText !== ''){
    // make HTTP call
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === "Not Found"){
          // show alert
          ui.showAlert('User not Found', 'alert alert-danger')
        }else{
          // show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repo)
        }
      })
  }else {
    // clear profile
    ui.clearProfile();
  }
})
