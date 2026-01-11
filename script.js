var popup = document.querySelectorAll('.modal');
var openPopupButton = document.querySelector('.button-open');
var closePopupButton = document.querySelector('.button-close');

openPopupButton.addEventListener('click', function () {

for (var i = 0; i < popup.length; i++)  {
  popup[i].classList.remove('modal');
  openPopupButton.classList.add('modal');
  closePopupButton.classList.remove('modal');
}});

closePopupButton.addEventListener('click', function () {

  for (var i = 0; i < popup.length; i++)  {
  popup[i].classList.add('modal');
  closePopupButton.classList.add('modal');
  openPopupButton.classList.remove('modal');
}});
