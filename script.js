const btnCreate = document.querySelector('.btn-create');
const noteList = document.querySelector('.note-list');

noteList.innerHTML = localStorage.getItem('note');
btnCreate.addEventListener('click', function () {
    noteList.innerHTML += `<p class="input-box" contenteditable="true">
    <img src="/notes-app-img/images/delete.png" alt="" class="btn-delete">
    </p>`
    saveNote();
})

noteList.addEventListener('click', function (e) {
    if(e.target.classList.contains('btn-delete')) {
        e.target.parentElement.remove();
        saveNote();
    }
})

noteList.addEventListener('input', function () {
    saveNote();
})

function saveNote () {
    localStorage.setItem('note', noteList.innerHTML);
}

