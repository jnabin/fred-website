function toggleNavList(){
    let element = document.getElementById('navList');
    let menuToggleImg = document.getElementById('menuToggleImg');
    element.classList.toggle('collapsed');
    setTimeout(() => {
        if(element.classList.contains('collapsed')) {
            menuToggleImg.src="./asset/img/Menu-icon.svg";
        } else {
            menuToggleImg.src="./asset/img/Close-Icons.svg";
        }
    }, 600);
}