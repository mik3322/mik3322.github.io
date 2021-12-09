const menuTab = document.querySelectorAll('.menu-tab');
const menuContent = document.querySelectorAll('.menu-content');

function selectTab(e){
    removeSelection();
    removeShow();
    this.classList.add('selected');
    const menuContentShow = document.querySelector(`#${this.id}-content`);
    menuContentShow.classList.add('show');
}
function removeSelection(){
    menuTab.forEach(tab => tab.classList.remove('selected'))
}
function removeShow(){
    menuContent.forEach(menu => menu.classList.remove('show'))
}

menuTab.forEach(item => item.addEventListener('click', selectTab));
console.log(menuContent)