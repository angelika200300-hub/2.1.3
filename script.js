var popup = document.querySelectorAll('.modal, show');
var openPopupButton = document.querySelector('.button-open, button-show');
var closePopupButton = document.querySelector('.button-close, button-lost');

openPopupButton.addEventListener('click', function () {

for (var i = 0; i < popup.length; i++)  {
  popup[i].classList.remove('modal', 'show');
  openPopupButton.classList.add('modal', 'show');
  closePopupButton.classList.remove('modal', 'show');
}});

closePopupButton.addEventListener('click', function () {

  for (var i = 0; i < popup.length; i++)  {
  popup[i].classList.add('modal', 'show');
  closePopupButton.classList.add('modal', 'show');
  openPopupButton.classList.remove('modal', 'show');
}});


