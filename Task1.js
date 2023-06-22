var listItems = document.querySelectorAll('#navbar ul h1 a');

listItems.forEach(function(listItem) {
  listItem.addEventListener('click', function() {
    listItems.forEach(function(item) {
      item.classList.remove('active');
    });
    listItem.classList.add('active');
  });
});



