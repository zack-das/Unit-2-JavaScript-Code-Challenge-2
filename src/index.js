document.addEventListener('DOMContentLoaded', () => {

  const ramenMenu = document.getElementById('ramen-menu');
  const detailImage = document.querySelector('#ramen-detail .detail-image');
  const detailName = document.querySelector('#ramen-detail .name');
  const detailRestaurant = document.querySelector('#ramen-detail .restaurant');
  const ratingDisplay = document.getElementById('rating-display');
  const commentDisplay = document.getElementById('comment-display');
  const newRamenForm = document.getElementById('new-ramen');

  function fetchRamens() {
    fetch('http://localhost:3000/ramens')
      .then(response => response.json())
      .then(ramens => {
        displayRamenMenu(ramens);
      });
  }

  // Displaying ramen image in menu
  function displayRamenMenu(ramens) {
    ramens.forEach(ramen => {
      const img = document.createElement('img');
      img.src = ramen.image;
      img.alt = ramen.name;
      
      
      img.addEventListener('click', () => {
        displayRamenDetails(ramen);
      });
      
      ramenMenu.appendChild(img);
    });
  }

  // Display ramen details
  function displayRamenDetails(ramen) {
    detailImage.src = ramen.image;
    detailImage.alt = ramen.name;
    detailName.textContent = ramen.name;
    detailRestaurant.textContent = ramen.restaurant;
    ratingDisplay.textContent = ramen.rating;
    commentDisplay.textContent = ramen.comment;
  }

  //  new ramen form submission
  newRamenForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newRamen = {
      name: e.target.name.value,
      restaurant: e.target.restaurant.value,
      image: e.target.image.value,
      rating: e.target.rating.value,
      comment: e.target['new-comment'].value
    };
    
    // Adding new ramen to the menu
    const img = document.createElement('img');
    img.src = newRamen.image;
    img.alt = newRamen.name;
    img.addEventListener('click', () => displayRamenDetails(newRamen));
    ramenMenu.appendChild(img);
    
   
    newRamenForm.reset();
  });


  fetchRamens();
});