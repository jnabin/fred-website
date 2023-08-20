function toggleNavList(fromDeepDirectory = false){
    let element = document.getElementById('navList');
    let menuToggleImg = document.getElementById('menuToggleImg');
    element.classList.toggle('collapsed');
    setTimeout(() => {
        if(element.classList.contains('collapsed')) {
            menuToggleImg.src= fromDeepDirectory ? "../asset/img/Menu-icon.svg" : "./asset/img/Menu-icon.svg";
        } else {
            menuToggleImg.src=fromDeepDirectory ? "../asset/img/Close-Icons.svg" : "./asset/img/Close-Icons.svg";
        }
    }, 600);
}