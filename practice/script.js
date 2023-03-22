//initialize variable
const bar = document.querySelector('.bar');
const navBar = document.querySelector('.navbar');
let isOpen = true;


//close function
const close = () => {
    navBar.classList.remove('dropdown');
}


//open function
const open = () => {
    navBar.classList.add('dropdown');
}


bar.addEventListener('click', () => {

    if(isOpen){
        open();
        isOpen = false;
        return;
    }

    if(!isOpen){
        close();
        isOpen = true;
        return;
    }

});