class Github{
  constructor(){
    this.client_id = '58e63bcd98fabb045add'
    this.client_secret = '70fba56cf8918927aea1e92e092e9b020b8b10c4'
    this.repos_account = 5,
    this.repos_sort = 'created: asc';
  }

  async getUser(user){

    // profile
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_account}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData= await profileResponse.json();

    const repoData= await repoResponse.json();

    return {
      profile: profileData,
      repo: repoData
    }
  }
}
