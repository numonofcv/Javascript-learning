const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const closeBtnModal = document.querySelector('.close-modal')
const OpenBtnModal = document.querySelector('.show-modal')
const openBtn = function () {

    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
function closeBtn() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

OpenBtnModal.addEventListener('click', openBtn);
closeBtnModal.addEventListener('click', closeBtn);

document.addEventListener('keydown', function (e) {
       if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeBtn();
       }
})