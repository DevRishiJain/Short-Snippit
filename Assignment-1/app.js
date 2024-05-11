const userCardGrid = document.querySelector('.user-card-grid');
const loader = document.querySelector('.loader');

const fetchUsers = async () => {
  loader.style.display = 'flex';
  userCardGrid.innerHTML = '';

  try {
    const response = await fetch('https://reqres.in/api/users?page=1');
    const data = await response.json();
    const users = data.data;

    users.forEach(user => {
      const userCard = document.createElement('div');
      userCard.classList.add('user-card');

      const userAvatar = document.createElement('img');
      userAvatar.classList.add('user-avatar');
      userAvatar.src = user.avatar;
      userAvatar.alt = user.first_name;

      const userName = document.createElement('h3');
      userName.classList.add('user-name');
      userName.textContent = `${user.first_name} ${user.last_name}`;

      const userEmail = document.createElement('p');
      userEmail.classList.add('user-email');
      userEmail.textContent = user.email;

      userCard.appendChild(userAvatar);
      userCard.appendChild(userName);
      userCard.appendChild(userEmail);

      userCardGrid.appendChild(userCard);
    });
  } catch (error) {
    console.error('Error fetching users:', error);
  } finally {
    loader.style.display = 'none';
  }
};

const clearUserCards = () => {
  userCardGrid.innerHTML = '';
};