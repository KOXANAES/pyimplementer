const selectPage = document.querySelectorAll('.chooseContent');
const contentFrame = document.getElementById('contentFrame');

selectPage.forEach(elem => {
  elem.addEventListener('click', () => {
    selectPage.forEach(btn => btn.classList.remove('active'));
    elem.classList.add('active');
    const page = elem.getAttribute('value');
    contentFrame.src = page;
  });
});
