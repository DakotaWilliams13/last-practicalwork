const btnOpen = document.querySelector('.btn--open');
// console.log(btnOpen)
const modal = document.querySelector('.modal');

const btnClose = document.querySelector('.btn--close');

const modalViewHandler = () => {
    modal.classList.toggle('model--open');
}

btnOpen.addEventListener('click', modalViewHandler);
btnClose.addEventListener('click', modalViewHandler);





// const modalNotViewHandler = () => {
//     modal.classList.toggle('modal');
// }

// btnClose.addEventListener('click', modalNotViewHandler);
// // modal.addEventListener('click', modalNotViewHandler);