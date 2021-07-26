//side Navigation bar
const menu = document.querySelector('.hamburger');
const navlinks  = document.querySelector('.nav-links');

menu.addEventListener('click',toggleMenu);

function toggleMenu(){
    navlinks.classList.toggle("open");
}

//nav closes after selection

document.addEventListener("click",function(e)
{
    if(e.target.closest("li"))
    {
        toggleMenu();
    }
});