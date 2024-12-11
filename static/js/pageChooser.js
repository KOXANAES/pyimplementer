const toggleButton = document.querySelector('.toggleButton');
const toggleButtonReturn = document.querySelector('.toggleButtonReturn');

const lessonContent = document.getElementById('lessonContent');
const practiceContent = document.getElementById('practiceContent');

function toggleContent(button) {
    if (lessonContent.style.display === 'none') {
        lessonContent.style.display = 'block'; 
        practiceContent.style.display = 'none';
        button.textContent = 'Перейти к практике';
    } else {
        lessonContent.style.display = 'none';
        practiceContent.style.display = 'block';
        button.textContent = 'Перейти к теории';
    }
}

toggleButton.onclick = function() {
    toggleContent(toggleButton);
};

toggleButtonReturn.onclick = function() {
    toggleContent(toggleButtonReturn);
};