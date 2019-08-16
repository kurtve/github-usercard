
/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

let userHandle = 'kurtve';

axios.get(`https://api.github.com/users/${userHandle}`)
  .then( response => {
    const card = makeCard(response);
    const cards = document.querySelector('.cards');
    cards.appendChild(card);
  })
  .catch( err => {
    console.log('An error occurred!');
    console.log(err);
  });


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/




/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

const makeCard = obj => {

  const card = document.createElement('div');
  card.className = 'card';

  const img = document.createElement('img');
  img.src = obj.data.avatar_url;
  card.appendChild(img);

  const div = document.createElement('div');
  div.className = 'card-info';

  const h3 = document.createElement('h3');
  h3.className = 'name';
  h3.textContent = obj.data.name;
  div.appendChild(h3);

  let p = document.createElement('p');
  p.className = 'username';
  p.textContent = obj.data.login;
  div.appendChild(p);

  p = document.createElement('p');
  p.textContent = `Location: ${obj.data.location}`;
  div.appendChild(p);

  p = document.createElement('p');
  p.textContent = 'Profile: ';
  const a = document.createElement('a');
  a.href = obj.data.html_url;
  a.textContent = obj.data.html_url;
  p.appendChild(a);
  div.appendChild(p);

  p = document.createElement('p');
  p.textContent = `Followers: ${obj.data.followers}`;
  div.appendChild(p);

  p = document.createElement('p');
  p.textContent = `Following: ${obj.data.following}`;
  div.appendChild(p);

  p = document.createElement('p');
  p.textContent = `Bio: ${obj.data.bio}`;
  div.appendChild(p);

  card.appendChild(div);

  return card;
};



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
