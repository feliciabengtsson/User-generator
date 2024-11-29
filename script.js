document.getElementById('fetchUser').addEventListener('click', getRandomUser);
const loading = document.querySelector('#loading-spinner');
const userContainer = document.querySelector('#userContainer')

loading.style.display = 'none';

function getRandomUser() {
  loading.style.display = 'block';
  userContainer.innerHTML = ''; //Töm tidigare användare

  fetch('https://randomuser.me/api/?results=4 ')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      console.log('test')
      return response.json();
    })
    .then(data => {
      const users = data.results;

      users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card')
        userCard.innerHTML =
        `<p><span>Name: </span>${user.name.first} ${user.name.last}</p>
        <p><span>Email: </span>${user.email}</p>
        <img id="user-picture" src="${user.picture.thumbnail}" alt="User Avatar">`;

        userContainer.appendChild(userCard);
      });

      loading.style.display = 'none';
      userContainer.style.border = '2px solid #dcbef0';
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}
