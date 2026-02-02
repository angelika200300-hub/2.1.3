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


var repair = document.querySelectorAll('.show');
var repairopenPopupButton = document.querySelector('.button-show');
var repairclosePopupButton = document.querySelector('.button-lost');

repairopenPopupButton.addEventListener('click', function () {

for (var i = 0; i < repair.length; i++)  {
  repair[i].classList.remove('show');
  repairopenPopupButton.classList.add('show');
  repairclosePopupButton.classList.remove('show');
}});

repairclosePopupButton.addEventListener('click', function () {

  for (var i = 0; i < repair.length; i++)  {
  repair[i].classList.add('show');
  repairclosePopupButton.classList.add('show');
  repairopenPopupButton.classList.remove('show');
}});


