const tabLinks = document.querySelectorAll('.tablinks');
const tabContents = document.querySelectorAll('.tabcontent');

tabLinks.forEach(tabLink => {
    // tabLink.addEventListener('click', function(event){
        
    // });
    tabLink.addEventListener('click', openTabs);
});

function openTabs(evt) {
    const btnTarget = evt.currentTarget;
    const day = btnTarget.getAttribute('data-day');

    for(let tabContent of tabContents){
        tabContent.classList.remove('tabcontent-active');
    }
    for (let tabLink of tabLinks)
    {
        tabLink.classList.remove('tablinks-active');
    }

    document.querySelector(`#${day}`).classList.add("tabcontent-active");

    btnTarget.classList.add("tablinks-active");
}