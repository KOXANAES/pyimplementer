const chooseContent = document.querySelectorAll('.chooseContent');
const contentFrame = document.getElementById('contentFrame');

chooseContent.forEach(element => {
  element.addEventListener('click', () => {
    const page = element.getAttribute('value');
    contentFrame.src = page;
  });
});