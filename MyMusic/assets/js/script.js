let navItems = document.querySelectorAll('#nav a.nav-link')

for (item of navItems){
    item.addEventListener('click', ()=>{
        console.log('click')
        console.log(item)
        item.classList.toggle("active");
    })
}