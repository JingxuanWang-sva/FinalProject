document.querySelector('a-assets').addEventListener('loaded', function () {
  document.querySelector('.preloader').style.display = 'none';
  console.log('loaded lg');
});